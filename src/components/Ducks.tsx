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
} from "@chakra-ui/react";

type Props = {};

const Ducks = (props: Props) => {
  const [time, setTime] = React.useState(0);
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    let interval: any = null;
    interval = setInterval(() => {
      setTime((time) => {
        if (time >= 25) {
          onOpen();
          clearInterval(interval);
        }
        return time + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.UserManager);
  const { user_one_points } = state;

  const handleChange = () => {
    console.log("handleAdd");
    dispatch(AddUserOnePoints());
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  if (isOpen) {
  }

  return (
    <div className="duckspace">
      <input type="checkbox" id="duck1" onChange={handleChange} />
      <label htmlFor="duck1" className="duck">
        <img
          width={"150%"}
          src="https://64.media.tumblr.com/5dfe182158ff3e4e4f52895d740d9f17/7ead92638a157be6-9c/s640x960/434464a0ecd4dc24fae8f055dab38d27a6eb2c58.pnj"
          alt="bird"
        />
      </label>
      <input type="checkbox" id="duck2" onChange={handleChange} />
      <label htmlFor="duck2" className="duck">
        <img
          width={"150%"}
          src="https://64.media.tumblr.com/5dfe182158ff3e4e4f52895d740d9f17/7ead92638a157be6-9c/s640x960/434464a0ecd4dc24fae8f055dab38d27a6eb2c58.pnj"
          alt="bird"
        />
      </label>
      <input type="checkbox" id="duck3" onChange={handleChange} />
      <label htmlFor="duck3" className="duck">
        <img
          width={"150%"}
          src="https://64.media.tumblr.com/5dfe182158ff3e4e4f52895d740d9f17/7ead92638a157be6-9c/s640x960/434464a0ecd4dc24fae8f055dab38d27a6eb2c58.pnj"
          alt="bird"
        />
      </label>
      <input type="checkbox" id="duck4" onChange={handleChange} />
      <label htmlFor="duck4" className="duck">
        <img
          width={"150%"}
          src="https://64.media.tumblr.com/5dfe182158ff3e4e4f52895d740d9f17/7ead92638a157be6-9c/s640x960/434464a0ecd4dc24fae8f055dab38d27a6eb2c58.pnj"
          alt="bird"
        />
      </label>
      <input type="checkbox" id="duck5" onChange={handleChange} />
      <label htmlFor="duck5" className="duck">
        <img
          width={"150%"}
          src="https://64.media.tumblr.com/5dfe182158ff3e4e4f52895d740d9f17/7ead92638a157be6-9c/s640x960/434464a0ecd4dc24fae8f055dab38d27a6eb2c58.pnj"
          alt="bird"
        />
      </label>
      <input type="checkbox" id="duck6" onChange={handleChange} />
      <label htmlFor="duck6" className="duck">
        <img
          width={"150%"}
          src="https://64.media.tumblr.com/5dfe182158ff3e4e4f52895d740d9f17/7ead92638a157be6-9c/s640x960/434464a0ecd4dc24fae8f055dab38d27a6eb2c58.pnj"
          alt="bird"
        />
      </label>
      {isOpen ? (
        <>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Game Over!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Nice Try Though</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Try Again
                </Button>
                <Button variant="ghost">Exit</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Ducks;
