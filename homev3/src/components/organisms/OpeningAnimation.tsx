import styled from "@emotion/styled";
import { DecorateFont } from "../../constants/Font.ts";
import { Color } from "../../constants/Color.ts";

const BackGround = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: ${Color.WHITE};
  height: 100vh;
`;

const TopAnimation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BuildingText = styled.span`
  ${DecorateFont};
  animation: slide-in 1s ease-in-out forwards;
  @keyframes slide-in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const BottomAnimation = styled.span`
  ${DecorateFont};
  opacity: 0;
  animation: fade-in 1s ease-in-out 1s forwards;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const OpeningAnimation = () => {
  return (
    <BackGround>
      <TopAnimation>
        <BuildingText>Building</BuildingText>
        <BottomAnimation>Tomorrow</BottomAnimation>
      </TopAnimation>
    </BackGround>
  );
};
