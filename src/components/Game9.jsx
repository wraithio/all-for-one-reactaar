import React from "react";
import { useState } from "react";
import { Magic8 } from "../assets/services/DataServices";

const Game9 = () => {
    const [userInput, setUserInput] = useState("");
    const [display, setDisplay] = useState("");

    const displayTxt = async () => {
        let response = await Magic8();
        setDisplay(response == null ? "Please fill the required field." : response);

    }

  return (
    <div className="bg-[url(/src/assets/media/beach.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover pt-20">
      <div className="container mx-auto">
        <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Magic 8 Ball</h1>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <h2>Enter a question:</h2>
            <input
              type="text"
              onChange={(event) => {
                setUserInput(event.target.value);
              }}
            />
            <button
              onClick={displayTxt}
              className="border-2 border-solid rounded-xl hover:bg-white"
            >
              <h2 className="p-3 hover:text-red-400">
                <b>Submit</b>
              </h2>
            </button>
          </div>
          <div className="relative">
              <img src="./public/a723817aa706a3ffccc9ef9a3943be6c.png" alt="" />
              <span className="absolute flex justify-center top-[40%] left-[34%] w-1/3"
            >
            <div className="flex justify-center"><h2 className="text-center">{display}</h2></div></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game9;
