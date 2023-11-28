import { createContext, ReactNode, useState } from "react";
import * as THREE from "three";

type CameraPosContextType = {
  cameraPos: THREE.Vector3;
  setCameraPos: (newCameraPos: THREE.Vector3) => void;
  // cameraFOV: number;
  // setCameraFOV: (newCameraFOV: number) => void;
  isInitialized: boolean;
  setInitialized: (isInitialized: boolean) => void;
  startCameraPos: THREE.Vector3;
};

// TODO 廃止する (現状のカメラ管理を再確認した上で) & ステート管理をrecoilに移行する
export const CameraPosContext = createContext<CameraPosContextType>({
  // cameraPos: new THREE.Vector3(0, 100, -30),
  cameraPos: new THREE.Vector3(0, 100, 80),
  setCameraPos: (newCameraPos: THREE.Vector3) => {
    console.log(newCameraPos);
  },
  isInitialized: false,
  setInitialized: (isInitialized: boolean) => {
    console.log(isInitialized);
  },
  // cameraFOV: 80,
  // setCameraFOV: (newCameraFOV: number) => {
  //   console.log(newCameraFOV);
  // },
  startCameraPos: new THREE.Vector3(0, 100, 80),
});

interface Props {
  children: ReactNode;
}

export const CameraPosProvider = ({ children }: Props) => {
  const [cameraPos, setCameraPos] = useState<THREE.Vector3>(
    new THREE.Vector3(0, 100, 80),
  );
  // const [cameraFOV, setCameraFOV] = useState<number>(80);
  const [isInitialized, setInititialize] = useState(false);

  const newContext: CameraPosContextType = {
    cameraPos: cameraPos,
    setCameraPos: (newCameraPos) => {
      setCameraPos(newCameraPos);
    },
    isInitialized: isInitialized,
    setInitialized: (isInitialized) => {
      setInititialize(isInitialized);
    },
    // cameraFOV: cameraFOV,
    // setCameraFOV: (newCameraFOV) => {
    //   setCameraFOV(newCameraFOV);
    // },
    startCameraPos: new THREE.Vector3(0, 100, 80),
  };

  return (
    <CameraPosContext.Provider value={newContext}>
      {children}
    </CameraPosContext.Provider>
  );
};
