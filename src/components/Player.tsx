import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

interface PlayerProps {
  x: number;
  y: number;
  // Reload: boolean;
}

const Player = ({ x, y }: PlayerProps) => {
  const state = useSelector((state: RootState) => state.UserManager);
  const { user_one_avatar } = state;
  return (
    <Image
      src={user_one_avatar}
      alt="hero"
      style={{
        position: "relative",
        left: x,
        top: y,
        width: "100px",
        height: "100px",
        border: "none",
        transition: "top 0.5s",
      }}
    ></Image>
  );
};

export default Player;
