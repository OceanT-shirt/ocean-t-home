import styled from "@emotion/styled";
import { DecorateFont } from "../../constants/Font";
import { Color } from "../../constants/Color";
import { Button } from "../atoms/Button";
import { FaX } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DecorativeName = styled.span`
  ${DecorateFont};
  color: ${Color.WHITE};
`;

interface FooterProps {
  userId: string;
  userName: string;
}

export const Footer = ({ userName }: FooterProps) => {
  return (
    <StyledFooter>
      <DecorativeName>{userName}</DecorativeName>
      <IconWrapper>
        <Button
          buttonType={"icon"}
          ReactIcon={FaX}
          title={"x"}
          onClick={() => {
            window.open(process.env.X_URL ?? "https://x.com", "_blank");
          }}
        />
        <Button
          buttonType={"icon"}
          ReactIcon={FaLinkedin}
          title={"linkedin"}
          onClick={() => {
            window.open(
              process.env.LINKEDIN_URL ?? "https://linkedin.com",
              "_blank",
            );
          }}
        />
        <Button
          buttonType={"icon"}
          ReactIcon={FaGithub}
          title={"github"}
          onClick={() => {
            window.open(
              process.env.GITHUB_URL ?? "https://github.com",
              "_blank",
            );
          }}
        />
      </IconWrapper>
    </StyledFooter>
  );
};
