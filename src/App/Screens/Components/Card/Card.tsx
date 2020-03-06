import React from "react";
import styled from "@emotion/styled";
import Text from "../../../SharedComponents/Text";
import * as Colors from "../../../constants/Colors";
import * as Fonts from "../../../constants/Fonts";
import Foreign from '../../../assets/Foreign';

type CardProps = {
    category: string,
    title: string,
    description: string,
    backgroundImage: string,
    href: string
}

const Card: React.FC<CardProps> = ({ category, title, description, href, backgroundImage }) => {
    return (
        <Main href={href}>
            <Picture src={backgroundImage}></Picture>
            <Description>
                <Category>
                    <Text color={Colors.secondary}
                        fontSize={0.8}
                        fontFamily={Fonts.main}
                        fontWeight={700}
                    >
                        {category}
                    </Text>
                </Category>
                <Text color={Colors.primary}
                    fontSize={1}
                    fontFamily={Fonts.main}
                    fontWeight={700}
                >
                    {title}
                </Text>
                <Text color={Colors.primary}
                    fontSize={1}
                    fontFamily={Fonts.main}
                    fontWeight={200}
                >
                    {description}
                </Text>
                <Text color={Colors.primary}
                    fontSize={0.8}
                    fontFamily={Fonts.main}
                    fontWeight={700}
                    textTransform
                >
                    <Foreign width="14" color={Colors.primary} /> En savoir plus
                </Text>
            </Description>
        </Main>
    );
};

type PictureStyledProps = {
    src: string
}

const Picture = styled("div")<PictureStyledProps>({
    width: "100%",
    height: "200px",
},
    props => ({
        backgroundImage: `url(${props.src})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    })
)

const Category = styled("span")`
    display: block;
    width: 6rem;
    max-height: 2rem;
    background-color: ${Colors.primary};
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Description = styled("span")`
    display: block;
    padding: 2rem;
`

const Main = styled("a")`
    text-decoration: none;
    display: block;
    max-width: 400px;
    min-width: 300px;
    min-height: 420px;
    margin: 3rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .1);
    cursor: pointer;
`


export default Card;