import { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { Glassmorphism } from "../../../constants/Color";
import { IconType } from "react-icons";
import { MainFont } from "../../../constants/Font";

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

const LinkButton = ({
  ReactIcon,
  title,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  ReactIcon: IconType;
  title: string;
}) => {
  const LinkButtonWrapper = styled.button`
    padding: 6px 10px;
    border-radius: 8px;
    background-color: transparent;
    border: none;
    margin: 0;
    text-align: inherit;
    font: inherit;
    appearance: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 0.3s ease;
    width: auto;
    align-self: flex-start;

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
  `;
  const ButtonTitle = styled.div`
    ${MainFont};
    color: white;
    font-size: 20px;
  `;

  return (
    <LinkButtonWrapper {...props}>
      <ReactIcon color={"white"} size={28} />
      <ButtonTitle>{title}</ButtonTitle>
    </LinkButtonWrapper>
  );
};

const IconButton = ({
  ReactIcon,
  title,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  ReactIcon: IconType;
  title: string;
}) => {
  const IconButtonWrapper = styled.button`
    padding: 6px 6px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.9);
    transition: color 0.3s ease;
    width: auto;
    background: transparent;
    appearance: none;
    border: none;

    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  `;

  return (
    <IconButtonWrapper {...props}>
      <ReactIcon size={28} />
    </IconButtonWrapper>
  );
};

type ButtonProps = {
  buttonType: "close" | "link" | "icon";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type CloseButtonProps = ButtonProps & {
  buttonType: "close";
};

type LinkButtonProps = ButtonProps & {
  buttonType: "link" | "icon";
  ReactIcon: IconType;
  title: string;
};

export const Button = (props: CloseButtonProps | LinkButtonProps) => {
  if (props.buttonType === "close") {
    return <CloseButton {...props} />;
  } else if (props.buttonType === "link") {
    return <LinkButton {...props} />;
  } else if (props.buttonType === "icon") {
    return <IconButton {...props} />;
  } else {
    return <></>;
  }
};
