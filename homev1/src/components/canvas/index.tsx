import {Canvas} from "@react-three/fiber";
import { Effects } from "./effects";
import { InfoDisplay } from "./infoDisplay";
import {Plane} from "./plane";
import {Ocean} from "./ocean";
import { Sky } from "@react-three/drei"



export const MainCanvas = () => {
    return (
        <Canvas camera={{position: [0, 10, 50], fov: 55, near: 1, far: 2000}}>
            {/*<hemisphereLight color={"#0000ff"} groundColor={"#00ff00"} intensity={0.6} />*/}
            <color attach="background" args={[0xefefef]} />
            <ambientLight intensity={0.02} />
            <directionalLight intensity={0.5} position={[-10, 10, 10]} />
            {/*<Plane color={'skyblue'} position={[0, 1.5, 0]} />*/}
            {/*<Plane color={'skyblue'} position={[0, 5, 0]} />*/}
            <InfoDisplay />
            <Ocean />
            <Sky rayleigh={6} turbidity={6} distance={3000} mieDirectionalG={0.8} mieCoefficient={0.005} inclination={0.49} azimuth={0.25} />
            {/*<Effects />*/}
        </Canvas>
    )
}