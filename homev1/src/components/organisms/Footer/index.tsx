import styled from "@emotion/styled";
import tw from "twin.macro";
import {Text} from "../../atoms/Text";
import {FontType} from "../../../constants/Font";
import {Color} from "../../../constants/Color";

const StyledFooter = styled.div`
    ${tw`flex-grow flex py-5 bg-gray-800 justify-center`}
`

export const Footer = () => {
    return (
        <StyledFooter>
            <Text fontType={FontType.TITLE1} color={Color.WHITE}>Haruka Takahira</Text>
        </StyledFooter>
    )
}