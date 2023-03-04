import React from "react";
import { useSelector } from "react-redux";
import "../css/Game.css";
import { RootState } from "../redux/Store";
import CharacterSide from "./CharacterSide";

type Props = {};

const Game = (props: Props) => {
  const state = useSelector((state: RootState) => state.UserManager);
  const { background_image } = state;

  return (
    <div
      className="outer"
      style={{
        backgroundImage: `url(${background_image})`,
      }}>
      {/* <CharacterSide /> */}
    </div>
  );
};

export default Game;
