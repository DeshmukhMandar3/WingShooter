import React, { useEffect, useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

interface ThanosProps {
  x: number;
  y: number;
}
// const moveLeft = keyframes`
//   from { right: 0; }
//   to { left: 0; }
// `;
const Enemy = ({ x, y }: ThanosProps) => {
  return (
    <Image
      // animation={`${moveLeft} 40s linear infinite`}
      src="./zombie.gif"
      alt="hero"
      transform="scaleX(-1)"
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

export default Enemy;
