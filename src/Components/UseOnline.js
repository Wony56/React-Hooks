import React from "react";
import useOnline from "../Hooks/useOnline";

const UseOnline = () => {
  const isOnLine = useOnline();

  return (
    <>
      <h2>useOnline</h2>
      <div>Are we online? {isOnLine ? "Yes" : "No"}</div>
    </>
  );
};

export default UseOnline;
