import { css } from "@emotion/react";

export type ColorType = { __brand__: "ColorType" } & string;

type ColorObject = {
  TEXT: ColorType;
  BRAND400: ColorType;
  BRAND300: ColorType;
  BRANDMAIN: ColorType;
  BRAND200: ColorType;
  BRAND100: ColorType;
  BACKGROUND: ColorType;
  WHITE: ColorType;
  BLACK: ColorType;
};

const Color: ColorObject = {
  TEXT: "#111111" as ColorType,
  BRAND100: "#F4AECE" as ColorType,
  BRAND200: "#EE85B5" as ColorType,
  BRANDMAIN: "#E85C9C" as ColorType,
  BRAND300: "#AE4575" as ColorType,
  BRAND400: "#742E4E" as ColorType,
  BACKGROUND: "#FCFCFC" as ColorType,
  WHITE: "#fff" as ColorType,
  BLACK: "#000" as ColorType,
};

const Glassmorphism = css`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: white;
`;

export { Color, Glassmorphism };
