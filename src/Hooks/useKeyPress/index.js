import { useState, useEffect } from "react";

const useKeyPress = key => {
  const [status, setStatus] = useState(false);

  const keyDownHandle = event => {
    if (event.key === key) {
      setStatus(true);
    }
  };

  const keyUpHandle = event => {
    if (event.key === key) {
      setStatus(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandle);
    window.addEventListener("keyup", keyUpHandle);

    return () => {
      window.removeEventListener("keydown", keyDownHandle);
      window.removeEventListener("keyup", keyUpHandle);
    };
  }, []);

  return status;
};

export default useKeyPress;
