import { Canvas } from "@react-three/fiber";
import { Portfolio } from "../../models/portfolio";
import { useContext, useState } from "react";
import { CameraPosContext } from "../../providers/CameraPosProvider";
import { DebugContext } from "../../providers/DebugProvider";
import { WindowFrame } from "./windowFrame";
import { Ground } from "./ground";
import { PortfolioBoards } from "./portfolioBoard";
import { CameraControl } from "./cameraControl";
import * as THREE from "three";
import { AnimatedSky } from "./sky.tsx";

export const MainCanvas = ({
  portfolios,
  onCanvasLoaded,
}: {
  portfolios: Portfolio[];
  onCanvasLoaded?: () => void;
}) => {
  const [, setIsLoading] = useState(true);
  const { cameraPos } = useContext(CameraPosContext);
  const { canvasLite } = useContext(DebugContext);
  const initCamera = new THREE.PerspectiveCamera(80, 1, 1, 2000);
  initCamera.position.add(cameraPos);
  const handleCanvasCreated = () => {
    // Canvasが読み込み完了した後に実行される処理
    setIsLoading(false);
    onCanvasLoaded && onCanvasLoaded();
  };

  return (
    <>
      <Canvas dpr={[3, 3]} camera={initCamera} onCreated={handleCanvasCreated}>
        {!canvasLite && (
          <>
            <color attach="background" args={[0, 0, 0]} />
            <ambientLight intensity={0.02} />
            <directionalLight intensity={0.5} position={[-10, 100, 10]} />
            <WindowFrame color={"gray"} position={[0, 89, 0]} />
            <WindowFrame color={"gray"} position={[0, 110, 0]} />
            {/*<Ocean />*/}
            <AnimatedSky />
            <Ground pos={[0, 90, 50]} />
            <Ground pos={[0, 110, 50]} isTop={true} />
          </>
        )}
        <PortfolioBoards
          portfolios={portfolios}
          homePos={new THREE.Vector3(0, 100, 10)}
        />
        {/*<Effects />*/}
        <CameraControl />
        {/*<Environment preset="city" />*/}
      </Canvas>
    </>
  );
};
