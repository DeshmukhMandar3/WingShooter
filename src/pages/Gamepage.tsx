import React from "react";
import CharacterSide from "../components/CharacterSide";
import Ducks from "../components/Ducks";
import Game from "../components/Game";
import Scorecard from "../components/Scorecard";

const Gamepage = () => {
  return (
    <div>
      <Scorecard />
      <Game />
      <CharacterSide />
    </div>
  );
};

export default Gamepage;
