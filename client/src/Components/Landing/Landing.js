import React, { Component } from "react";

import Img from "./Hero/Img/Img";
import Form from "./Hero/Form/Form";

import "./Landing.scss";

class Landing extends Component {
  state = {
    city: "",
    rooms: "",
    name: "",
    email: ""
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
    const { city, rooms, name } = this.state;

    const check =
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.rooms.length > 0 &&
      this.state.city.length > 0;

    const cityOptions = ["Houston,TX", "Dallas,TX", "Austin,TX"];
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
          city={city}
          rooms={rooms}
          name={name}
        />
      </div>
    );
  }
}
export default Landing;
