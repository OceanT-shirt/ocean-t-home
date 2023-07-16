import styled from "@emotion/styled";
import tw from "twin.macro";

export const HomeContainer = styled.div`
  min-width: 30rem;
  width: 100vw;
  max-width: 90rem;
  ${tw`flex flex-col mx-auto my-0`}
`;

export const CanvasContainer = styled.div`
  ${tw`aspect-video`}
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const PopupContent = styled.div`
  width: 400px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
`;
