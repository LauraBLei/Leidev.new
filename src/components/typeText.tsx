import { useEffect, useState, useRef } from "react";

// TypingEffectWithCursor Component
interface TypingEffectProps {
  text: string; // The text to be typed out
  speed?: number; // Optional speed for typing (default: 150ms)
  cursorBlinkSpeed?: number; // Optional speed for the cursor blink (default: 500ms)
}

const TypingEffectWithCursor: React.FC<TypingEffectProps> = ({
  text,
  speed = 150,
  cursorBlinkSpeed = 500,
}) => {
  const [typedText, setTypedText] = useState<string>(""); // Holds the typed text
  const [cursorVisible, setCursorVisible] = useState<boolean>(true); // Cursor visibility for blinking
  const currentIndexRef = useRef<number>(0); // Tracks the current index of the text being typed

  // Typing effect
  useEffect(() => {
    if (!text) return; // Early exit if text is empty

    const x = text.split("");

    setTypedText(""); // Reset the text when the effect starts
    currentIndexRef.current = 0; // Reset the index

    const typingInterval = setInterval(() => {
      if (currentIndexRef.current < text.length) {
        setTypedText((prev) => prev + x.shift());
        currentIndexRef.current++;
      } else {
        clearInterval(typingInterval); // Stop once typing is done
      }
    }, speed);

    // Cleanup interval on unmount or text change
    return () => clearInterval(typingInterval);
  }, [text, speed]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev); // Toggle cursor visibility
    }, cursorBlinkSpeed);

    // Cleanup interval on unmount
    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  return (
    <h1 className="text-4xl font-mono text-green-500">
      {typedText}
      <span
        className={`text-green-500 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 0.3s" }}
      >
        _
      </span>{" "}
      {/* Blinking cursor */}
    </h1>
  );
};

export default TypingEffectWithCursor;
