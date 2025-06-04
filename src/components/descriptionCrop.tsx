import { useRef, useState } from "react";
import { breakWords } from "../hooks/breakWords";

interface DescriptionProps {
  text: string;
  limitNumber: number;
}

/**
 * The Description component displays a block of text, truncating it if it's too long.
 * It allows the user to expand or collapse the text by clicking a "See more" or "See less" button.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.text - The text to display, which will be truncated if it exceeds 800 characters.
 *
 * @returns {JSX.Element} The rendered description with a toggle button for long text.
 */

export const DescriptionCrop = ({ text, limitNumber }: DescriptionProps) => {
  const [expanded, setExpanded] = useState(false);
  const limit = limitNumber;
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const isLong = text.length > limit;
  const displayedText =
    expanded || !isLong ? text : text.slice(0, limit) + "...";

  const longWord = breakWords(text);

  return (
    <div className="space-y-2">
      <p
        ref={paragraphRef}
        className={`${longWord ? "break-all" : "break-words"}`}
      >
        {displayedText}
      </p>
      {isLong && (
        <button
          className="text-leiDevBlue underline text-sm cursor-pointer "
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};
