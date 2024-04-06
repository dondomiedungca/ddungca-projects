import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useRandomQuotes = () => {
  const colors = [
    "bg-red-200",
    "bg-orange-200",
    "bg-green-200",
    "bg-cyan-200",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-violet-300",
    "bg-purple-300",
    "bg-rose-300",
    "bg-pink-300",
  ];
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [color, setColor] = useState<string>();

  const generate = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://api.quotable.io/quotes/random?tags=love&maxLength=300"
      );
      if (res.data?.[0]) {
        setQuote(`" ${res.data?.[0]?.content}`);
        setColor(
          colors[Math.floor(Math.random() * (colors.length - 1 + 0)) + 0]
        );
        setAuthor(res.data?.[0]?.author);
      }
    } catch (error) {
      setQuote((error as any).toString());
    }
  }, []);

  useEffect(() => {
    generate();
  }, []);

  return {
    quote,
    generate,
    color,
    author,
  };
};
