import { useCallback, useEffect, useRef, useState } from "react";
import { Html, Image, useCursor } from "@react-three/drei";
import { Portfolio } from "../../models/portfolio";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useLocation, useRoute } from "wouter";
import { useSetRecoilState } from "recoil";
import { animationHandlerAtom } from "../../recoil/animation.ts";

interface Props {
  portfolios: Portfolio[];
  homePos: THREE.Vector3;
}

const ANIMATION_DURATION_SEC = 0.25;
const ANIMATION_DURATION_MSEC = ANIMATION_DURATION_SEC * 1000;

const usePortfolioBoard = ({ portfolios }: { portfolios: Portfolio[] }) => {
  const setAnimationHandler = useSetRecoilState(animationHandlerAtom);
  const [isShowArray, setIsShowArray] = useState<boolean[]>(
    Array(portfolios.length).fill(false),
  );
  // タイマーで使用するインデックスを管理するステート
  const [timerIndex, setTimerIndex] = useState<number>(0);

  // ページを開いた時のアニメーションを実装している
  const triggerLighting = useCallback(async () => {
    const halfLength = Math.ceil(portfolios.length / 2);
    const timer = setInterval(() => {
      // 新しい配列を作成し、指定されたインデックスの要素をtrueに更新
      const newArray = [...isShowArray];
      newArray[halfLength - timerIndex - 1] = true;
      newArray[portfolios.length - timerIndex - 1] = true;
      setIsShowArray(newArray);
      // 次のインデックスに更新
      setTimerIndex((prevIndex) => prevIndex + 1);
    }, ANIMATION_DURATION_MSEC);

    if (timerIndex >= halfLength + 1) {
      clearInterval(timer);
    }
  }, [portfolios.length, timerIndex, isShowArray]);

  useEffect(() => {
    setAnimationHandler((prev) => ({
      ...prev,
      portfolioLighting: triggerLighting,
    }));
  }, [setAnimationHandler, triggerLighting]);

  return { isShowArray };
};

export const PortfolioBoards = ({ portfolios, homePos }: Props) => {
  const ref = useRef<THREE.Group>(null);
  const clicked = useRef<THREE.Object3D | null>(null);
  const [, setLocation] = useLocation();
  const [match] = useRoute("/item/:id");
  const [isTextDisplay, setIsTextDisplay] = useState(true);
  const { isShowArray } = usePortfolioBoard({ portfolios });

  useEffect(() => {
    if (match) {
      setIsTextDisplay(false);
    } else {
      setIsTextDisplay(true);
    }
  }, [match]);

  return (
    <group
      name={"portfolio_boards"}
      position={homePos}
      ref={ref}
      onPointerMissed={() => setLocation("/")}
      onClick={(e) => {
        e.stopPropagation();
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
          isShow={isShowArray[index] ? isShowArray[index] : false}
        />
      ))}
    </group>
  );
};

export const PortfolioBoard = ({
  portfolio,
  isTextDisplay,
  isShow,
}: {
  portfolio: Portfolio;
  isTextDisplay: boolean;
  isShow: boolean;
}) => {
  const [active, setActive] = useState<boolean>(false);
  const imageRef = useRef<THREE.Mesh>(null);
  const boardRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);
  // イージングアニメーション
  const [elapsedTime, setElapsedTime] = useState(0);
  const duration = ANIMATION_DURATION_SEC;
  const [startAnimation, setStartAnimation] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isShow) {
      setStartAnimation(true);
    }
  }, [isShow]);

  const easeInQuad = (t: number) => t * t;

  useFrame((_, delta) => {
    if (startAnimation && imageRef.current) {
      const newElapsedTime = elapsedTime + delta;
      if (newElapsedTime < duration) {
        setElapsedTime(newElapsedTime);
        const easedProgress = easeInQuad(newElapsedTime / duration);
        setOpacity(easedProgress);
      }
    }
  });

  useFrame((_, dt) => {
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
          opacity={opacity}
          transparent={true}
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
            opacity: isTextDisplay ? opacity : 0,
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
            opacity: active ? opacity : 0,
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
