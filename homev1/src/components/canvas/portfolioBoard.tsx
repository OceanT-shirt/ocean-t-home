import {useContext, useEffect, useRef, useState} from "react";
import {Image, useCursor} from "@react-three/drei";
import {Portfolio} from "../../models/portfolio";
import * as THREE from "three"
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import {useLocation, useRoute} from "wouter";
import { damp3 } from 'maath/easing';

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
    const [match, ] = useRoute("/item/")

    useEffect(() => {
        if (!ref.current) {
            console.error("ref error: ref.current is null")
            return
        }

        clicked.current = ref.current.getObjectById(Number(params?.id)) || null

        if (clicked.current != null) {
            // IDに対応するオブジェクトが存在する時
            if (clicked.current.parent != null) {
                // console.log("clicked parent:", clicked.current.parent.id);
                console.log("Pos:", homePos)
                clicked.current.parent.updateWorldMatrix(true, true);
                clicked.current.parent.localToWorld(homePos.set(0, 0.5, 5));
                clicked.current.parent.getWorldQuaternion(q);
            } else {
                console.error("object parent is null")
            }
        } else {
            // IDに対応するオブジェクトが存在しない時：ルート
            console.log("else:", homePos.set(0, 100, 5))
            q.identity()
        }
    })
    // TODO カメラ制御を分離する
    // useFrame((state, dt) => {
    //     if (match) {
    //         easing.damp3(state.camera.position, homePos, 0.4, dt, 10);
    //         easing.dampQ(state.camera.quaternion, q, 0.4, dt, 1);
    //     }
    //     // console.log(state.camera.position);
    // })

    return (
        <group name={"portfolio_boards"} position={homePos} ref={ref}
               onPointerMissed={() => setLocation("/item/")}
               onClick={(e) => {
                   e.stopPropagation();
                   console.log("clicked object id:", e.object.id);
                   console.log("clicked object:", e.object)
                   setLocation(clicked.current === e.object ? '/item/' : '/item/' + e.object.id);
               }}>
            {portfolios.map((p, index) => <PortfolioBoard key={index} {...p} />)}
        </group>
    )
}

export const PortfolioBoard = (portfolio: Portfolio) => {
    const [active, setActive] = useState<boolean>(false)
    const image = useRef(null)
  const frameRef = useRef<THREE.Mesh>(null)

  useFrame((state, dt) => {
    if (frameRef.current) {
      easing.damp3(frameRef.current.scale, [20*4/3*(active? 0.90 : 1), 20*(active? 0.90 : 1), 0.05], 0.1, dt, 1000)
    }
    // image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    // easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    // easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
  })

    useCursor(active)

    return(
        <group position={portfolio.pos} rotation={portfolio.rotation ?? new THREE.Euler(0, 0, 0)}>
            <mesh
                  onPointerOver={(e) => {
                      e.stopPropagation()
                      setActive(true);
                      console.log(e.object.id);
                  }}
                  onPointerOut={() => setActive(false)}
                  name={String(portfolio.id)}
                  scale={[20*4/3, 20, 0.05]}
                  ref={frameRef}
            >
                <boxGeometry />
                {/*<meshLambertMaterial color={active ? "blue" : "pink"} reflectivity={0.5} />*/}
              <meshStandardMaterial color="#151515" metalness={0.5} roughness={0.5} envMapIntensity={2} />
                <Image ref={image} url={portfolio.imgUri} position={[0, 0, 0.7]} raycast={() => null} />
            </mesh>
        </group>
    )
}
