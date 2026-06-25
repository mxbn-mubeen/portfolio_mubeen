import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export const TypewriterText = ({ text, delay = 0 }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsFinished(false);

    let intervalId: ReturnType<typeof setInterval> | undefined;
    let currentIndex = 0;

    const startTyping = () => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (intervalId) clearInterval(intervalId);
          setIsFinished(true);
        }
      }, 50);
    };

    const initialDelay = setTimeout(startTyping, delay);

    return () => {
      if (intervalId) clearInterval(intervalId);
      clearTimeout(initialDelay);
    };
  }, [text, delay]);

  return (
    <>
      <span>{displayedText}</span>
      {!isFinished && <span className="animate-pulse inline-block ml-1">|</span>}
    </>
  );
};
