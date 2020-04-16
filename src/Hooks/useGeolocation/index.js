import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    long: 0
  });
  const [error, setError] = useState(null);

  const successHandle = position => {
    setCoords({
      lat: position.coords.latitude,
      long: position.coords.longitude
    });
  };

  const errorHandle = () => {
    setError("Geolocation doesn't work...");
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successHandle, errorHandle);
    } else {
      setError("Geolocation doesn't work...");
    }
  }, []);

  return { coords, error };
};

export default useGeolocation;
