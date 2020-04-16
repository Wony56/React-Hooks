import { useState, useEffect } from "react";

const useOnline = () => {
  const [state, setState] = useState(navigator.onLine);

  const handle = () => {
    if (navigator.onLine) {
      setState(true);
    } else {
      setState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("online", handle);
    window.addEventListener("offline", handle);

    return () => {
      window.removeEventListener("online", handle);
      window.removeEventListener("offline", handle);
    };
  }, []);

  return state;
};

export default useOnline;
