import React from "react";
import Ducks from "../components/Ducks";
import Game from "../components/Game";
import Scorecard from "../components/Scorecard";

const Gamepage = () => {
  return (
    <div>
      <Game />
      <Ducks />
      <Scorecard />
    </div>
  );
};

export default Gamepage;
