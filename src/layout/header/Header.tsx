import React from "react";
import { Link } from "react-router-dom";

import SearchBox from "./SearchBox";
import logo from "../../assets/logo.jpeg";

import "./header.styles.scss";

function Header(): JSX.Element {
  return (
    <div className="header-container">
      <div className="menu">
        <Link to="/">
          <i className="fa fa-user"></i>
        </Link>
      </div>
      <div className="menu">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="menu">
        <SearchBox />
      </div>
    </div>
  );
}
export default Header;
