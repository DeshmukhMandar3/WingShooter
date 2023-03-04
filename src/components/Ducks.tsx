import React from "react";
import { useSelector } from "react-redux";
import "../css/Ducks.css";
import { AddUserOnePoints } from "../redux/Actions/Actions";
import { useAppDispatch } from "../redux/app.hooks";
import { RootState } from "../redux/Store";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import flying from "../assets/flying.gif";

type Props = {};

const Ducks = (props: Props) => {
  const [time, setTime] = React.useState(0);

  const intervalRef = React.useRef();
  React.useEffect(() => {
    const interval: any = setInterval(() => {
      setTime((time) => {
        if (time >= 25) {
          onOpen();
          clearInterval(intervalRef.current);
        }

        return time + 1;
      });
    }, 1000);
    intervalRef.current = interval;
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.UserManager);
  const { user_one_points } = state;

  if (user_one_points == 9) {
    clearInterval(intervalRef.current);
  }

  const handleChange = () => {
    dispatch(AddUserOnePoints());
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const bird = flying;

  return (
    <div className="duckspace">
      {/* DuckOneCatagory */}
      <input type="checkbox" id="duck1" onChange={handleChange} />
      <label htmlFor="duck1" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input type="checkbox" id="duck2" onChange={handleChange} />
      <label htmlFor="duck2" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input type="checkbox" id="duck3" onChange={handleChange} />
      <label htmlFor="duck3" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input type="checkbox" id="duck4" onChange={handleChange} />
      <label htmlFor="duck4" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input type="checkbox" id="duck5" onChange={handleChange} />
      <label htmlFor="duck5" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input type="checkbox" id="duck6" onChange={handleChange} />
      <label htmlFor="duck6" className="duck">
        <img src={bird} alt="bird" />
      </label>

      <input type="checkbox" id="duck7" onChange={handleChange} />
      <label htmlFor="duck7" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input type="checkbox" id="duck8" onChange={handleChange} />
      <label htmlFor="duck8" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input type="checkbox" id="duck9" onChange={handleChange} />
      <label htmlFor="duck9" className="duck">
        <img src={bird} alt="bird" />
      </label>

      {isOpen ? (
        <Box>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            closeOnOverlayClick={false}
            colorScheme={"red"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontFamily={"cursive"}>Game Over!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontFamily={"cursive"}>
                  You earned {user_one_points} points.
                </Text>
                <Text fontFamily={"cursive"}>Better luck next time!</Text>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={onClose}
                  fontFamily={"cursive"}
                >
                  Try Again
                </Button>
                <Button variant="ghost" fontFamily={"cursive"}>
                  Exit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      ) : (
        <></>
      )}
      {user_one_points == 9 ? <Box>Bom Diggy Diggy Bom Bom</Box> : <></>}
    </div>
  );
};

export default Ducks;
