import styled from "@emotion/styled";
import tw from "twin.macro";

const StyledHeader = styled.div`
    ${tw`flex-grow flex h-4 bg-red-100`}
`

export const Header = () => {
    return (
        <StyledHeader></StyledHeader>
    )
}