import React from "react";
import { useState } from "react";
import { ReverseNum } from "../assets/services/DataServices";

const Game8 = () => {
  const [UserInput, SetUserInput] = useState("");
  const [display, setDisplay] = useState("");

  const displayTxt = async () => {
    let input = UserInput.trim();
    let result = await ReverseNum(input);
    setDisplay(result == null ? "Please enter a valid number." : result);
  };

  return (
    <div className="bg-[url(/src/assets/media/space.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover md:pt-20 py-32 flex md:block place-items-center">
      <div className="container mx-auto">
        <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Reverse It: Numbers</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h2>Enter a number:</h2>
            <input
              className="numInput"
              type="text"
              onChange={(event) => {
                SetUserInput(event.target.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={displayTxt}
              className="border-2 border-solid rounded-xl hover:bg-white"
            >
              <h2 className="p-2 hover:text-orange-400">
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

export default Game8;
