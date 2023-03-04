import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import "../css/User.css";
import { useAppDispatch } from "../redux/app.hooks";
import { AddUserOneAvatar } from "../redux/Actions/Actions";
import { RootState } from "../redux/Store";

import Maps from "./Maps";
import { useSelector } from "react-redux";

interface Props {}

export const User = (props: Props) => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.UserManager);
  const { user_one_avatar } = state;

  const handleAvatar1 = () => {
    dispatch(AddUserOneAvatar("hero.gif"));
  };

  const handleAvatar2 = () => {
    dispatch(AddUserOneAvatar("army.gif"));
  };

  return (
    <Box bg={"#4c4b82"} minH="100vh">
      <Box
        display="flex"
        justifyContent={"center"}
        mt="10px"
        mb={{ base: "5px", md: "20px" }}
      >
        <Heading>Avatars</Heading>
      </Box>

      <Box
        display={{ base: "grid", md: "flex" }}
        gap="20px"
        w={{ sm: "80%", md: "40%" }}
        m="auto"
      >
        <Box w="50%" m={"20px"}>
          <Flex justifyContent="center">
            <Image src="Ironman.png" alt="Hero" w="50%" />
          </Flex>
          <Flex justifyContent="center">
            {/* <button onClick={handleUser2}>Hero</button> */}
            <Button
              colorScheme="blue"
              size={"md"}
              w="50%"
              bgColor={user_one_avatar == "hero.gif" ? "green" : "blue.400"}
              isDisabled={user_one_avatar == "hero.gif"}
              onClick={handleAvatar1}
            >
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
              bgColor={user_one_avatar == "army.gif" ? "green" : "blue.400"}
              isDisabled={user_one_avatar == "army.gif"}
              onClick={handleAvatar2}
            >
              Solider
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* carousel start */}
      <Box w="80%" m={"auto"} mb={{ base: "0px", md: "50px" }}>
        {/* <Carousel /> */}
        <Maps />
      </Box>

      <Box w="30%" m={"auto"} marginTop={"-34px"}>
        <Link to="/game">
          <Button colorScheme="blue" size={"lg"} w="full">
            Play
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
