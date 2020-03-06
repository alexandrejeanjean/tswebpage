import React from "react";
import styled from "@emotion/styled";

type TextProps = {
    color: string,
    fontFamily: string,
    fontSize: number,
    fontWeight: number,
    textTransform?: boolean,
    lineHeight?: number,
    children: React.ReactNode
}

const Text: React.FC<TextProps> = ({ color, fontSize, fontFamily, fontWeight, textTransform, lineHeight, children }) => (
    <TextStyled
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        textTransform={textTransform}
        lineHeight={lineHeight}
    >
        {children}
    </TextStyled>);

type TextStyledProps = {
    color: string,
    fontSize: number,
    fontWeight: number,
    fontFamily: string,
    lineHeight?: number,
    textTransform?: boolean
}

const TextStyled = styled("p")<TextStyledProps>(
    props => ({
        lineHeight: props.lineHeight,
        color: props.color,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize + 'rem',
        fontWeight: props.fontWeight,
        textTransform: props.textTransform ? "uppercase" : "none"
    })
)



export default Text;
