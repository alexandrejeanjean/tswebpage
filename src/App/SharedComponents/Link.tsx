import React from "react";
import styled from "@emotion/styled";
import * as Colors from "../constants/Colors";

type LinkProps = {
    color: string,
    fontFamily: string,
    fontSize: number,
    fontWeight: number,
    textTransform?: boolean,
    lineHeight?: number,
    href: string,
    children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ color, fontSize, fontFamily, fontWeight, textTransform, lineHeight, href, children }) => (
    <TextStyled
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        textTransform={textTransform}
        lineHeight={lineHeight}
        href={href}
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

const TextStyled = styled("a")<TextStyledProps>({
    textDecoration: "none",
    cursor: "pointer",
    ':hover': {
        color: Colors.fourth,
    }
},
    props => ({
        lineHeight: props.lineHeight,
        color: props.color,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize + 'rem',
        fontWeight: props.fontWeight,
        textTransform: props.textTransform ? "uppercase" : "none"
    })
)



export default Link;
