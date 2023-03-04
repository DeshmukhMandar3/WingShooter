import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { Text } from "@chakra-ui/react";

type Props = {};

const Scorecard = (props: Props) => {
  const state = useSelector((state: RootState) => state.UserManager);
  const { user_one_points, user_one_name } = state;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        background: "red",
        justifyContent: "space-evenly",
        fontFamily: "cursive",
      }}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        User : {user_one_name}
      </Text>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Score: {user_one_points}
      </Text>
    </div>
  );
};

export default Scorecard;
