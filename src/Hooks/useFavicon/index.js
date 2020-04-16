import { useEffect } from "react";

const useFavicon = initialFaviconUrl => {
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = initialFaviconUrl;
  }, [initialFaviconUrl]);

  const setFavicon = newFaviconUrl => {
    const favicon = document.querySelector("link[rel='icon']");
    favicon.href = newFaviconUrl;
  };

  return setFavicon;
};

export default useFavicon;
