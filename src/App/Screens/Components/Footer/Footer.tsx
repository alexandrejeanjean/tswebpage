import React from "react";
import styled from "@emotion/styled";
import Text from "../../../SharedComponents/Text";
import Link from "../../../SharedComponents/Link";
import * as Colors from "../../../constants/Colors";
import * as Fonts from "../../../constants/Fonts";
import Title from "../../../SharedComponents/Title"

const Footer: React.FC = () => {
    return (
        <Background>
            <Main>
                <Title id="contact" title="100% thé vert" subtitle="#chinoisuniquement" color={Colors.secondary} />
                <Cols>
                    <LeftCol>
                        <Text
                            color={Colors.secondary}
                            fontSize={3}
                            fontFamily={Fonts.main}
                            fontWeight={200}
                        >
                            Discutons. <br />Echangeons. <br /> Partageons.
                        </Text>
                        <Text
                            color={Colors.secondary}
                            fontSize={1.2}
                            fontFamily={Fonts.main}
                            fontWeight={200}
                            lineHeight={1.7}
                        >
                            Toujours prêt pour partager un bon moment. <br />
                            N'hésitez pas à me joindre via linkedin, ou par email.  <br />
                            Je vous répondrai au plus vite.  <br />
                            A très vite, Alexandre.
                        </Text>
                    </LeftCol>
                    <RightCol>
                        <Link
                            color={Colors.secondary}
                            fontSize={1.2}
                            fontFamily={Fonts.main}
                            fontWeight={200}
                            href="https://www.linkedin.com/in/alexandre-jeanjean-277bab5a/"
                            lineHeight={1.7}
                        >
                            Linkedin <br />
                        </Link>
                        <Link
                            color={Colors.secondary}
                            fontSize={1.2}
                            fontFamily={Fonts.main}
                            fontWeight={200}
                            href="https://www.behance.net/alexandjeanjea"
                            lineHeight={1.7}
                        >
                            Behance <br />
                        </Link>
                        <Link
                            color={Colors.secondary}
                            fontSize={1.2}
                            fontFamily={Fonts.main}
                            fontWeight={200}
                            href="mailto:helloalex@criptext.com"
                            lineHeight={1.7}
                        >
                            Message <br />
                        </Link>
                    </RightCol>
                </Cols>
            </Main>
            <EndWords>
                <Text
                    color={Colors.secondary}
                    fontSize={0.7}
                    fontFamily={Fonts.main}
                    fontWeight={200}
                >
                    Interface flexible. Zéro break points. ©alexjeanjean ~ 2020
                        </Text>
            </EndWords>
        </Background>
    );
};

const EndWords = styled('div')`
    width: 100%;
    height: 2rem;
    position: absolute;
    bottom:0;
    margin: auto;
    display: flex;
    justify-content: center;
`

const Cols = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -4rem;
`;

const LeftCol = styled("div")`
  width: 50%;
  min-width: 300px;
  height: 100%;
`;

const RightCol = styled("div")`
  width: 50%;
  min-width: 300px;
  height: 100%;
  min-height: 19rem;
  
`;

const Background = styled("div")`
  background-color: ${Colors.primary};
  width: 100%;
  min-height: 20rem;
  position: relative;
`;

const Main = styled("div")`
  width: 100%;
  max-width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;



export default Footer;