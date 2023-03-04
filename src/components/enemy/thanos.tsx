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
const Thanos = ({ x, y }: ThanosProps) => {
  // const [position, setPosition] = useState({ x, y });

  // useEffect(() => {
  //   console.log("Position:", position);
  // }, [position]);

  // const handlePositionChange = () => {
  //   setPosition({ x, y });
  // };
  return (
    <Image
      // animation={`${moveLeft} 40s linear infinite`}
      src="./thanos.gif"
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

export default Thanos;
