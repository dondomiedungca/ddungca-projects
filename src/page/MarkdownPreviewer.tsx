import React, { useEffect, useState } from "react";
import { marked } from "marked";

const MarkdownPreviewer = () => {
  const [value, setValue] =
    useState<string>(`# Welcome to my React Markdown Previewer!


## This is a sub-heading...
### And here's some other cool stuff:

`);

  const markedData = async (value: string) => {
    const data = await marked.parse(value);
    document.getElementById("markedDown")!.innerHTML = data || "";
  };

  useEffect(() => {
    markedData(value);
  }, [value]);

  return (
    <div
      className="w-full h-screen bg-blue-100 flex flex-col
     md:flex-row gap-10"
    >
      <div
        className="min-h-10 h-1/3 md:h-3/4 w-full md:w-1/2 bg-white rounded-md shadow-md flex flex-col
    "
      >
        <div className="bg-green-200 w-full min-h-10 flex flex-row items-center">
          <p className="font-semibold ml-2">Editor</p>
        </div>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="w-fulls h-full border-2 border-gray-200"
        ></textarea>
      </div>
      <div
        className="min-h-10 h-full w-full md:w-1/2 overflow-scroll rounded-md border-2 border-gray-600
       bg-white"
      >
        <div className="bg-emerald-500 w-full min-h-10 flex flex-row items-center">
          <p className="font-semibold ml-2">Previewer</p>
        </div>
        <div className="prose" id="markedDown"></div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
