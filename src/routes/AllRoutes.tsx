import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landings } from "../components/Landing";
import { User } from "../components/User";
import Gamepage from "../pages/Gamepage";

type Props = {};

const AllRoutes = (props: Props) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landings />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/game" element={<Gamepage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
