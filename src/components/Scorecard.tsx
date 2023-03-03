import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store";

type Props = {};

const Scorecard = (props: Props) => {
  const state = useSelector((state: RootState) => state.UserManager);
  const { user_one_points } = state;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h1>User One Points : </h1>&nbsp; <h1>{user_one_points}</h1>
    </div>
  );
};

export default Scorecard;
