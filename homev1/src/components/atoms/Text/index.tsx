import React, { ReactNode } from "react";
import { isMobile } from "react-device-detect";

import { Color, ColorType } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { StyledText } from "./style";

export interface TextProps {
    fontType?: FontType;
    color?: ColorType;
    reactive?: boolean;
    onClick?: () => void;
    children?: ReactNode;
}

const Text: React.FC<TextProps> = ({
       fontType = FontType.MAIN,
       color = Color.TEXT,
       reactive = false,
       onClick,
       children,
   }) => {
    return (
        <StyledText
            fontType={fontType}
            color={color}
            reactive={reactive}
            isMobile={isMobile}
            onClick={onClick}
        >
            {children}
        </StyledText>
    );
};

const MemoizedText: typeof Text = React.memo(Text);

export { MemoizedText as Text };