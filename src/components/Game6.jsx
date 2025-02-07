import React from "react";
import { OddEvn } from "../assets/services/DataServices";
import { useState } from "react";

const Game6 = () => {
  const [NumInput, SetNumInput] = useState("");
  const [display, setDisplay] = useState("");

  const displayTxt = async () => {
    let input = NumInput.trim();
    let result = await OddEvn(input);
    setDisplay(result == null ? "Please enter a valid number." : result);
  };

  return (
    <div className="bg-[url(/src/assets/media/arctic.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover md:pt-20 flex md:block place-items-start">
      <div className="container mx-auto">
        <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Odd or Even</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h2>Enter a number:</h2>
            <input
              className="numInput"
              type="text"
              onChange={(event) => {
                SetNumInput(event.target.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={displayTxt}
              className="border-2 border-solid rounded-xl hover:bg-white"
            >
              <h2 className="p-2 hover:text-purple-300">
                <b>Submit</b>
              </h2>
            </button>
          </div>
        </div>
        <h2>{display}</h2>
      </div>
    </div>
  );
};

export default Game6;
