import {useContext, useRef, useState} from "react";
import {Image, useCursor} from "@react-three/drei";
import {CanvasContext} from "../../providers/CanvasProvider";

interface PortfolioProps {
    id: number;
    imageUri: string;
    desc: string;
    pos: [number, number, number]
    homePos: [number, number, number]
}

export const PortfolioBoard = ({id, imageUri, desc, pos, homePos}: PortfolioProps) => {
    const [active, setActive] = useState<boolean>(false)
    const {route, setRoute} = useContext(CanvasContext)
    const image = useRef(null)

    useCursor(active)

    return(
        <mesh position={pos} onClick={() => setRoute(route === id ? "PORTFOLIO" : id)}
              onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}>
            <boxGeometry args={[10, 10, 10]} />
            <meshLambertMaterial color={active ? "blue" : "pink"} reflectivity={0.5} />
            {/*<Image ref={image} url={imageUri} />*/}
        </mesh>
    )
}