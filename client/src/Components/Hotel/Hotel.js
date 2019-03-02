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
    to: ""
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

  render() {
    const {
      hotel,
      fullScreen,
      from,
      to,
      selectedFrom,
      selectedTo
    } = this.state;

    console.log(hotel);
    console.log(fullScreen);
    console.log(from);
    console.log(to);
    console.log(selectedFrom);
    console.log(selectedTo);

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
        />
        {/* <div
          className="Reservation"
          style={fullScreen ? { display: "none" } : { display: "flex" }}
        >
          <h2>Reserve Your Room</h2>

          <div className="picker">
            <MuiThemeProvider theme={theme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <InlineDatePicker
                  className="datePicker"
                  label="From"
                  value={selectedFrom}
                  onChange={this.onFrom}
                />
                <InlineDatePicker
                  className="datePicker"
                  label="To"
                  value={selectedTo}
                  onChange={this.onTo}
                />
              </MuiPickersUtilsProvider>
            </MuiThemeProvider>
          </div>

          <h3 className={from !== "" && to !== "" ? "able" : "disable"}>
            Book Now!
          </h3>
        </div> */}
      </div>
    );
  }
}
export default Hotel;
