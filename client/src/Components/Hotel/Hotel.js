import React, { Component } from "react";
import "./Hotel.scss";

import axios from "axios";
import { results } from "../../request";

import Hero from "./Hero/Hero";
import Nav from "../Nav/Nav";
import Reservation from "./Reservation/Reservation";

class Hotel extends Component {
  state = {
    hotel: [],
    fullScreen: true,
    selectedFrom: new Date(),
    selectedTo: new Date(),
    from: "",
    to: "",
    fail: ""
  };

  componentWillMount = () => {
    const id = this.props.match.params.id;

    axios
      .get(`${results}/${id}`)
      .then(res => this.setState({ hotel: res.data }))
      .catch(err => console.log(err));
  };

  onInterested = () => {
    this.setState({ fullScreen: !this.state.fullScreen });
  };

  onFrom = e => {
    this.setState({ from: e, selectedFrom: e });
  };

  onTo = e => {
    this.setState({ to: e, selectedTo: e });
  };

  onReserve = () => {
    const id = this.props.match.params.id;
    const rooms = this.props.match.params.rooms;
    const currentRooms = this.state.hotel.rooms;

    const updatedRooms = currentRooms - rooms;

    updatedRooms >= 0
      ? axios
          .put(
            `${results}/${id}`,
            { rooms: `${updatedRooms}` },
            { headers: { "Content-Type": "application/json" } }
          )
          .then(() => this.setState({ fail: false }))
          .catch(err => console.log(err))
      : this.setState({ fail: true });
  };

  render() {
    const {
      hotel,
      fullScreen,
      from,
      to,
      selectedFrom,
      selectedTo,
      fail
    } = this.state;
    const rooms = this.props.match.params.rooms;

    console.log(hotel);
    // console.log(fullScreen);
    // console.log(from);
    // console.log(to);
    // console.log(selectedFrom);
    // console.log(selectedTo);
    console.log(fail);

    console.log(this.props.match.params.id);

    console.log(hotel.rooms - parseInt(rooms));

    return (
      <div className="Hotel">
        <Nav />
        <Hero
          hotel={hotel}
          fullScreen={fullScreen}
          interested={this.onInterested}
        />
        <Reservation
          fullScreen={fullScreen}
          selectedFrom={selectedFrom}
          onFrom={this.onFrom}
          selectedTo={selectedTo}
          onTo={this.onTo}
          from={from}
          to={to}
          fail={fail}
          reserve={this.onReserve}
        />
      </div>
    );
  }
}
export default Hotel;
