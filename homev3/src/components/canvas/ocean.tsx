import * as THREE from "three";

import { Water } from "three-stdlib";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";

extend({ Water });

export function Ocean() {
  const ref = useRef();
  // const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);

  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      // format: gl.encoding
    }),
    [waterNormals],
  );
  useFrame(
    // @ts-ignore
    (state, delta) => (ref.current.material.uniforms.time.value += delta / 2),
  );
  return (
    <Suspense fallback={null}>
      {/* @ts-ignore */}
      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
    </Suspense>
  );
}
