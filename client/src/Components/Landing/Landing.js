import React, { Component } from "react";

import { results } from "../../request";
import axios from "axios";

import Hero from "./Hero/Hero";
import Img from "./Hero/Img/Img";
import Form from "./Hero/Form/Form";

import "./Landing.scss";

class Landing extends Component {
  state = {
    results: [],
    city: "",
    rooms: "",
    name: "",
    email: ""
  };

  componentWillMount = () => {
    axios
      .get(results)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  onCity = e => {
    e.preventDefault();
    this.setState({ city: e.target.value });
  };

  onRooms = e => {
    e.preventDefault();
    this.setState({ rooms: e.target.value });
  };

  onName = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  onEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  render() {
    const { results, city, rooms, name, email } = this.state;

    const check =
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.rooms.length > 0 &&
      this.state.city.length > 0;

    console.log(results);
    // console.log(this.state.results);
    // console.log(this.state.city);
    // console.log(this.state.rooms);
    // console.log(this.state.name);
    // console.log(this.state.email);
    console.log(check);

    const cityOptions = ["Houston", "Dallas", "Austin"];
    const roomOptions = [1, 2, 3, 4, 5];

    return (
      <div className="Landing">
        <Img />
        <Form
          cityChange={this.onCity}
          cityOptions={cityOptions}
          roomChange={this.onRooms}
          roomOptions={roomOptions}
          nameChange={this.onName}
          emailChange={this.onEmail}
          disable={check}
        />
      </div>
    );
  }
}
export default Landing;
