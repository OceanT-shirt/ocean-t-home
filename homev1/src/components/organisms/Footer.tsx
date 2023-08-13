import styled from "@emotion/styled";
import tw from "twin.macro";
import { Text } from "../atoms/Text";
import { FontType } from "../../constants/Font";
import { Color } from "../../constants/Color";
import { Button } from "../atoms/Button";
import { FaX } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const StyledFooter = styled.div`
  ${tw`flex-grow flex flex-col justify-center items-center`}
`;

const IconWrapper = styled.div`
  ${tw`flex flex-row justify-center items-center`}
`;

interface FooterProps {
  userId: string;
  userName: string;
}

export const Footer = ({ userName, userId }: FooterProps) => {
  return (
    <StyledFooter>
      {/*<Text fontType={FontType.SUB} color={Color.WHITE}>*/}
      {/*  {userId}*/}
      {/*</Text>*/}
      <Text fontType={FontType.TITLE1} color={Color.WHITE}>
        {userName}
      </Text>
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
