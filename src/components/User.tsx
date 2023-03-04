
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import "../css/User.css";

import Maps from "./Maps";

interface Props {}

export const User = (props: Props) => {
  const handleUser1 = () => {
    console.log("1");
  };

  const handleUser2 = () => {
    console.log("1");
  };

  return (
    <Box border={"2px solid black"}>
      <Box
        display="flex"
        justifyContent={"center"}
        mt="10px"
        mb={{ base: "5px", md: "20px" }}>
        <Heading>Avatars</Heading>
      </Box>

      <Box
        display={{ base: "grid", md: "flex" }}
        gap="20px"
        w={{ sm: "80%", md: "40%" }}
        m="auto">
        <Box w="50%" m={"auto"}>
          <Flex justifyContent="center">
            <Image src="Ironman.png" alt="Hero" w="50%" />
          </Flex>
          <Flex justifyContent="center">
            {/* <button onClick={handleUser2}>Hero</button> */}
            <Button
              colorScheme="blue"
              size={"md"}
              w="50%"
              onClick={handleUser2}>
              Hero
            </Button>
          </Flex>
        </Box>
        <Box w="50%" m={"auto"}>
          <Flex justifyContent="center">
            <Image src="Solider.jpg" alt="Solider" w="50%" />
          </Flex>
          <Flex justifyContent="center">
            <Button
              colorScheme="blue"
              size={"md"}
              w="50%"
              onClick={handleUser1}>
              Solider
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* carousel start */}
      <Box w="80%" m={"auto"} mb="30px">
        {/* <Carousel /> */}
        <Maps />
      </Box>

      <Box w="30%" m={"auto"}>
        <Link to="/game">
          <Button colorScheme="blue" size={"lg"} w="full" onClick={handleUser2}>
            Play
          </Button>
        </Link>
      </Box>
    </Box>

  );
};
