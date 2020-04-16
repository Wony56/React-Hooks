import React from "react";
import UseDviceOrientation from "./UseDeviceOrientation";
import UseFavicon from "./UseFavicon";
import UseGeolocation from "./UseGeolocation";
import UseKeyPress from "./UseKeyPress";
import UseLocalStorage from "./UseLocalStorage";
import UseMousePosition from "./UseMousePosition";
import UseOnline from "./UseOnline";
import UseLockScroll from "./UseLockScroll";

const App = () => {
  return (
    <div className="App">
      <h1>Superhooks!</h1>
      <UseDviceOrientation />
      <UseFavicon />
      <UseGeolocation />
      <UseKeyPress />
      <UseLocalStorage />
      <UseMousePosition />
      <UseOnline />
      <UseLockScroll />
    </div>
  );
};

export default App;
