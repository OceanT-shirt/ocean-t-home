import * as THREE from 'three';

// TODO add limit
export interface Portfolio {
  id: number;
  imgUri: string;
  title: string;
  desc: string;
  pos: THREE.Vector3;
  rotation?: THREE.Euler; // Rad
  isLeft: boolean;
}

export const GetPortfolioMock = (_id: number): Portfolio => {
  const START_ANGLE = Math.PI / 16;
  const SPACE_ANGLE = Math.PI / 16;
  const centerAngle = (_id - 1) * SPACE_ANGLE + START_ANGLE;
  const radius = 100;
  const x = 10 + radius * Math.sin(centerAngle);
  const z = radius * (1 - Math.cos(centerAngle));
  return {
    id: _id,
    imgUri: "/star_palace.png",
    title: "Sample Portfolio",
    desc: "This is 3D portfolio created by @ocean_t_shirt",
    pos: new THREE.Vector3(-x, 0, z),
    rotation: new THREE.Euler(0, START_ANGLE, 0),
    isLeft: true,
  };
};

export const GetPortfolioMockReverse = (_id: number): Portfolio => {
  const START_ANGLE = Math.PI / 16;
  const SPACE_ANGLE = Math.PI / 16;
  const centerAngle = (_id - 1) * SPACE_ANGLE + START_ANGLE;
  const radius = 100;
  const x = 10 + radius * Math.sin(centerAngle);
  const z = radius * (1 - Math.cos(centerAngle));
  return {
    id: _id,
    imgUri: "/IMG_20221130_120950_205.jpg",
    title: "Sample Portfolio",
    desc: "This is 3D portfolio created by @ocean_t_shirt",
    pos: new THREE.Vector3(x, 0, z),
    rotation: new THREE.Euler(0, -1 * START_ANGLE, 0),
    isLeft: false,
  };
};
