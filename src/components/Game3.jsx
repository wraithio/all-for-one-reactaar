import React from "react";
import { useState } from "react";
import { Add2Num } from "../assets/services/DataServices";
const Game3 = () => {
  const [num1Input, Setnum1Input] = useState("");
  const [num2Input, Setnum2Input] = useState("");
  const [display, setDisplay] = useState("");

  const displayTxt = async () => {
    let input1 = num1Input.trim();
    let input2 = num2Input.trim();
    let result = await Add2Num(input1, input2);
    setDisplay(result == null ? "Please enter valid numbers." : result);
  };
  return (
    <div className="bg-[url(/src/assets/media/comdes01.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover pt-20">
      <div className="container mx-auto">
        <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Add 2 Numbers</h1>
        </div>
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
        <button
          onClick={displayTxt}
          className="border-2 border-solid rounded-xl hover:bg-white"
        >
          <h2 className="p-3 hover:text-blue-300">
            <b>Submit</b>
          </h2>
        </button>
        <h2>{display}</h2>
      </div>
    </div>
  );
};

export default Game3;
