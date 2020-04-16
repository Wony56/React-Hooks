import React from "react";
import useFavicon from "../Hooks/useFavicon";

const UseFavicon = () => {
  const setFavicon = useFavicon(
    "https://www.webopixel.net/blog/wp-content/uploads/2018/08/react-icon.png"
  );
  const newFaviconUrl =
    "https://avatars0.githubusercontent.com/u/29245056?s=200&v=4";
  return (
    <>
      <h2>useFavicon</h2>
      <button onClick={() => setFavicon(newFaviconUrl)}>Change Favicon</button>
    </>
  );
};

export default UseFavicon;
