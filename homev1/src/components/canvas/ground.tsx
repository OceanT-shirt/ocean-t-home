import { MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from "three"

export const Ground = ({pos, isUpsideDown=false}: {pos: [number, number, number], isUpsideDown?: boolean}) => {
    return(
        <mesh position={pos} rotation={new THREE.Euler(!isUpsideDown? -0.5*Math.PI : 0.5*Math.PI, 0, 0)}>
            <planeGeometry args={[1000, 100]} />
            {/*<meshLambertMaterial color={"black"} reflectivity={0.5} />*/}
          <MeshReflectorMaterial
            mirror={1}
            blur={[300, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={350}
            roughness={1}
            depthScale={6}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>
    )
}