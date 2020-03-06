import React from "react";
import styled from "@emotion/styled";
import * as Colors from "../constants/Colors";

type ButtonProps = {
    href: string,
    children: React.ReactNode,

}

const Button: React.FC<ButtonProps> = ({ href, children }) => (
    <Main href={href}>{children}</Main>
);


type MainStyledProps = {}

const Main = styled("a")<MainStyledProps>({
    textDecoration: "none",
    letterSpacing: "1.17px",
    backgroundColor: Colors.primary,
    color: Colors.secondary,
    borderRadius: "0.2rem",
    padding: "0px 30px",
    marginTop: "10rem",
    margin: "auto",
    cursor: "pointer",
    ':hover': {
        backgroundColor: Colors.fourth,
    }
}
)



export default Button;
