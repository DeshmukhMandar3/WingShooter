import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface PlayerProps {
  x: number;
  y: number;
  // Reload: boolean;
}

const Player = ({ x, y }: PlayerProps) => {
  return (
    <Image
      src="./hero.gif"
      alt="hero"
      style={{
        position: "relative",
        left: x,
        top: y,
        width: "100px",
        height: "100px",
        border: "none",
        transition: "top 0.5s",
      }}></Image>
  );
};

export default Player;
