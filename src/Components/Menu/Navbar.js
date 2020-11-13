import React from "react";
import { HashRouter, NavLink } from "react-router-dom";

export const NavBar = ({ onClick, toggle }) => {
  return (
    <HashRouter>
      <div className={`slide-menu ${toggle ? "slide-in" : "slide-out"}`}>
        <ul className='nav-bar'>
          <NavLink onClick={onClick} to='/'>
            Home
          </NavLink>
          <NavLink onClick={onClick} to='/projects'>
            Projects
          </NavLink>
          <NavLink onClick={onClick} to='/contacts'>
            Contacts
          </NavLink>
          <NavLink onClick={onClick} to='/about'>
            About
          </NavLink>
        </ul>
      </div>
    </HashRouter>
  );
};
