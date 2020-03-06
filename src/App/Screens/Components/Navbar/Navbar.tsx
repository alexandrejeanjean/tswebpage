import React from "react";
import styled from "@emotion/styled";
import Link from "../../../SharedComponents/Link";

import * as Colors from "../../../constants/Colors";
import * as Fonts from "../../../constants/Fonts";

const Navbar: React.FC = () => (
    <Background>
        <Main>
            <Link color={Colors.primary}
                fontSize={1}
                fontFamily={Fonts.main}
                fontWeight={700}
                href="/"
            >
                alex.dev
            </Link>
            <Navs>
                <Link color={Colors.primary}
                    fontSize={1}
                    fontFamily={Fonts.main}
                    fontWeight={700}
                    href="#about"
                >
                    à propos
                </Link>
                <Link color={Colors.primary}
                    fontSize={1}
                    fontFamily={Fonts.main}
                    fontWeight={700}
                    href="#projects"
                >
                    projets
                </Link>
                {/* <Link color={Colors.primary}
                    fontSize={1}
                    fontFamily={Fonts.main}
                    fontWeight={700}
                    href="#papers"
                >
                    papiers
                </Link> */}
                <Link color={Colors.primary}
                    fontSize={1}
                    fontFamily={Fonts.main}
                    fontWeight={700}
                    href="#contact"
                >
                    contact
                </Link>
            </Navs>
        </Main>
    </Background>
);

const Navs = styled("div")`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Background = styled("div")`
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${Colors.secondary};
`

const Main = styled("div")`
  width: 100%;
  max-width: 1240px;
  height: 4rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;

export default Navbar;
