import React from "react";
import useKeyPress from "../Hooks/useKeyPress";

const UseKeyPress = () => {
  const kPressed = useKeyPress("k");
  const iPressed = useKeyPress("i");
  const mPressed = useKeyPress("m");
  const cPressed = useKeyPress("c");
  const hPressed = useKeyPress("h");

  return (
    <>
      <h2>useKeyPress</h2>
      <ul>
        <li>Pressed 'k': {kPressed && "K"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
        <li>Pressed 'm': {mPressed && "M"}</li>
        <li>Pressed 'c': {cPressed && "C"}</li>
        <li>Pressed 'h': {hPressed && "H"}</li>
        <li>Pressed 'i': {iPressed && "I"}</li>
      </ul>
    </>
  );
};

export default UseKeyPress;
