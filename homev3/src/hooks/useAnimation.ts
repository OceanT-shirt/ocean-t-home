import { useRecoilValue, useSetRecoilState } from "recoil";
import { AnimationKey, AnimationStatus } from "../models/animation.ts";
import { useCallback } from "react";
import {
  animationHandlerAtom,
  animationStatusAtom,
} from "../recoil/animation.ts";

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
  const animationHandlers = useRecoilValue(animationHandlerAtom);
  const setAnimationState = useSetRecoilState(animationStatusAtom);
  const executeAnimation = useCallback(
    async (animationName: AnimationKey) => {
      try {
        setAnimationState((currentAnimations) => ({
          ...currentAnimations,
          [animationName]: AnimationStatus.Running,
        }));
        const handler = animationHandlers[animationName];
        if (!handler) {
          setAnimationState((currentAnimations) => ({
            ...currentAnimations,
            [animationName]: AnimationStatus.Skipped,
          }));
        } else {
          await handler();
          setAnimationState((currentAnimations) => ({
            ...currentAnimations,
            [animationName]: AnimationStatus.Completed,
          }));
        }
      } catch (error) {
        console.error(`Error executing ${animationName}:`, error);
        setAnimationState((currentAnimations) => ({
          ...currentAnimations,
          [animationName]: AnimationStatus.Failed,
        }));
      }
    },
    [setAnimationState, animationHandlers],
  );

  const animateDAG = useCallback(
    async (
      dag: AnimationDAG = DAG,
      currentNode: AnimationKey | "start" | "end" = "start",
    ) => {
      if (currentNode === "end") return;

      const nodes = dag[currentNode];
      if (nodes === "end") return;

      for (const node of nodes) {
        console.log(`Executing ${currentNode} -> ${node.next}`);
        await executeAnimation(node.next);
        if (node.intervalMS > 0) {
          await new Promise((resolve) => setTimeout(resolve, node.intervalMS));
        } else if (node.intervalMS < 0) {
          throw new Error("intervalMS must be positive value or zero");
        }
        await animateDAG(dag, node.next);
      }
    },
    [executeAnimation],
  );

  return {
    animateDAG,
  };
};
