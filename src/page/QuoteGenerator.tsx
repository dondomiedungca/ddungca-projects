import React from "react";
import { useRandomQuotes } from "../utils/generateQuotes";

const QuoteGenerator = () => {
  const { quote, generate, color, author } = useRandomQuotes();
  return (
    <div
      className={`${color} transition duration-1000 w-full min-h-96 flex flex-col items-center justify-center h-screen`}
    >
      <div className="bg-white w-10/12 sm:w-3/4 md:w-1/3 pt-10 pl-10 pb-5 pr-10 rounded-md min-h-6">
        <h4 className="text-gray-600 mb-10">{quote}</h4>
        <div
          className="w-full'
         flex flex-row-reverse items-center justify-between"
        >
          <button
            onClick={generate}
            className={`${color} transition duration-1000 text-gray-600 font-medium p-2 rounded-md`}
          >
            New Quote
          </button>
          <p className="text-sm text-gray-600">- {author}</p>
        </div>
      </div>
      <div className="flex mt-8 w-full justify-center items-center">
        <p className="text-xs text-gray-700">Made By: Dondomie Dungca</p>
      </div>
    </div>
  );
};

export default QuoteGenerator;
