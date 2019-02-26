import React, { Component } from "react";

import "./Form.scss";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <h1>Find the Perfect Hotel Today!</h1>

        <form>
          <select name="city">
            <option selected="selected" />
            <option value="Houston">Houston</option>
            <option value="Dallas">Dallas</option>
            <option value="Austin">Austin</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
