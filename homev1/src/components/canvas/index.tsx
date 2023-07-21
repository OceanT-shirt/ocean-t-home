import { Canvas, RootState } from "@react-three/fiber";
import { Ocean } from "./ocean";
import { Sky } from "@react-three/drei";
import { WindowFrame } from "./windowFrame";
import { Portfolio } from "../../models/portfolio";
import { CameraControl } from "./cameraControl";
import { PortfolioBoards } from "./portfolioBoard";
import * as THREE from "three";
import { Ground } from "./ground";
import { useContext, useState } from "react";
import { CameraPosContext } from "../../providers/CameraPosProvider";

export const MainCanvas = ({ portfolios }: { portfolios: Portfolio[] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { cameraPos } = useContext(CameraPosContext);
  const initCamera = new THREE.PerspectiveCamera(80, 1, 1, 2000);
  initCamera.position.add(cameraPos);
  const handleCanvasCreated = (gl: RootState) => {
    // Canvasが読み込み完了した後に実行される処理
    setIsLoading(false);
  };

  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        camera={initCamera}
        onCreated={handleCanvasCreated}
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
        <PortfolioBoards
          portfolios={portfolios}
          homePos={new THREE.Vector3(0, 100, 10)}
        />
        <Ground pos={[0, 90, 50]} />
        <Ground pos={[0, 110, 50]} isTop={true} />
        {/*<Effects />*/}
        <CameraControl />
        {/*<Environment preset="city" />*/}
      </Canvas>
    </>
  );
};
