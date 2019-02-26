import React from "react";

import Img from "./Img/Img";
import Form from "./Form/Form";

import "./Hero.scss";

const Hero = props => {
  return (
    <div className="Hero">
      <Img />
      <Form />
    </div>
  );
};

export default Hero;
