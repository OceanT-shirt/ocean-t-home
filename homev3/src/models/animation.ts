export enum AnimationStatus {
  Idle,
  Running,
  Completed,
  Failed,
  Skipped,
}

export type AnimationHandler = null | (() => Promise<void>);

export interface PageAnimation {
  status: AnimationStatus;
  handler: AnimationHandler;
}

export type AnimationKey = "opening" | "sunrise" | "portfolioLighting";
