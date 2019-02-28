import React from "react";

import "./Container.scss";
import Result from "./Result/Result";

const Container = props => {
  console.log(props);

  const { results, city, rooms } = props;
  const filterdResults = results
    .filter(res => res.city === city)
    .map(res => {
      return (
        <Result
          key={res._id}
          name={res.name}
          city={res.city}
          price={res.price}
          rooms={res.rooms}
          img={res.img}
          id={res._id}
          roomsNeeded={rooms}
        />
      );
    });
  return <div className="Container">{filterdResults}</div>;
};

export default Container;
