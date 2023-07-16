import styled from "@emotion/styled";
import tw from "twin.macro";
import { Text } from "../atoms/Text";
import { FontType } from "../../constants/Font";
import { Color } from "../../constants/Color";

const StyledFooter = styled.div`
  ${tw`flex-grow flex flex-col justify-center items-center`}
`;

interface FooterProps {
  userId: string;
  userName: string;
}

export const Footer = ({ userName, userId }: FooterProps) => {
  return (
    <StyledFooter>
      <Text fontType={FontType.SUB} color={Color.WHITE}>
        {userId}
      </Text>
      <Text fontType={FontType.TITLE1} color={Color.WHITE}>
        {userName}
      </Text>
    </StyledFooter>
  );
};
