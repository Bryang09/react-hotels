import React from "react";

import { InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiThemeProvider } from "@material-ui/core";

import { Link } from "react-router-dom";

import theme from "./theme";

const Reservation = props => {
  const {
    fullScreen,
    selectedFrom,
    from,
    selectedTo,
    to,
    onFrom,
    onTo,
    reserve,
    fail
  } = props;
  return (
    <div
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
              onChange={onFrom}
            />
            <InlineDatePicker
              className="datePicker"
              label="To"
              value={selectedTo}
              onChange={onTo}
            />
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </div>

      <h3
        className={from !== "" && to !== "" ? "able" : "disable"}
        onClick={reserve}
      >
        Book Now!
      </h3>
      <h4 style={fail ? { display: "flex" } : { display: "none" }}>
        Rooms Requested Exceed Rooms Available
        <br />
        Please Search for A different Hotel
      </h4>
      <Link to="/">
        <h4
          id="success"
          style={fail === false ? { display: "flex" } : { display: "none" }}
        >
          You will Recieve an Email with Your Comfirmation Number. <br />
          Thank You For Choosing Bryan's Hotels
        </h4>
      </Link>
    </div>
  );
};

export default Reservation;
