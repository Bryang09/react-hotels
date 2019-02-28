import React, { Component } from "react";
import { Link } from "react-router-dom";

import { results } from "../../request";
import axios from "axios";

import "./Results.scss";

import Container from "./Container/Container";

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
        <div className="banner">
          <Link to="/">
            <h1>
              Searching For <span>{rooms}</span> Bedroom Hotels in{" "}
              <span>{city}</span>
            </h1>
          </Link>
        </div>
        <Container results={results} city={city} rooms={rooms} />
      </div>
    );
  }
}

export default Results;
