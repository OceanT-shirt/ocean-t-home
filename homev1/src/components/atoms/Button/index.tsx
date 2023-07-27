import { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Glassmorphism } from "../../../constants/Color";

const CloseButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const CloseButtonWrapper = styled.button`
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    ${Glassmorphism};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    transition:
      background-color 0.05s ease,
      transform 0.05s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
      transform: scale(0.95);
    }
  `;

  return (
    <>
      <CloseButtonWrapper {...props}>✕</CloseButtonWrapper>
    </>
  );
};

export const Button = (
  props: { buttonType: "close" } & ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  if (props.buttonType === "close") {
    return <CloseButton {...props} />;
  } else {
    return <></>;
  }
};
