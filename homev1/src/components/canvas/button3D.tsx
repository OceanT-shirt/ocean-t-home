import {useContext, useState} from "react";
import {useCursor} from "@react-three/drei";
import {CanvasContext} from "../../providers/CanvasProvider";

export const Button3D = ({ color, position }: {color: string, position: [number, number, number]}) => {
    const [active, setActive] = useState<boolean>(false)
    const {route, setRoute} = useContext(CanvasContext)

    useCursor(active)

    return(
        <mesh
            position={position}
            onClick={() => setRoute(route === "PORTFOLIO" ? "HOME" : "PORTFOLIO")}
            onPointerOver={() => setActive(true)}
            onPointerOut={() => setActive(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color={color} reflectivity={0.5} />
        </mesh>
    )
}
