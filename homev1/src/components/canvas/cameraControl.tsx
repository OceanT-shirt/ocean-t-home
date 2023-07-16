import { useFrame } from "@react-three/fiber";
import { useContext } from "react";
import * as THREE from "three";
import { easing } from "maath";
import { CameraPosContext } from "../../providers/CameraPosProvider";
import { useKeyboardControls } from "@react-three/drei";

export const CameraControl = () => {
  // move camera based on the state
  const {
    cameraPos,
    setCameraPos,
    isInitialized,
    startCameraPos,
    setInitialized,
  } = useContext(CameraPosContext);
  const [, get] = useKeyboardControls();

  // camera control
  useFrame((state, dt) => {
    if (!isInitialized) {
      // Initializing Animation
      const q = new THREE.Quaternion();
      easing.damp3(state.camera.position, startCameraPos, 0.1, dt, 35);
      easing.dampQ(state.camera.quaternion, q, 0.1, dt, 1);
      setCameraPos(state.camera.position);
      if (state.camera.position.equals(startCameraPos)) {
        setInitialized(true);
      }
    } else {
      const { forward, backward, left, right, jump } = get();
      if (forward || backward || left || right || jump) {
        if (cameraPos.z > startCameraPos.z) {
          setCameraPos(
            cameraPos.add(new THREE.Vector3(0, 0, -Number(backward) * 0.3)),
          );
        } else {
          setCameraPos(
            cameraPos.add(
              new THREE.Vector3(
                0,
                0,
                (Number(forward) - Number(backward)) * 0.3,
              ),
            ),
          );
        }
      }
      const q = new THREE.Quaternion();
      easing.damp3(state.camera.position, cameraPos, 0.1, dt, 1000);
      console.log(forward, backward, left, right, jump, cameraPos);
      easing.dampQ(state.camera.quaternion, q, 0.1, dt, 1);
    }
  });

  return <mesh></mesh>;
};
