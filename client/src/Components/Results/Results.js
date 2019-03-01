import React, { Component } from "react";

import { results } from "../../request";
import axios from "axios";

import "./Results.scss";

import Container from "./Container/Container";
import Nav from "../Nav/Nav";

class Results extends Component {
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
    console.log(this.props.match.params);
    console.log(this.state.results);

    const city = this.props.match.params.city;
    const rooms = this.props.match.params.rooms;

    const { results } = this.state;

    return (
      <div className="Results">
        <Nav />
        <div className="banner">
          <h1>
            Searching For <span>{rooms}</span> Bedroom Hotels in{" "}
            <span>{city}</span>
          </h1>
        </div>
        <Container results={results} city={city} rooms={rooms} />
      </div>
    );
  }
}

export default Results;
