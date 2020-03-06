import React from "react";
import styled from "@emotion/styled";
import Text from "./Text";
import * as Fonts from "../constants/Fonts";

type TitleProps = {
    id: string,
    title: string,
    subtitle: string,
    color: string
}

const TitleBlock: React.FC<TitleProps> = ({ id, title, subtitle, color }) => {
    return (
        <Main>
            <Title id={id}>
                <Text
                    color={color}
                    fontSize={4}
                    fontFamily={Fonts.main}
                    fontWeight={400}
                >
                    {title}
                </Text>
                <Subtitle>
                    <HorizontalBar color={color} />
                    <Text
                        color={color}
                        fontSize={0.8}
                        fontFamily={Fonts.main}
                        fontWeight={700}
                        textTransform
                    >
                        {subtitle}
                    </Text>
                </Subtitle>
            </Title>
        </Main>
    );
};

const Main = styled("div")`
  width: 100%;
  max-width: 1240px;
  margin: auto;
  margin-bottom: 4rem;
`;

const Title = styled("div")`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: -5rem;
`;


type HorizontalBarProps = {
    color: string,
}

const HorizontalBar = styled("div")<HorizontalBarProps>({
    width: "75%",
    height: "0.1rem",
    marginRight: "1rem",
},
    props => ({
        backgroundColor: props.color,
    })
)



export default TitleBlock;