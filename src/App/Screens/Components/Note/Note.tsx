import React from "react";
import styled from "@emotion/styled";
import Text from "../../../SharedComponents/Text";

import * as Colors from "../../../constants/Colors";
import * as Fonts from "../../../constants/Fonts";

const Note: React.FC = () => (
  <Background>
    <Main>
      <Text
        color={Colors.primary}
        fontSize={4}
        fontFamily={Fonts.main}
        fontWeight={200}
      >
        Architecturer. Découper. <br />Penser & assembler  <br />chaque interface avec soin.
      </Text>
    </Main>
  </Background>
);

const Main = styled("div")`
  width: 100%;
  max-width: 1240px;
  margin: auto;
  padding: auto;
  display: flex;
  align-self: flex-start;
`;

const Background = styled("div")`
  background-color: ${Colors.tertiary};
  width: 100%;
  padding-top: 2rem;
`;

export default Note;
