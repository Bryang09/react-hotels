import React, { Component } from "react";

import axios from "axios";
import { results } from "../../request";

import Nav from "../Nav/Nav";

class Hotel extends Component {
  state = {
    hotel: []
  };

  componentWillMount = () => {
    const id = this.props.match.params.id;
    axios
      .get(`${results}/${id}`)
      .then(res => this.setState({ hotel: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { hotel } = this.state;
    console.log(hotel);

    return (
      <div className="Hotel">
        <Nav />
        {/* <h1>Hotel</h1> */}
        <div className="HotelContainer">
          <div className="img" />
          <div className="info" />
        </div>
      </div>
    );
  }
}
export default Hotel;
