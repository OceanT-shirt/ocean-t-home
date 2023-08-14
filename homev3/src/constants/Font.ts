import { css } from "@emotion/react";

export const DefaultFont = css`
  font-family: "Bower, Georgia, Times New Roman", serif;
`;

export const TitleFont = css`
  ${DefaultFont};
  font-size: 2.5rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubTitleFont = css`
  ${DefaultFont};
  font-size: 2rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MainFont = css`
  ${DefaultFont};
  font-size: 1.5rem;
  font-weight: 300;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const DecorateFont = css`
  font-family: "Babylonica", serif;
  font-size: 3.5rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
