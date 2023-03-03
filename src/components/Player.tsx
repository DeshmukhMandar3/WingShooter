import React from "react";
import { Box, Image } from "@chakra-ui/react";

interface PlayerProps {
  x: number;
  y: number;
  Reload: boolean;
}

const Player = ({ x, y, Reload }: PlayerProps) => {
  return (
    <Box>
      <Image
        src="./hero.gif"
        alt="hero"
        className="player"
        style={{
          position: "relative",
          left: x,
          top: y,
          width: "100px",
          height: "100px",
          border: "none",
        }}></Image>
      {Reload ? (
        <Image margin={"auto"} src="./reloading.png" alt="Reloading" />
      ) : null}
    </Box>
  );
};

export default Player;
