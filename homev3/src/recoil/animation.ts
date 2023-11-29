import { atom, selector } from "recoil";
import { AnimationKey, AnimationStatus } from "../models/animation.ts";

type PageAnimationHandlerAll = {
  [key in AnimationKey]: (() => Promise<void>) | null;
};

type PageAnimationStatusAll = {
  [key in AnimationKey]: AnimationStatus;
};

// statusとhandlerは別々に管理しなければ、animationの実行時に何度も再計算が生じてしまう。
export const animationHandlerAtom = atom<PageAnimationHandlerAll>({
  key: "animationHandlerAtom",
  default: {
    opening: null,
    sunrise: null,
    portfolioLighting: null,
  },
});

export const animationStatusAtom = atom<PageAnimationStatusAll>({
  key: "animationStatusAtom",
  default: {
    opening: AnimationStatus.Idle,
    sunrise: AnimationStatus.Idle,
    portfolioLighting: AnimationStatus.Idle,
  },
});

export const getIsAnimationReady = selector({
  key: "getIsAnimationReady",
  get: ({ get }) => {
    const animationHandlers = get(animationHandlerAtom);
    return Object.values(animationHandlers).every(
      (animation) => animation !== null,
    );
  },
});
