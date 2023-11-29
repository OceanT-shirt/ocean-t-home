import { Sky } from "@react-three/drei";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSetRecoilState } from "recoil";
import { animationHandlerAtom } from "../../recoil/animation.ts";

type SkyType = "night" | "sunrise" | "day";

export const AnimatedSky = () => {
  const skyRef = useRef<THREE.Mesh | null>(null);
  const [skyState, setSkyState] = useState<SkyType>("night");
  useFrame((_, delta) => {
    if (skyRef.current) {
      easing.damp(
        skyRef.current.material.uniforms,
        "exposure",
        skyState == "night" ? 0 : 0.5,
        0.1,
        delta,
        1000,
      );
    }
  });

  const sunriseTrigger = useCallback(async () => {
    setSkyState("sunrise");
    // sleep for 0.5 sec
    await new Promise((resolve) => setTimeout(resolve, 500));
  }, [setSkyState]);

  const setAnimationHandler = useSetRecoilState(animationHandlerAtom);

  useEffect(() => {
    setAnimationHandler((prev) => ({
      ...prev,
      sunrise: sunriseTrigger,
    }));
  }, [setAnimationHandler, sunriseTrigger]);

  return (
    <>
      <Sky
        rayleigh={6}
        turbidity={16}
        distance={5000}
        mieDirectionalG={0.8}
        mieCoefficient={0.003}
        // inclination={0.49}
        inclination={0}
        azimuth={0.25}
        ref={skyRef}
      />
    </>
  );
};
