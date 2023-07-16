import { Canvas } from "@react-three/fiber";
import { Ocean } from "./ocean";
import { Sky } from "@react-three/drei";
import { WindowFrame } from "./windowFrame";
import {
  GetPortfolioMock,
  GetPortfolioMockReverse,
  Portfolio,
} from "../../models/portfolio";
import { CameraControl } from "./cameraControl";
import { PortfolioBoards } from "./portfolioBoard";
import * as THREE from "three";
import { Ground } from "./ground";

export const MainCanvas = () => {
  const p: Portfolio[] = [
    GetPortfolioMock(1),
    GetPortfolioMock(2),
    GetPortfolioMock(3),
    GetPortfolioMockReverse(1),
    GetPortfolioMockReverse(2),
    GetPortfolioMockReverse(3),
  ];

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 100, 30], fov: 80, near: 1, far: 2000 }}
    >
      {/*<hemisphereLight color={"#0000ff"} groundColor={"#00ff00"} intensity={0.6} />*/}
      <color attach="background" args={[0xefefef]} />
      <ambientLight intensity={0.02} />
      <directionalLight intensity={0.5} position={[-10, 100, 10]} />
      {/*<PortfolioWall color={'skyblue'} position={[0, 110, 15]} />*/}
      {/*<InfoDisplay />*/}
      <WindowFrame color={"gray"} position={[0, 89, 0]} />
      <WindowFrame color={"gray"} position={[0, 110, 0]} />
      <Ocean />
      <Sky
        rayleigh={6}
        turbidity={6}
        distance={3000}
        mieDirectionalG={0.8}
        mieCoefficient={0.005}
        inclination={0.49}
        azimuth={0.25}
      />
      {/*<Button3D color={"skyblue"} position={[0, 98, 3]} />*/}
      <PortfolioBoards portfolios={p} homePos={new THREE.Vector3(0, 100, 10)} />
      <Ground pos={[0, 90, 50]} />
      <Ground pos={[0, 110, 50]} isTop={true} />
      {/*<Effects />*/}
      <CameraControl />
      {/*<Environment preset="city" />*/}
    </Canvas>
  );
};
