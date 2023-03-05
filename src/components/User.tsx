import { Box, Button, Flex, grid, Heading, Image } from "@chakra-ui/react";

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
        pt="10px"
        mb={{ base: "5px", md: "20px" }}>
        <Heading>Avatars</Heading>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns={{
          base: "40%",
          sm: "repeat(2,1fr)",
          md: "repeat(2,1fr)",
        }}
        justifyContent="center"
        w={{ sm: "60%", md: "30%" }}
        m="auto"
        mb="20px">
        <Box m={"auto"}>
          <Flex justifyContent="center" mb="5px">
            <Image src="Ironman.png" alt="Hero" w="80%" />
          </Flex>
          <Flex justifyContent="center">
            {/* <button onClick={handleUser2}>Hero</button> */}
            <Button
              colorScheme="blue"
              size={"md"}
              w="50%"
              bgColor={user_one_avatar === "hero.gif" ? "green" : "blue.400"}
              isDisabled={user_one_avatar === "hero.gif"}
              onClick={handleAvatar1}>
              {user_one_avatar === "hero.gif" ? "Selected" : "Hero"}
            </Button>
          </Flex>
        </Box>
        <Box m={"auto"}>
          <Flex justifyContent="center" mb="5px">
            <Image src="Solider.jpg" alt="Solider" w="80%" />
          </Flex>
          <Flex justifyContent="center">
            <Button
              colorScheme="blue"
              size={"md"}
              w="50%"
              bgColor={user_one_avatar === "army.gif" ? "green" : "blue.400"}
              isDisabled={user_one_avatar === "army.gif"}
              onClick={handleAvatar2}>
              {user_one_avatar === "army.gif" ? "Selected" : " Solider"}
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* carousel start */}
      <Box w="80%" m={"auto"} mb={{ base: "50px", sm: "50px", md: "50px" }}>
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
