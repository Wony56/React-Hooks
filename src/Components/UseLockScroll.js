import React from "react";
import useLockScroll from "../Hooks/useLockScroll";

const UseLockScroll = () => {
  const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();

  return (
    <>
      <h2>useLockScroll</h2>
      <h3>Is locked? {isLocked ? "Yes" : "No"}</h3>
      <button onClick={lockScroll}>Lock scroll</button>
      <button onClick={unlockScroll}>Unlock scroll</button>
    </>
  );
};

export default UseLockScroll;
