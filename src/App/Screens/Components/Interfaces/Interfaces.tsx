import React from "react";
import styled from "@emotion/styled";
import Text from "../../../SharedComponents/Text";
import * as Colors from "../../../constants/Colors";
import * as Fonts from "../../../constants/Fonts";
import Card from '../Card/Card'
import Button from '../../../SharedComponents/Button';

import Dipongo from '../../../assets/dipongo.jpg';
import Fillgood from '../../../assets/fillgood.jpg';
import Homeassist from '../../../assets/homeassist.jpg';

const projects: { category: string, title: string, description: string, img: string, href: string }[] = [
  { category: "Mobile App", title: "Dipongo", description: "Application à destination des tout petits, ludique et créative.", img: Dipongo, href: "https://www.behance.net/gallery/81493351/Dipongo-Application-jeu-crative-pour-les-enfants" },
  { category: "Web App", title: "Fillgood", description: "Application cross-platformes permettant la gestion de livraisons de carburants.", img: Fillgood, href: "https://www.behance.net/gallery/81494311/FillGood-La-station-service-a-domicile" },
  { category: "Tablet App", title: "Home Assist", description: "Application à destination du 3ème âge, pour facilité leur quotidien.", img: Homeassist, href: "https://www.behance.net/gallery/81491351/Home-Assist-Lappli-pour-vivre-chez-soi-longtemps" },
];

const Interfaces: React.FC = () => {
  return (
    <Main>
      <Projects>
        {projects.map(project => (
          <Card
            key={"project_" + project.title}
            category={project.category}
            title={project.title}
            description={project.description}
            backgroundImage={project.img}
            href={project.href}
          />
        ))}
      </Projects>
      <Button href="https://www.behance.net/alexandjeanjea">
        <Text
          color={Colors.secondary}
          fontSize={1.2}
          fontFamily={Fonts.main}
          fontWeight={400}
        >
          Plus de projets
        </Text>
      </Button>
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

const Projects = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;



export default Interfaces;