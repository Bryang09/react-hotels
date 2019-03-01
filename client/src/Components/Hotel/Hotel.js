import React, { Component } from "react";

import axios from "axios";
import { results } from "../../request";

import Hero from "./Hero/Hero";

import "./Hotel.scss";

import Nav from "../Nav/Nav";

class Hotel extends Component {
  state = {
    hotel: [],
    fullScreen: true
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

  render() {
    const { hotel, fullScreen } = this.state;
    console.log(hotel);
    console.log(fullScreen);

    return (
      <div className="Hotel">
        <Nav />
        <Hero
          hotel={hotel}
          fullScreen={fullScreen}
          interested={this.onInterested}
        />
        {/* <div
          className="HotelContainer"
          style={
            fullScreen
              ? {
                  background: `linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.6)),url(${
                    hotel.img
                  }) no-repeat center center / cover`,
                  height: "100vh"
                }
              : {
                  background: `linear-gradient(rgba(0,0,0,0.6) , rgba(0,0,0,0.6)),url(${
                    hotel.img
                  }) no-repeat center center / cover`,
                  height: "50vh"
                }
          }
        >
          <Nav />

          <div className="info">
            <h1>{hotel.name}</h1>
            <div className="description">
              <div className="row">
                <h3>
                  $ <span>{hotel.price}</span>/ night
                </h3>
                <h3>
                  <span>{hotel.rooms} </span>rooms available
                </h3>
              </div>
              <h4>{hotel.city}</h4>

              <h2 onClick={this.onInterested}>Im Interested!</h2>
            </div>
          </div>
        </div> */}

        <div
          className="Reservation"
          style={fullScreen ? { display: "none" } : { display: "flex" }}
        >
          <h2>Reserve Your Room</h2>
        </div>
      </div>
    );
  }
}
export default Hotel;
