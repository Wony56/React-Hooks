import React from "react";
import useMousePosition from "../Hooks/useMousePosition";

const UseMousePosition = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      <h2>useMousePosition</h2>
      <ul>
        <li>Mouse X: {x}</li>
        <li>Mouse Y: {y}</li>
      </ul>
    </>
  );
};

export default UseMousePosition;
