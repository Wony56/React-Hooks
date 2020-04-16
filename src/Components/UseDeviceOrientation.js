import React from "react";
import useDeviceOrientation from "../Hooks/useDeviceOrientation";

const UseDviceOrientation = () => {
  const { alpha, beta, gamma } = useDeviceOrientation();
  return (
    <>
      <h2>useDeviceOrientation</h2>
      <ul>
        <li>Alpha: {alpha}</li>
        <li>Beta: {beta}</li>
        <li>Gamma: {gamma}</li>
      </ul>
    </>
  );
};

export default UseDviceOrientation;
