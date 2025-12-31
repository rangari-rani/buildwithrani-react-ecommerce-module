import { useState, useEffect } from "react";
import { quotes } from "../data/quotes"; 

export function useRotatingQuote(interval: number = 4000) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval]);

  const currentQuote = quotes[index];
  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  return { currentQuote, pause, resume, index };
}
