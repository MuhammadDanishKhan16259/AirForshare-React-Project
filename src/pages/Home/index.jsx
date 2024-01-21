import React from "react";
import LOGO from "../../assets/logo.svg";
import "../Css/style.scss";
const HomePage = () => {
  return (
    <div className="container">
      <div className="header-bar">
        <div className="logo">
          <img src={LOGO} alt="" srcset="" />
        </div>
        <div className="menu-bar">
          <ul>
            <li>How it works</li>
            <li>Download </li>
            <li>Upgrade </li>
            <li>Feedback </li>
            <li>Login / Register </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
