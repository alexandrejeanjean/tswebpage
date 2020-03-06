import React from "react";
import "./App.css";
import Navbar from "./Screens/Components/Navbar/Navbar";
import Note from "./Screens/Components/Note/Note";
import Interfaces from "./Screens/Components/Interfaces/Interfaces";
import Techs from "./Screens/Components/Techs/Techs";
import Results from "./Screens/Components/Results/Results";
import Footer from "./Screens/Components/Footer/Footer";
import * as Colors from "./constants/Colors";
import Title from "./SharedComponents/Title";

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Note />
        <Title id="projects" title="Créateur d'interfaces" subtitle="#quotidien" color={Colors.primary} />
        <Interfaces />
        <Title id="about" title="Scalpels & bistouris" subtitle="#toujoursprêts" color={Colors.primary} />
        <Techs />
        {/* <Title id="papers" title="Crayon & papier" subtitle="#souslecoude" color={Colors.primary} /> */}
        <Results />
      </main>
      <Footer>
        <Footer />
      </Footer>
    </div>
  );
};

export default App;
