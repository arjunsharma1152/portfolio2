import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => (
  <div className="header">
    <div className="header-name">
      <span className="highlight">ARJUN</span>.
    </div>
    <div className="header-link">
      <p>Home </p>
      <p>Projects </p>
      <p>About </p>
    </div>

    <div className="hr-line"></div>
  </div>
);

export default Header;
