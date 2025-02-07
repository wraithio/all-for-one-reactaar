import { useState } from "react";
import { SayHello } from "../assets/services/DataServices";
const Game1 = () => {
  const [userInput, setUserInput] = useState("");
  const [display, setDisplay] = useState("");

  const displayTxt = async () => {
    let greeting = await SayHello(userInput);
    setDisplay(greeting == null ? "Please enter a name." : greeting);
    console.log(greeting);
  };
  return (
    <>
      <div className="bg-[url(/src/assets/media/Milky1.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover md:pt-20 py-32 flex md:block place-items-center">
        <div className="container mx-auto">
          <div className="flex xs:justify-center md:justify-end">
            <h1 className="w-fit">Say Hello</h1>
          </div>
          <div className="flex flex-col gap-3">
          <h2>Enter your name:</h2>
            <div>
            <input
              type="text"
              onChange={(event) => {
                setUserInput(event.target.value);
              }}
              />
              </div>
              <div>

            <button
              onClick={displayTxt}
              className="border-2 border-solid rounded-xl hover:bg-white"
              >
              <h2 className="p-2 hover:text-pink-500">
                <b>Submit</b>
              </h2>
            </button>
              </div>
          </div>
          <h2>{display}</h2>
        </div>
      </div>
    </>
  );
};
export default Game1;
