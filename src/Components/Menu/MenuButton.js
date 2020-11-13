import React from "react";

export const MenuButton = ({ onClick, toggle }) => {
  return (
    <span
      className={`toggle-menu-btn ${toggle ? "active-menu-btn" : ""}`}
      onClick={onClick}
    ></span>
  );
};
