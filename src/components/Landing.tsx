import React from "react";
import { Link } from "react-router-dom";
import "../css/Landing.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useAppDispatch } from "../redux/app.hooks";
import { ADD_USER_ONE } from "../redux/ActionTypes/ActionTypes";
import { AddUserOne } from "../redux/Actions/Actions";

export const Landings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = React.useState("");
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(AddUserOne(name));
    onClose();
  };

  React.useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Provide Your Details</ModalHeader>
          <ModalBody color="black">
            <Input
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              isDisabled={name === ""}
              colorScheme="blue"
              mr={3}
              onClick={handleAdd}
            >
              submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box
        bg={"#4c4b82"}
        className="body"
        minH="100vh"
        display="grid"
        m="auto"
        justifyContent={"center"}
      >
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
    </>
  );
};
