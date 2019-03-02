import React from "react";

import "./Nav.scss";

import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div className="Nav">
      <Link to="/">
        <div className="box">
          <i className="fas fa-home" />
        </div>
      </Link>
    </div>
  );
};

export default Nav;
