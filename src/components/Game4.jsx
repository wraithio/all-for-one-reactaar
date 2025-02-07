import React from "react";
import { useState } from "react";
import { GtrLssThn } from "../assets/services/DataServices";

const Game4 = () => {
  const [num1Input, Setnum1Input] = useState("");
  const [num2Input, Setnum2Input] = useState("");
  const [display, setDisplay] = useState("");

  const displayTxt = async () => {
    let input1 = num1Input.trim();
    let input2 = num2Input.trim();
    let result = await GtrLssThn(input1, input2);
    setDisplay(result == null ? "Please enter valid numbers." : result);
  };

  return (
    <div className="bg-[url(/src/assets/media/forest.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover md:pt-20 flex md:block place-items-start">
      <div className="container mx-auto">
        <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Greater Than/Less Than</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-8">
            <div>
              <h2>Enter the first number:</h2>
              <input
                className="numInput"
                type="text"
                onChange={(event) => {
                  Setnum1Input(event.target.value);
                }}
              />
            </div>
            <div>
              <h2>Enter the second number:</h2>
              <input
                className="numInput"
                type="text"
                onChange={(event) => {
                  Setnum2Input(event.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <button
              onClick={displayTxt}
              className="border-2 border-solid rounded-xl hover:bg-white"
            >
              <h2 className="p-2 hover:text-green-300">
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

export default Game4;
