import { atom, selector } from "recoil";
import {
  AnimationKey,
  AnimationStatus,
  PageAnimation,
} from "../models/animation.ts";

type PageAnimations = {
  [key in AnimationKey]: PageAnimation;
};

export const animationsAtom = atom<PageAnimations>({
  key: "animationState",
  default: {
    opening: {
      status: AnimationStatus.Idle,
      handler: null,
    },
    sunrise: {
      status: AnimationStatus.Idle,
      handler: null,
    },
    portfolioLighting: {
      status: AnimationStatus.Idle,
      handler: null,
    },
  },
});

export const getIsAnimationReady = selector({
  key: "getIsAnimationReady",
  get: ({ get }) => {
    const animations = get(animationsAtom);
    return Object.values(animations).every(
      (animation) => animation.handler !== null,
    );
  },
});
