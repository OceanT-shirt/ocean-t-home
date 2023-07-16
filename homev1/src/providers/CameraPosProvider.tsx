import React, { createContext, ReactNode, useState } from "react";
import * as THREE from "three";

type CameraPosContextType = {
  cameraPos: THREE.Vector3;
  setCameraPos: (newCameraPos: THREE.Vector3) => void;
  isInitialized: boolean;
  setInitialized: (isInitialized: boolean) => void;
  startCameraPos: THREE.Vector3;
};

export const CameraPosContext = createContext<CameraPosContextType>({
  cameraPos: new THREE.Vector3(0, 100, -30),
  setCameraPos: (newCameraPos: THREE.Vector3) => {
    console.log(newCameraPos);
  },
  isInitialized: false,
  setInitialized: (isInitialized: boolean) => {
    console.log(isInitialized);
  },

  startCameraPos: new THREE.Vector3(0, 100, 80),
});

interface Props {
  children: ReactNode;
}

export const CameraPosProvider = ({ children }: Props) => {
  const [cameraPos, setCameraPos] = useState<THREE.Vector3>(
    new THREE.Vector3(0, 100, -30),
  );
  const [isInitialized, setInititialize] = useState(false);

  const newContext: CameraPosContextType = {
    cameraPos: cameraPos,
    setCameraPos: (newCameraPos) => {
      setCameraPos(newCameraPos);
      console.log("Provider: camera pos renewed", cameraPos);
    },
    isInitialized: isInitialized,
    setInitialized: (isInitialized) => {
      setInititialize(isInitialized);
    },
    startCameraPos: new THREE.Vector3(0, 100, 80),
  };

  return (
    <CameraPosContext.Provider value={newContext}>
      {children}
    </CameraPosContext.Provider>
  );
};
