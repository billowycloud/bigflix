import { useState, useEffect, useCallback } from "react";

export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    direction: 0,
  });
  const onScroll = useCallback(
    (e) => {
      window.__scrollPosition = document.documentElement.scrollTop || 0;
      setState({
        y: window.scrollY,
        x: window.scrollX,
        direction: state.y - window.__scrollPosition >= 0 ? 1 : -1,
      });
    },
    [state.y]
  );

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return state;
};
