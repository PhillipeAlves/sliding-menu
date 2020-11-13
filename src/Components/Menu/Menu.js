import React, { useState } from "react";
import { NavBar } from "./Navbar";
import { MenuButton } from "./MenuButton";
import "./Menu.css";

export const Menu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <NavBar toggle={toggle} onClick={() => setToggle(!toggle)} />
      <MenuButton toggle={toggle} onClick={() => setToggle(!toggle)} />
    </React.Fragment>
  );
};
