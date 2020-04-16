import { useState } from "react";

const useLockScroll = () => {
  const [isLocked, setLock] = useState(false);

  const lockScroll = () => {
    setLock(true);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    setLock(false);
    const body = document.querySelector("body");
    body.style.overflow = "";
  };

  return [isLocked, { lockScroll, unlockScroll }];
};

export default useLockScroll;
