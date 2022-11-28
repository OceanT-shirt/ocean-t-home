import {useContext, useEffect, useRef, useState} from "react";
import {Image, useCursor} from "@react-three/drei";
import {CanvasContext} from "../../providers/CanvasProvider";
import {Portfolio} from "../../models/portfolio";
import * as THREE from "three"
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import {useLocation, useRoute} from "wouter";

interface PortfolioProps {
    id: number;
    imageUri: string;
    desc: string;
    pos: [number, number, number]
    homePos: [number, number, number]
}

interface Props {
    portfolios: Portfolio[]
    homePos: THREE.Vector3
}

export const PortfolioBoards = ({portfolios, homePos}: Props) => {
    const ref = useRef<THREE.Group>(null);
    const clicked = useRef<THREE.Object3D | null>(null);
    let q = new THREE.Quaternion();
    const [, setLocation] = useLocation();
    const [, params] = useRoute("/item/:id")

    useEffect(() => {
        if (!ref.current || !params) return
        clicked.current = ref.current.getObjectByName(params?.id) || null
        if (clicked.current != null) {
            if (clicked.current.parent != null) {
                clicked.current.parent.updateWorldMatrix(true, true)
                clicked.current.parent.localToWorld(homePos.set(0, 0.5, 1.25))
                clicked.current.parent.getWorldQuaternion(q)
            }
        } else {
            homePos.set(0, 0, 30)
            q.identity()
        }
    })
    useFrame((state, dt) => {
        easing.damp3(state.camera.position, homePos, 0.4, dt, 10)
        easing.dampQ(state.camera.quaternion, q, 0.4, dt, 1)
    })

    return (
        <group position={homePos} ref={ref}
               onPointerMissed={() => setLocation("/")}
               onClick={(e) => {e.stopPropagation();
                   // setLocation(clicked.current === e.object ? '/' : '/item/' + e.object.name);
                   console.log(e.object.name);
               }}>
            {portfolios.map((p, index) => <PortfolioBoard key={index} {...p} />)}
        </group>
    )
}

export const PortfolioBoard = (portfolio: Portfolio) => {
    const [active, setActive] = useState<boolean>(false)
    const {route, setRoute} = useContext(CanvasContext)
    const image = useRef(null)

    useCursor(active)

    return(
        <group position={portfolio.pos}>
            <mesh onClick={() => setRoute(route === portfolio.id ? "PORTFOLIO" : portfolio.id)}
                  onPointerOver={() => setActive(true)} onPointerOut={() => setActive(false)}
                  name={String(portfolio.id)}
            >
                <boxGeometry />
                <meshLambertMaterial color={active ? "blue" : "pink"} reflectivity={0.5} />
                <Image ref={image} url={portfolio.imgUri} position={[0, 0, 0.7]} />
            </mesh>
        </group>
    )
}