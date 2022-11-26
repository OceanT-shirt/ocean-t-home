import {Canvas, useFrame, Vector3} from "@react-three/fiber";
import { Effects } from "./effects";
import { InfoDisplay } from "./infoDisplay";
import {PortfolioWall} from "./portfolioWall";
import {Ocean} from "./ocean";
import { Sky } from "@react-three/drei"
import {WindowFrame} from "./windowFrame";
import {useEffect, useState} from "react";
import {Button3D} from "./button3D";
import {Ground} from "./ground";



export const MainCanvas = () => {
    type RouteType = "HOME" | "PORTFOLIO"

    return (
        <Canvas camera={{position: [0, 7, 50], fov: 70, near: 1, far: 2000}}>
            {/*<hemisphereLight color={"#0000ff"} groundColor={"#00ff00"} intensity={0.6} />*/}
            <color attach="background" args={[0xefefef]} />
            <ambientLight intensity={0.02} />
            <directionalLight intensity={0.5} position={[-10, 100, 10]} />
            <PortfolioWall color={'skyblue'} position={[0, 110, 15]} />
            {/*<PortfolioWall color={'skyblue'} position={[0, 5, 0]} />*/}
            {/*<InfoDisplay />*/}
            <WindowFrame color={'gray'} position={[0, 89, 0]} />
            <WindowFrame color={'gray'} position={[0, 110, 0]} />
            <Ocean />
            <Sky rayleigh={6} turbidity={6} distance={3000} mieDirectionalG={0.8} mieCoefficient={0.005} inclination={0.49} azimuth={0.25} />
            <Button3D color={"skyblue"} position={[0, 98, 3]} />
            <Ground pos={[0, 90, 20]} />
            <Ground pos={[0, 110, 20]} />
            {/*<Effects />*/}
        </Canvas>
    )
}