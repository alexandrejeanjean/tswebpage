import React from "react";
import styled from "@emotion/styled";
import Text from "../../../SharedComponents/Text";

import * as Colors from "../../../constants/Colors";
import * as Fonts from "../../../constants/Fonts";

const Results: React.FC = () => (
  <Background>
    <Main>
      <JobBlock>
        <Result>
          <Job>
            <Text
              color={Colors.secondary}
              fontSize={1.2}
              fontFamily={Fonts.main}
              fontWeight={700}
            >
              #projets
        </Text>
          </Job>
          <Text
            color={Colors.primary}
            fontSize={4}
            fontFamily={Fonts.main}
            fontWeight={700}
          >
            14
        </Text>
        </Result>

        <Result>
          <Job>
            <Text
              color={Colors.secondary}
              fontSize={1.2}
              fontFamily={Fonts.main}
              fontWeight={700}
            >
              #fromscratch
        </Text>
          </Job>
          <Text
            color={Colors.primary}
            fontSize={4}
            fontFamily={Fonts.main}
            fontWeight={700}
          >
            6
        </Text>
        </Result>
        <Result>
          <Job>
            <Text
              color={Colors.secondary}
              fontSize={1.2}
              fontFamily={Fonts.main}
              fontWeight={700}
            >
              #participation
            </Text>
          </Job>
          <Text
            color={Colors.primary}
            fontSize={4}
            fontFamily={Fonts.main}
            fontWeight={700}
          >
            8
        </Text>
        </Result>
      </JobBlock>
    </Main>
  </Background>
);

const Job = styled("div")`
    display: block;
    width: 10rem;
    max-height: 2rem;
    background-color: ${Colors.primary};
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -2rem;
`
const JobBlock = styled("div")`
  width: 100%;
  min-height: 10rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Result = styled("div")`
  display: flex;
  flex-direction: column;
  justify-cotennt: center;
  align-items: center;
  padding-top: 4rem;
`;

const Main = styled("div")`
  width: 100%;
  max-width: 1240px;
  margin: auto;
`;

const Background = styled("div")`
  background-color: ${Colors.tertiary};
  width: 100%;
`;

export default Results;
