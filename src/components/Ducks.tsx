import React from "react";
import { useSelector } from "react-redux";
import "../css/Ducks.css";
import {
  AddToDatabase,
  AddUserOnePoints,
  ResetPoints,
} from "../redux/Actions/Actions";
import { useAppDispatch } from "../redux/app.hooks";
import { RootState } from "../redux/Store";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
  Input,
  Flex,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import flying from "../assets/flying.gif";
import { useNavigate } from "react-router-dom";

type Props = {};

const Ducks = (props: Props) => {
  const [time, setTime] = React.useState(0);
  const [flag, setFlag] = React.useState(false);

  const intervalRef = React.useRef();
  React.useEffect(() => {
    const interval: any = setInterval(() => {
      setTime((time) => {
        if (time >= 25) {
          clearInterval(intervalRef.current);
          setFlag(true);
          onEndOpen();
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
  const { user_one_points, user_one_name, leaderboard } = state;

  const handleChange = () => {
    dispatch(AddUserOnePoints());
  };

  const {
    isOpen: isEndOpen,
    onOpen: onEndOpen,
    onClose: onEndClose,
  } = useDisclosure();

  const {
    isOpen: isWinOpen,
    onOpen: onWinOpen,
    onClose: onWinClose,
  } = useDisclosure();

  const bird = flying;

  React.useEffect(() => {
    if (user_one_points == 9) {
      clearInterval(intervalRef.current);
      dispatch(AddToDatabase(user_one_name, user_one_points));
      onWinOpen();
    }
  }, [user_one_points]);

  const navigate = useNavigate();

  function handleExit() {
    dispatch(ResetPoints());
    onEndClose();
    onWinClose();
    navigate("/");
  }

  function handleTryAgain() {
    dispatch(ResetPoints());
    onEndClose();
    onWinClose();
    navigate("/user");
  }

  React.useEffect(() => {
    if (flag) {
      dispatch(AddToDatabase(user_one_name, user_one_points));
      setFlag(false);
    }
  }, [isEndOpen]);

  console.log(user_one_points);

  return (
    <div className="duckspace">
      {/* DuckOneCatagory */}
      <input
        type="checkbox"
        id="duck1"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck1" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input
        type="checkbox"
        id="duck2"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck2" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input
        type="checkbox"
        id="duck3"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck3" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input
        type="checkbox"
        id="duck4"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck4" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input
        type="checkbox"
        id="duck5"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck5" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input
        type="checkbox"
        id="duck6"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck6" className="duck">
        <img src={bird} alt="bird" />
      </label>

      <input
        type="checkbox"
        id="duck7"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck7" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input
        type="checkbox"
        id="duck8"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck8" className="duck">
        <img src={bird} alt="bird" />
      </label>
      <input
        type="checkbox"
        id="duck9"
        onChange={handleChange}
        className="checkbox"
      />
      <label htmlFor="duck9" className="duck">
        <img src={bird} alt="bird" />
      </label>

      <Box>
        <Modal
          isOpen={isEndOpen}
          onClose={onEndClose}
          closeOnOverlayClick={false}
          colorScheme={"red"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontFamily={"cursive"} textAlign={"center"}>
              Game Over!
            </ModalHeader>

            <ModalBody>
              <Text fontFamily={"cursive"} textAlign={"center"}>
                You earned {user_one_points} points.
              </Text>
              <Text fontFamily={"cursive"} textAlign={"center"}>
                Better luck next time!
              </Text>

              <Box>
                <Table variant="simple">
                  <TableCaption placement="top" fontSize={"xl"}>
                    LeaderBoard
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Rank</Th>
                      <Th>Name</Th>
                      <Th isNumeric>Points</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1</Td>
                      <Td>
                        {leaderboard && leaderboard[0] && leaderboard[0].name}
                      </Td>
                      <Td isNumeric>
                        {leaderboard && leaderboard[0] && leaderboard[0].points}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>
                        {leaderboard && leaderboard[1] && leaderboard[1].name}
                      </Td>
                      <Td isNumeric>
                        {leaderboard && leaderboard[1] && leaderboard[1].points}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>3</Td>
                      <Td>
                        {leaderboard && leaderboard[2] && leaderboard[2].name}
                      </Td>
                      <Td isNumeric>
                        {leaderboard && leaderboard[2] && leaderboard[2].points}
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleTryAgain}
                fontFamily={"cursive"}
              >
                Try Again
              </Button>
              <Button
                variant="ghost"
                fontFamily={"cursive"}
                onClick={handleExit}
              >
                Exit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>

      <Modal
        isOpen={isWinOpen}
        onClose={onWinClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontFamily={"cursive"} textAlign={"center"}>
            You Won!
          </ModalHeader>

          <ModalBody>
            <Text fontFamily={"cursive"} textAlign={"center"}>
              Winner Winner Duck Dinner!
            </Text>
            <Box>
              <Table variant="simple">
                <TableCaption placement="top" fontSize={"xl"}>
                  LeaderBoard
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Rank</Th>
                    <Th>Name</Th>
                    <Th isNumeric>Points</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>
                      {leaderboard && leaderboard[0] && leaderboard[0].name}
                    </Td>
                    <Td isNumeric>
                      {leaderboard && leaderboard[0] && leaderboard[0].points}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>
                      {leaderboard && leaderboard[1] && leaderboard[1].name}
                    </Td>
                    <Td isNumeric>
                      {leaderboard && leaderboard[1] && leaderboard[1].points}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>
                      {leaderboard && leaderboard[2] && leaderboard[2].name}
                    </Td>
                    <Td isNumeric>
                      {leaderboard && leaderboard[2] && leaderboard[2].points}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleTryAgain}>
              Play Again
            </Button>
            <Button variant="ghost" onClick={handleExit}>
              Exit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Ducks;
