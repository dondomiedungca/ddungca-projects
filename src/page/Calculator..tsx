import React, { useState } from "react";

export const Calculator = () => {
  const [stringComputation, setComputation] = useState("");
  const [answer, setAnswer] = useState<number>(0);

  const compute = () => {
    if (!stringComputation) {
      return;
    }
    try {
      const an = eval(stringComputation);
      setAnswer(an);
    } catch (error) {}
  };

  const createComputation = (value: number | string) => {
    const lastChar = stringComputation[stringComputation.length - 1];
    const lastGroupNumber = stringComputation
      .split(" ")
      .filter((gr) => gr != " " && !"+-/*".includes(gr));
    if (
      ((lastChar === undefined || lastChar == " ") &&
        "+-x/".includes(value as any)) ||
      (lastGroupNumber.pop()?.includes(".") && value == ".")
    ) {
      return;
    }

    setComputation((prev) => {
      switch (value) {
        case "+":
          prev += " + ";
          break;
        case "-":
          prev += " - ";
          break;
        case "/":
          prev += " / ";
          break;
        case "x":
          prev += " * ";
          break;
        default:
          prev += value;
          break;
      }

      return prev;
    });
  };

  return (
    <div className="w-full h-screen bg-emerald-200 flex flex-col items-center justify-center">
      <div className="w-10/12 sm:w-1/2 md:w-1/4 min-h-10 bg-black flex flex-row-reverse items-center pr-2">
        <p className="text-sm select-none text-white">{stringComputation}</p>
      </div>
      <div className="w-10/12 sm:w-1/2 md:w-1/4 min-h-10 bg-black flex flex-row-reverse items-center pr-2">
        <p
          className="text-xl select-none text-green-400
         font-semibold"
        >
          {answer}
        </p>
      </div>
      <div
        className="w-10/12 sm:w-1/2 md:w-1/4 min-h-10 bg-gray-800 p-0.5 grid grid-flow-row grid-cols-5 gap-0.5
      "
      >
        <div
          onClick={() => createComputation(7)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            7
          </p>
        </div>
        <div
          onClick={() => createComputation(8)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            8
          </p>
        </div>
        <div
          onClick={() => createComputation(9)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            9
          </p>
        </div>
        <div
          onClick={() => {
            setComputation("");
            setAnswer(0);
          }}
          className="col-span-2 w-full bg-red-500 group transition duration-150 active:bg-red-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            AC
          </p>
        </div>
      </div>
      <div className="w-10/12 sm:w-1/2 md:w-1/4 min-h-10 bg-gray-800 pl-0.5 pr-0.5 grid grid-cols-5 gap-0.5">
        <div
          onClick={() => createComputation(4)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            4
          </p>
        </div>
        <div
          onClick={() => createComputation(5)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            5
          </p>
        </div>
        <div
          onClick={() => createComputation(6)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            6
          </p>
        </div>
        <div
          onClick={() => createComputation("+")}
          className="aspect-square w-full bg-slate-300 group transition duration-150 active:bg-slate-200 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-700 transition duration-150 text-2xl group-active:text-gray-700">
            +
          </p>
        </div>
        <div
          onClick={() => createComputation("-")}
          className="aspect-square w-full bg-slate-300 group transition duration-150 active:bg-slate-200 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-700 transition duration-150 text-2xl group-active:text-gray-700">
            -
          </p>
        </div>
      </div>
      <div className="w-10/12 sm:w-1/2 md:w-1/4 min-h-10 bg-gray-800 p-0.5 grid grid-cols-5 gap-0.5">
        <div
          onClick={() => createComputation(1)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            1
          </p>
        </div>
        <div
          onClick={() => createComputation(2)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            2
          </p>
        </div>
        <div
          onClick={() => createComputation(3)}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            3
          </p>
        </div>
        <div
          onClick={() => createComputation("x")}
          className="aspect-square w-full bg-slate-300 group transition duration-150 active:bg-slate-200 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-700 transition duration-150 text-2xl group-active:text-gray-700">
            x
          </p>
        </div>
        <div
          onClick={() => createComputation("/")}
          className="aspect-square w-full bg-slate-300 group transition duration-150 active:bg-slate-200 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-700 transition duration-150 text-2xl group-active:text-gray-700">
            /
          </p>
        </div>
      </div>
      <div className="w-10/12 sm:w-1/2 md:w-1/4 min-h-10 bg-gray-800 grid-flow-row pl-0.5 pr-0.5 pb-0.5 grid grid-cols-5 gap-0.5">
        <div
          onClick={() => createComputation(0)}
          className="w-full col-span-2 bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            0
          </p>
        </div>
        <div
          onClick={() => createComputation(".")}
          className="aspect-square w-full bg-gray-500 group transition duration-150 active:bg-gray-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            .
          </p>
        </div>
        <div
          onClick={() => compute()}
          className="col-span-2 w-full bg-green-500 group transition duration-150 active:bg-green-600 flex flex-row items-center justify-center"
        >
          <p className="select-none font-semibold text-gray-200 transition duration-150 text-2xl group-active:text-white">
            =
          </p>
        </div>
      </div>
    </div>
  );
};
