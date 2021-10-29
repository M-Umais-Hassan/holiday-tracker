import React from "react";
import Icon from "../assets/icon64.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Icon} alt="Icon" />
      <h2>Holiday Tracker</h2>
    </div>
  );
};

export default Navbar;
