import { Box, Button, grid, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Landing.css";

export const Landings = () => {
  return (
    <Box
      bg={"GrayText"}
      className="body"
      minH="100vh"
      display="grid"
      m="auto"
      justifyContent={"center"}>
      <Box display="flex" justifyContent={"center"} alignItems="center">
        <Heading>Wings Shooter</Heading>
      </Box>
      <div className="birds">
        <div className="birds__hatdove">
          <div className="birds__hatdove-shadow"></div>
          <div className="birds__hatdove-head">
            <div className="birds__hatdove-hat"></div>
            <div className="birds__hatdove-forehead"></div>
            <div className="birds__hatdove-eye"></div>
            <div className="birds__hatdove-eye"></div>
            <div className="birds__hatdove-beak"></div>
          </div>
          <div className="birds__hatdove-backwing"></div>
          <div className="birds__circles-1"></div>
          <div className="birds__hatdove-backleg">
            <div className="birds__curly"></div>
          </div>
          <div className="birds__hatdove-body"></div>
          <div className="birds__hatdove-frontleg">
            <div className="birds__curly"></div>
          </div>
          <div className="birds__hatdove-frontwing"></div>
          <div className="birds__circles-2"></div>
          <div className="birds__hatdove-frontwing-finger"></div>
          <div className="birds__hatdove-frontwing-finger"></div>
          <div className="birds__hatdove-frontwing-finger"></div>
        </div>
        <div className="birds__table">
          <div className="birds__table-shadow"></div>
        </div>
        <div className="birds__laptop"></div>
        <div className="birds__laptop">
          <div className="birds__monitor">
            <div className="birds__code"></div>
          </div>
        </div>
        <div className="birds__coffee"></div>
        <div className="birds__feather"></div>
        <div className="birds__feather"></div>
        <div className="birds__rundove-shadow"></div>
        <div className="birds__rundove">
          <div className="birds__rundove-backwing">
            <div className="birds__finger"></div>
            <div className="birds__finger"></div>
            <div className="birds__finger"></div>
            <div className="birds__circles"></div>
          </div>
          <div className="birds__rundove-head">
            <div className="birds__rundove-eye"></div>
            <div className="birds__rundove-eye"></div>
            <div className="birds__rundove-beak"></div>
          </div>
          <div className="birds__rundove-backleg">
            <div className="birds__curly"></div>
          </div>
          <div className="birds__rundove-body"></div>
          <div className="birds__rundove-frontleg">
            <div className="birds__curly"></div>
          </div>
          <div className="birds__rundove-frontwing">
            <div className="birds__finger"></div>
            <div className="birds__finger"></div>
            <div className="birds__finger"></div>
            <div className="birds__circles"></div>
          </div>
        </div>
      </div>

      <Box w="30%" m={"auto"}>
        <Link to="/user">
          {/* <button className="star">Start</button> */}
          <Button colorScheme="blue" size={"lg"} w="full">
            Start
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
