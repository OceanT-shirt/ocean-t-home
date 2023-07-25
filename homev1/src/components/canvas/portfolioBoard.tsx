import { useEffect, useRef, useState } from "react";
import { Html, Image, useCursor } from "@react-three/drei";
import { Portfolio } from "../../models/portfolio";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useLocation, useRoute } from "wouter";

interface Props {
  portfolios: Portfolio[];
  homePos: THREE.Vector3;
}

export const PortfolioBoards = ({ portfolios, homePos }: Props) => {
  const ref = useRef<THREE.Group>(null);
  const clicked = useRef<THREE.Object3D | null>(null);
  let q = new THREE.Quaternion();
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/item/:id");

  const [isTextDisplay, setIsTextDisplay] = useState(true);

  useEffect(() => {
    if (match) {
      setIsTextDisplay(false);
    } else {
      setIsTextDisplay(true);
    }
  }, [match]);

  // useEffect(() => {
  //   if (!ref.current) {
  //     console.error("ref error: ref.current is null");
  //     return;
  //   }
  //
  //   clicked.current = ref.current.getObjectById(Number(params?.id)) || null;
  //
  //   if (clicked.current != null) {
  //     // IDに対応するオブジェクトが存在する時
  //     if (clicked.current.parent != null) {
  //       // console.log("clicked parent:", clicked.current.parent.id);
  //       console.log("Pos:", homePos);
  //       clicked.current.parent.updateWorldMatrix(true, true);
  //       clicked.current.parent.localToWorld(homePos.set(0, 0.5, 5));
  //       clicked.current.parent.getWorldQuaternion(q);
  //     } else {
  //       console.error("object parent is null");
  //     }
  //   } else {
  //     // IDに対応するオブジェクトが存在しない時：ルート
  //     console.log("else:", homePos.set(0, 100, 5));
  //     q.identity();
  //   }
  // });

  return (
    <group
      name={"portfolio_boards"}
      position={homePos}
      ref={ref}
      onPointerMissed={() => setLocation("/")}
      onClick={(e) => {
        e.stopPropagation();
        console.log("clicked object id:", e.object.id);
        console.log("clicked object:", e.object);
        setLocation(
          clicked.current === e.object ? "/" : "/item/" + e.object.name,
        );
      }}
    >
      {portfolios.map((p, index) => (
        <PortfolioBoard
          key={index}
          portfolio={p}
          isTextDisplay={isTextDisplay}
        />
      ))}
    </group>
  );
};

export const PortfolioBoard = ({
  portfolio,
  isTextDisplay,
}: {
  portfolio: Portfolio;
  isTextDisplay: boolean;
}) => {
  const [active, setActive] = useState<boolean>(false);
  const imageRef = useRef<THREE.Mesh>(null);
  const boardRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);

  useFrame((state, dt) => {
    if (imageRef.current) {
      // easing.damp3(boardRef.current.scale, [20*4/3*(active? 0.90 : 1), 20*(active? 0.90 : 1), 0.05], 0.1, dt, 1000)
      easing.damp3(
        imageRef.current.scale,
        [active ? 0.9 : 1.0, active ? 0.9 : 1.0, 1.0],
        0.1,
        dt,
        1000,
      );
      if (textRef.current) {
        easing.damp3(
          textRef.current.scale,
          [active ? 0.95 : 1.0, active ? 0.95 : 1.0, 1.0],
          0.1,
          dt,
          1000,
        );
      }
    }
    // image.current.material.zoom = 2 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2
    // easing.damp3(image.current.scale, [0.85 * (!isActive && hovered ? 0.85 : 1), 0.9 * (!isActive && hovered ? 0.905 : 1), 1], 0.1, dt)
    // easing.dampC(frame.current.material.color, hovered ? 'orange' : 'white', 0.1, dt)
  });

  useCursor(active);

  return (
    <group
      position={portfolio.pos}
      rotation={portfolio.rotation ?? new THREE.Euler(0, 0, 0)}
    >
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setActive(true);
          console.log(e.object.id);
        }}
        onPointerOut={() => setActive(false)}
        name={String(portfolio.id)}
        scale={[(20 * 4) / 3, 20, 0.05]}
        ref={boardRef}
      >
        <boxGeometry />
        {/*<meshLambertMaterial color={active ? "blue" : "pink"} reflectivity={0.5} />*/}
        <meshBasicMaterial color="#151515" />
        <Image
          ref={imageRef}
          url={portfolio.imgUri}
          position={[0, 0, 0.7]}
          raycast={() => null}
          receiveShadow
        />
      </mesh>
      <group ref={textRef}>
        <Html
          distanceFactor={20}
          sprite
          transform
          position={[portfolio.isLeft ? 5 : -5, 16, 0]}
          style={{
            fontSize: "65px",
            padding: "10px 18px",
            width: "300px",
            height: "140px",
            color: "white",
            textAlign: portfolio.isLeft ? "right" : "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            opacity: isTextDisplay ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div>
            <text>{portfolio.title}</text>
          </div>
        </Html>
      </group>
      <group>
        <Html
          distanceFactor={20}
          sprite
          transform
          position={[portfolio.isLeft ? 5 : -5, -15, 0]}
          style={{
            fontSize: "50px",
            padding: "10px 18px",
            width: "300px",
            height: "140px",
            color: "white",
            textAlign: portfolio.isLeft ? "right" : "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            opacity: active ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div>
            <text>{portfolio.desc}</text>
          </div>
        </Html>
      </group>
    </group>
  );
};
