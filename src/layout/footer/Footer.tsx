import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.styles.scss";

const Footer = () => (
  <div className="footer-container">
    <NavLink to="/home/landing" activeClassName="active">
      <div>
        <i className="fa fa-home"></i>
      </div>
    </NavLink>
    <NavLink to="/home/play">
      <div>
        <i className="fa fa-play-circle"></i>
      </div>
    </NavLink>
    <NavLink to="/home/dashboard">
      <div>
        <i className="fa fa-list"></i>
      </div>
    </NavLink>
    <NavLink to="/home/rewind">
      <div>
        <i className="fa fa-history"></i>
      </div>
    </NavLink>
    <NavLink to="/home/catalog">
      <div>
        <i className="fa fa-book"></i>
      </div>
    </NavLink>
  </div>
);

export default Footer;
