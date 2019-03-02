import React from "react";

import { Link } from "react-router-dom";

const Result = props => {
  console.log(props);

  const { name, city, price, rooms, img, id, roomsNeeded } = props;
  return (
    <div className="Result">
      <div className="img" style={{ backgroundImage: `url(${img})` }} />
      <div className="infoContainer">
        <div className="info">
          <h3>{name}</h3>
          <h4>${price}/night</h4>
          <h4>
            <span
              style={
                rooms >= roomsNeeded
                  ? { color: "#11af00", fontWeight: 700 }
                  : { color: "#ff3333", fontWeight: 700 }
              }
            >
              {rooms}
            </span>{" "}
            rooms available
          </h4>
          <h5>{city}</h5>
          <Link
            to={`/hotel/${id}/${roomsNeeded}`}
            className={rooms >= roomsNeeded ? "available" : "unavailable"}
          >
            <h5 id="btn">Book Now!</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
