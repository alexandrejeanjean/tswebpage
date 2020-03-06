import React from "react";
import styled from "@emotion/styled";
import StackCard from '../StackCard/StackCard'
import Architecture from '../../../assets/Architecture.js';
import Atomic from '../../../assets/Atomic.js';
import Connect from '../../../assets/Connect.js';

const Stack: { title: string, description1: string, description2: string, stacks: string, imageComponent: React.ReactNode }[] = [
    {
        title: "Architecturer",
        description1: "J'aime architecturer de nouvelles applications, car cela demande une remise en question de mes précédentes réalisations.",
        description2: "Le but étant de tirer un apprentissage de chaque expérience passée.",
        stacks: "#REACT #REDUX #HOOKS #JEST #CYPRESS",
        imageComponent: <Architecture width="100" height="100" />
    },
    {
        title: "Découper",
        description1: "Penser le besoin & découper chaque composant afin qu'il soit réutilisable.",
        description2: "Au quotidien je m'appuie sur le design pattern 'Atomic design' pour écrire chaque pièce d'une interface.",
        stacks: "#ATOMICDESIGN #FUNCTIONALCOMPONENTS",
        imageComponent: <Atomic width="100" height="100" />
    },
    {
        title: "Connecter",
        description1: "Connecter une interface, et lui donner vie.",
        description2: "Appeler une API REST, ou connecter en temps réel deux interfaces grâce à l'implémentation d'une websocket.",
        stacks: "#AXIOS #WEBSOCKET #REST",
        imageComponent: <Connect width="100" height="100" />
    },
];

const Techs: React.FC = () => {
    return (
        <Main>
            <Technos>
                {Stack.map(item => (
                    <StackCard
                        key={"item_" + item.title}
                        title={item.title}
                        description1={item.description1}
                        description2={item.description2}
                        stacks={item.stacks}
                        imageComponent={item.imageComponent} />
                ))}
            </Technos>
        </Main >
    );
};

const Main = styled("div")`
  width: 100%;
  max-width: 1240px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Technos = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;



export default Techs;