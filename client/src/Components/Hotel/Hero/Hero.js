import React from "react";

const Hero = props => {
  const { fullScreen, hotel, interested } = props;
  return (
    <div
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

          <h2 onClick={interested}>Im Interested!</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
