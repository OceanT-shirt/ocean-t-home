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
            window.open("https://twitter.com/ocean_t_shirt", "_blank");
          }}
        />
        <Button
          buttonType={"icon"}
          ReactIcon={FaLinkedin}
          title={"linkedin"}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/haruka-takahira-ba85181a6",
              "_blank",
            );
          }}
        />
        <Button
          buttonType={"icon"}
          ReactIcon={FaGithub}
          title={"github"}
          onClick={() => {
            window.open("https://github.com/OceanT-shirt", "_blank");
          }}
        />
      </IconWrapper>
    </StyledFooter>
  );
};
