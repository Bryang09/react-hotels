import React, { Component } from "react";

import { results } from "../../request";
import axios from "axios";

import Hero from "./Hero/Hero";
import Img from "./Hero/Img/Img";
import Form from "./Hero/Form/Form";

import "./Landing.scss";

class Landing extends Component {
  state = {
    results: []
  };

  componentWillMount = () => {
    axios
      .get(results)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(results);
    console.log(this.state.results);

    return (
      <div className="Landing">
        <Img />
        <Form />
      </div>
    );
  }
}
export default Landing;
