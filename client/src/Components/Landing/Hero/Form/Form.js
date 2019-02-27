import React from "react";

import "./Form.scss";

import { Link } from "react-router-dom";

const Form = props => {
  const {
    cityOptions,
    cityChange,
    roomOptions,
    roomChange,
    nameChange,
    emailChange,
    disable,
    rooms,
    city,
    name
  } = props;

  const cityValues = cityOptions.map(res => {
    return (
      <option key={res} value={res}>
        {res}
      </option>
    );
  });

  const roomValues = roomOptions.map(res => {
    return (
      <option value={res} key={res}>
        {res}
      </option>
    );
  });

  // console.log(cityOptions);
  // console.log(cityValues);
  // console.log(roomValues);

  // console.log(roomOptions);
  console.log(disable);

  return (
    <div className="Form">
      <h1>Find the Perfect Hotel Today!</h1>
      <form>
        <div className="input name">
          <input type="text" placeholder="Name" onChange={nameChange} />
        </div>

        <div className="input email">
          <input type="email" placeholder="Email" onChange={emailChange} />
        </div>

        <div className="input city">
          <select name="city" onChange={cityChange}>
            <option defaultValue>Select City</option>
            {cityValues}
          </select>
        </div>

        <div className="input rooms">
          <select name="rooms" onChange={roomChange}>
            <option defaultValue>Number of Rooms</option>
            {roomValues}
          </select>
        </div>
      </form>

      <Link
        to={{ pathname: `/city=${city}/rooms=${rooms}`, state: { name } }}
        className={disable ? "able" : "disable"}
      >
        <h5>Search Hotels</h5>
      </Link>

      {/* <button disabled={!disable}></button> */}
    </div>
  );
};

export default Form;
