import React, { useCallback, useEffect, useRef, useState } from "react";
import { EventEmitter } from "stream";

const valid = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

const DrumMachine = () => {
  const [volume, setVolume] = useState(50);

  const playSound = (key: string) => {
    const audio = new Audio(`assets/sound-${key}.mp3`);
    audio.volume = volume / 100;
    audio.play();
  };

  const handleUserKeyPress = useCallback((event: KeyboardEvent) => {
    const { key } = event;
    if (valid.includes(key)) {
      playSound(key);
      const doc = document.getElementById(key);
      doc?.classList.add("bg-cyan-300");
      setTimeout(() => {
        doc?.classList.remove("bg-cyan-300");
      }, 150);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  return (
    <div className="bg-gray-700 w-full h-screen flex flex-row justify-center items-center">
      <div
        className="
      w-2/3 sm:w-1/4 md:w-1/4"
      >
        <div
          className="bg-gray-600 min-h-20 border-2 border-gray-600 rounded-md grid grid-cols-3 gap-2 p-5

        "
        >
          <div
            id="q"
            onClick={() => playSound("q")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              Q
            </p>
          </div>
          <div
            id="w"
            onClick={() => playSound("w")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              W
            </p>
          </div>
          <div
            id="e"
            onClick={() => playSound("e")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              E
            </p>
          </div>
          <div
            id="a"
            onClick={() => playSound("a")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              A
            </p>
          </div>
          <div
            id="s"
            onClick={() => playSound("s")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              S
            </p>
          </div>
          <div
            id="d"
            onClick={() => playSound("d")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              D
            </p>
          </div>
          <div
            id="z"
            onClick={() => playSound("z")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              Z
            </p>
          </div>
          <div
            id="x"
            onClick={() => playSound("x")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              X
            </p>
          </div>
          <div
            id="c"
            onClick={() => playSound("c")}
            className="group flex flex-row justify-center items-center w-full rounded-lg active:bg-cyan-300 transition duration-200 cursor-pointer shadow-blue-500 shadow-md border-2 border-cyan-400 aspect-square"
          >
            <p className="text-white select-none transition duration-200 group-active:text-gray-800 text-2xl font-semibold">
              C
            </p>
          </div>
        </div>
        <input
          type="range"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          className="accent-cyan-300 w-full h-2 mt-10 bg-cyan-400 rounded-lg appearance-auto cursor-pointer"
        />
        <p className="select-nones text-center mt-2 text-white">
          VOLUME: {volume}%
        </p>
      </div>
    </div>
  );
};

export default DrumMachine;
