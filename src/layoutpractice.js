import React from "react";
import "./layoutpractice.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import User from "./component/user";
import About from "./component/about";
import Contact from "./component/contact";
import State from "./state";
// import boutique from "./Boutique logo.jpg";
// import { Image, Button, Dropdown,Flex } from "antd";
function Layoutpractice() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/state" element={<State />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Layoutpractice;
