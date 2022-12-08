import { useState, useEffect } from "react";

export const useMedia = (media: string) => {
  console.log(window.matchMedia(media).matches);

  const [matches, setMatches] = useState<boolean>(
    window.matchMedia(media).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(media);

    const onChange = (e: MediaQueryListEvent) => {
      console.log("bbbbb", e);
      setMatches(e.matches);
    };

    mql.addEventListener("change", onChange);
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return matches;
};
