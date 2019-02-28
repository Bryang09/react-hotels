import React from "react";

import "./Nav.scss";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="box">
        <Link to="/">
          <i className="fas fa-home" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
