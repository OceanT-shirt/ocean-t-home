import styled from "@emotion/styled";
import tw from "twin.macro";

import { ColorType } from "../../../constants/Color";
import { FontType, applyFont } from "../../../constants/Font";

export const StyledText = styled.p<{
    fontType: FontType;
    color: ColorType;
    reactive: boolean;
    isMobile: boolean;
}>`
	${({ fontType }) => applyFont(fontType)}
	color: ${({ color }) => color};
	${({ reactive, isMobile }) =>
    reactive &&
    (isMobile ? tw`active:opacity-80` : tw`cursor-pointer hover:opacity-80`)}
`;