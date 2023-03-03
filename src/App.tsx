import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import { Routes, Route } from "react-router-dom"
import { User } from "./components/User";
import { Landings } from "./components/Landings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landings />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
