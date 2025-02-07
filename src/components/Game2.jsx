import React from "react";
import { Dropdown } from "flowbite-react";
import { AskingQs } from "../assets/services/DataServices";
import { useState } from "react";
const Game2 = () => {
  const [userInput, setUserInput] = useState("");
  const [timeInput, setTimeInput] = useState(0);
  const [display, setDisplay] = useState("");
  const [meridian, setMeridian] = useState("AM");
    // let ampmBtn = document.getElementById("ampmBtn")
//   ampmBtn.label = "am"

  const displayTxt = async () => {
    let greeting = await AskingQs(userInput, timeInput);
    console.log(greeting);
    setDisplay(greeting == null ? "Please enter valid answers." : `${greeting} ${meridian}.`);
  };
  return (
    <div className="bg-[url(/src/assets/media/cacti.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover pt-20">
      <div className="container mx-auto">
      <div className="flex xs:justify-center md:justify-end">
          <h1 className="w-fit">Asking Questions</h1>
        </div>
        <div className="flex flex-row gap-8">
          <div>
            <h2>Enter your name:</h2>
            <input
              type="text"
              onChange={(event) => {
                setUserInput(event.target.value);
              }}
            />
          </div>
          <div>
            <h2>Enter the time you woke up:</h2>
            <div className="flex gap-2">
              <input
              className="numInput"
                type="text"
                onChange={(event) => {
                  setTimeInput(event.target.value);
                }}
              />
              <Dropdown label="Meridian" inline>
                <Dropdown.Item onClick={() => setMeridian("AM")}>AM</Dropdown.Item>
                <Dropdown.Item onClick={() => setMeridian("PM")}>PM</Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
        <button
          onClick={displayTxt}
          className="border-2 border-solid rounded-xl hover:bg-white"
        >
          <h2 className="p-3 hover:text-orange-300">
            <b>Submit</b>
          </h2>
        </button>
        <h2>{display}</h2>
      </div>
    </div>
  );
};

export default Game2;
