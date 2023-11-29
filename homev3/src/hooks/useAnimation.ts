import { useRecoilState } from "recoil";
import { animationsAtom } from "../recoil/animation.ts";
import { AnimationKey, AnimationStatus } from "../models/animation.ts";

type AnimationDAGNode = {
  next: AnimationKey;
  intervalMS: number; // positive integer or zero
};

type AnimationDAG = {
  [key in AnimationKey | "start" | "end"]: AnimationDAGNode[] | "end";
};

// 閉路を含んではならない
const DAG: AnimationDAG = {
  start: [{ next: "opening", intervalMS: 0 }],
  opening: [{ next: "sunrise", intervalMS: 0 }],
  sunrise: [{ next: "portfolioLighting", intervalMS: 0 }],
  portfolioLighting: "end",
  end: [],
};

export const useAnimation = () => {
  const [animations, setAnimations] = useRecoilState(animationsAtom);
  const executeAnimation = async (animationName: AnimationKey) => {
    try {
      setAnimations({
        ...animations,
        [animationName]: AnimationStatus.Running,
      });
      const handler = animations[animationName].handler;
      if (!handler) {
        setAnimations({
          ...animations,
          [animationName]: AnimationStatus.Skipped,
        });
      } else {
        await handler();
        setAnimations({
          ...animations,
          [animationName]: AnimationStatus.Completed,
        });
      }
    } catch (error) {
      console.error(`Error executing ${animationName}:`, error);
      setAnimations({ ...animations, [animationName]: AnimationStatus.Failed });
    }
  };

  async function animateDAG(
    dag: AnimationDAG = DAG,
    currentNode: AnimationKey | "start" | "end" = "start",
  ) {
    if (currentNode === "end") return;

    const nodes = dag[currentNode];
    if (nodes === "end") return;

    for (const node of nodes) {
      await executeAnimation(node.next);
      if (node.intervalMS > 0) {
        await new Promise((resolve) => setTimeout(resolve, node.intervalMS));
      } else if (node.intervalMS < 0) {
        throw new Error("intervalMS must be positive value or zero");
      }
      await animateDAG(dag, node.next);
    }
  }

  return {
    animateDAG,
  };
};
