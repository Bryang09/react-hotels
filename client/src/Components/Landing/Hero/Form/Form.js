import React from "react";

import "./Form.scss";

const Form = props => {
  const {
    cityOptions,
    cityChange,
    roomOptions,
    roomChange,
    nameChange,
    emailChange,
    disable
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
  // console.log(roomOptions);
  // console.log(roomValues);

  return (
    <div className="Form">
      <h1>Find the Perfect Hotel Today!</h1>
      <form>
        <div className="row1">
          <input type="text" placeholder="Name" onChange={nameChange} />
          <input type="email" placeholder="Email" onChange={emailChange} />
        </div>

        <div className="row2">
          <select name="city" onChange={cityChange}>
            <option defaultValue />
            {cityValues}
          </select>
          <select name="rooms" onChange={roomChange}>
            <option defaultValue />
            {roomValues}
          </select>
        </div>
      </form>
      <button disabled={!disable}>Search Hotels</button>
    </div>
  );
};

export default Form;
