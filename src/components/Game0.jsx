import React from "react";
import { Restaurant } from "../assets/services/DataServices";
import { useState } from "react";

const Game0 = () => {
  const [display, setDisplay] = useState("");
  const [genre, setGenre] = useState("");

  const displayTxt = async () => {
    let result = await Restaurant(genre);
    setDisplay(result == null ? "Please select a genre." : result);

  };

  return (
    <div className="bg-[url(/src/assets/media/backiee-172695.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover md:pt-20 flex md:block place-items-center">
      <div className="container mx-auto">
        <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Restaurant Picker</h1>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Pick a genre of food:</h2>
          <div className="flex gap-6">
            <button
              onClick={() => setGenre("mexican")}
              className="border-2 border-solid rounded-xl hover:bg-white"
            >
              <h2 id="mexicanBtn" className="p-2 hover:text-blue-600">
                Mexican
              </h2>
            </button>
            <button
              onClick={() => setGenre("chinese")}
              id="chineseBtn"
              className="border-2 border-solid rounded-xl hover:bg-white"
            >
              <h2 className="p-2 hover:text-blue-600">Chinese</h2>
            </button>
            <button
              onClick={() => setGenre("italian")}
              className="border-2 border-solid rounded-xl hover:bg-white"
            >
              <h2 id="italianBtn" className="p-2 hover:text-blue-600">
                Italian
              </h2>
            </button>
          </div>
        </div>
        <div>
          <button
            onClick={displayTxt}
            className="border-2 border-solid rounded-xl hover:bg-white"
          >
            <h2 className="p-2 hover:text-blue-600">Generate</h2>
          </button>
        </div>
        <h2>{display}</h2>
      </div>
    </div>
  );
};

export default Game0;
