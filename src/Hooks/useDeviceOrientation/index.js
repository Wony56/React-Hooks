import { useState, useEffect } from "react";

const useDeviceOrientation = () => {
  const [state, setState] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0
  });

  const handleOrientation = event => {
    setState({
      ...state,
      alpha: event.alpha ? event.alpha : 0,
      beta: event.beta ? event.beta : 0,
      gamma: event.gamma ? event.gamma : 0
    });
  };

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    }

    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientation);
      }
    };
  }, []);

  return state;
};

export default useDeviceOrientation;
