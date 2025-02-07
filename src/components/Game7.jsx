import React from "react";
import { useState } from "react";
import { ReverseWord } from "../assets/services/DataServices";

const Game7 = () => {
  const [UserInput, SetUserInput] = useState("");
  const [display, setDisplay] = useState("");

  const displayTxt = async () => {
    let input = UserInput.trim();
    let result = await ReverseWord(input);
    setDisplay(result == null ? "Please enter valid words." : result);
  };

  return (
    <div className="bg-[url(/src/assets/media/swamp.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover md:pt-20 flex md:block place-items-center">
      <div className="container mx-auto">
        <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Reverse It: Words</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h2>Enter words:</h2>
            <input
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
              <h2 className="p-2 hover:text-teal-600">
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

export default Game7;
