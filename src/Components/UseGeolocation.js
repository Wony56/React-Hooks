import React from "react";
import useGeolocation from "../Hooks/useGeolocation";

const UseGeolocation = () => {
  const {
    coords: { lat, long },
    error
  } = useGeolocation();

  return (
    <>
      <h2>useGeolocation</h2>
      <ul>
        <li>Latitude: {lat}</li>
        <li>Longitude: {long}</li>
        <li>Geolocation Error: {error ? error : "null"}</li>
      </ul>
    </>
  );
};

export default UseGeolocation;
