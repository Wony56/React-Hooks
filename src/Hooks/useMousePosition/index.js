import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const moveHandle = event => {
    setX(event.x);
    setY(event.y);
  };
  useEffect(() => {
    window.addEventListener("mousemove", moveHandle);

    return () => {
      window.removeEventListener("mousemove", moveHandle);
    };
  }, []);

  return { x, y };
};

export default useMousePosition;
