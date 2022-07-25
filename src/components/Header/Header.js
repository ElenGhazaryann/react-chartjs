import React from "react";
import Profile from "../Profile";
import { Bars } from "./../../svg/svg";
import flag from "./../../assets/flag.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <Bars />
      <div className="header-cn">
        <div className="lang">
          <img src={flag} />
          <p>EN</p>
        </div>
        <Profile name="Max" />
      </div>
    </header>
  );
}

export default Header;
