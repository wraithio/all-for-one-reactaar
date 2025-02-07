import React from "react";
import { useState } from "react";
import { MadLib } from "../assets/services/DataServices";

const Game5 = () => {
  const [colorInput, setcolorInput] = useState("");
  const [adjInput, setadjInput] = useState("");
  const [placeInput, setplaceInput] = useState("");
  const [adj2Input, setadj2Input] = useState("");
  const [place2Input, setplace2Input] = useState("");
  const [foodSInput, setfoodSInput] = useState("");
  const [foodPInput, setfoodPInput] = useState("");
  const [verbInput, setverbInput] = useState("");
  const [nounPInput, setnounPInput] = useState("");
  const [adj3Input, setadj3Input] = useState("");
  const [display, setDisplay] = useState("");

  const displayTxt = async () => {
    let result = await MadLib(
      colorInput,
      adjInput,
      placeInput,
      adj2Input,
      place2Input,
      foodSInput,
      foodPInput,
      verbInput,
      nounPInput,
      adj3Input
    );
    setDisplay(result == null ? "Please fill all required fields." : result);
  };

  return (
    <div className="bg-[url(/src/assets/media/winter.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover md:pt-20 flex md:block place-items-start">
      <div className="container mx-auto">
        <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Mad Lib</h1>
        </div>
        <div className="bg-slate-600/50 rounded-xl p-6 grid sm:grid-rows-5 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-4 gap-8">
          <div>
            <h3>#1- Enter a color:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="color"
              required
              onChange={(event) => {
                setcolorInput(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#2- Enter an adjective:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="adjective"
              required
              onChange={(event) => {
                setadjInput(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#3- Enter a place:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="place"
              required
              onChange={(event) => {
                setplaceInput(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#4- Enter an adjective:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="adjective"
              required
              onChange={(event) => {
                setadj2Input(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#5- Enter a place:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="place"
              required
              onChange={(event) => {
                setplace2Input(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#6- Enter a singular food:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="food"
              required
              onChange={(event) => {
                setfoodSInput(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#7- Enter a plural food:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="food"
              required
              onChange={(event) => {
                setfoodPInput(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#8- Enter a verb:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="verb"
              required
              onChange={(event) => {
                setverbInput(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#9- Enter a plural noun:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="noun"
              required
              onChange={(event) => {
                setnounPInput(event.target.value);
              }}
            />
          </div>
          <div>
            <h3>#10- Enter an adjective:</h3>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="adjective"
              required
              onChange={(event) => {
                setadj3Input(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <button
              className="m-5 h-fit border-2 border-solid rounded-xl hover:bg-white"
              onClick={displayTxt}
            >
              <h2 className="p-2 hover:text-blue-300">
                <b>Submit</b>
              </h2>
            </button>
          </div>
          <h2 className="text-center p-6 mb-5">
            <b>{display}</b>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Game5;
