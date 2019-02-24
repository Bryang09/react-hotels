import React, { Component } from "react";

import { results } from "../../request";
import axios from "axios";
import Hero from "./Hero/Hero";

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
      <div>
        <Hero />
      </div>
    );
  }
}
export default Landing;
