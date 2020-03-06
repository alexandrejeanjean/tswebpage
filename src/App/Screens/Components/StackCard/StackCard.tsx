import React from "react";
import styled from "@emotion/styled";
import Text from "../../../SharedComponents/Text";
import * as Colors from "../../../constants/Colors";
import * as Fonts from "../../../constants/Fonts";

type StackCardProps = {
    title: string,
    description1: string,
    description2: string,
    stacks: string,
    imageComponent: React.ReactNode
}

const StackCard: React.FC<StackCardProps> = ({ title, description1, description2, stacks, imageComponent }) => {
    return (
        <Main>
            {imageComponent}
            <TextWrapper>
                <Text
                    color={Colors.primary}
                    fontSize={1.6}
                    fontFamily={Fonts.main}
                    fontWeight={400}
                >
                    {title}
                </Text>
                <Text
                    color={Colors.primary}
                    fontSize={1}
                    fontFamily={Fonts.main}
                    fontWeight={200}
                    lineHeight={1.7}
                >
                    {description1}
                </Text>
                <Text
                    color={Colors.primary}
                    fontSize={1}
                    fontFamily={Fonts.main}
                    fontWeight={200}
                    lineHeight={1.7}
                >
                    {description2}
                </Text>

                <Text
                    color={Colors.primary}
                    fontSize={0.8}
                    fontFamily={Fonts.main}
                    fontWeight={400}
                    lineHeight={1.7}
                >
                    {stacks}
                </Text>
            </TextWrapper>
        </Main>
    );
};

const TextWrapper = styled("div")`
    margin-top: 2rem;
`

type MainStyledProps = {}

const Main = styled("div")<MainStyledProps>({
    width: "260px",
    height: "460px",
    margin: "16px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, .1)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    // marginRight: "4rem"

},
    props => ({

    })
)




export default StackCard;