import * as THREE from "three";

export const BoardAligner = (
  index: number,
  len: number,
  isLeft?: boolean,
): { position: THREE.Vector3; rotation: THREE.Euler } => {
  if (index > 9 || len > 9) {
    console.error("too many indexes");
    return { position: new THREE.Vector3(), rotation: new THREE.Euler() };
  }
  if (isLeft === undefined) {
    isLeft = true;
  }
  const START_ANGLE = Math.PI / 16;
  const SPACE_ANGLE = Math.PI / 16;
  const centerAngle = index * SPACE_ANGLE + START_ANGLE;
  const radius = 100;
  const x = 10 + radius * Math.sin(centerAngle);
  const z = radius * (1 - Math.cos(centerAngle));
  return {
    position: new THREE.Vector3((isLeft ? -1 : 1) * x, 0, z),
    rotation: new THREE.Euler(0, (isLeft ? 1 : -1) * START_ANGLE, 0),
  };
};
