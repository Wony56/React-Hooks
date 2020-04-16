import { useState, useEffect } from "react";

const useLocalStorage = (name, initialValue) => {
  const [currentLS, setCurrentLS] = useState(null);

  const setLS = value => {
    localStorage.setItem(name, value);
    setCurrentLS(
      localStorage.getItem(name) !== "null" ? localStorage.getItem(name) : null
    );
  };

  useEffect(() => {
    setLS(initialValue);
  }, []);

  return [currentLS, setLS];
};

export default useLocalStorage;
