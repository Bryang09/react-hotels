import React from "react";

import { InlineDatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MuiThemeProvider } from "@material-ui/core";

import theme from "./theme";

const Reservation = props => {
  const {
    fullScreen,
    selectedFrom,
    from,
    selectedTo,
    to,
    onFrom,
    onTo
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

      <h3 className={from !== "" && to !== "" ? "able" : "disable"}>
        Book Now!
      </h3>
    </div>
  );
};

export default Reservation;
