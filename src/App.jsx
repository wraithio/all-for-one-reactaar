import { useState } from "react";
import "./App.css";
import PlayBtnComponent from "./components/PlayBtnComponent";

// let prompts = [
//   ["Say Hello", "Enter a name and recieve a warm greeting.", "/game1"]
//   ["Asking Questions", "Answer a couple questions and receive a custom greeting.", "/game2"]
//   ["Add 2 Numbers", "Find the sum of any two numbers.", "/game3"]
//   ["Greater Than/Less Than", "Enter two numbers to find out which is a greater value.", "/game4"]
//   ["Mad Lib", "Enter custom words to create a custom story in wacky MADLIBS© fashion." , "/game5"]
//   ["Odd Or Even", "Enter a number to find out if it is odd or even.", "/game6"]
//   ["Reverse It (Word)", "Enter a word and make it reversed!", "/game7"]
//   ["Reverse It (Number)", "Enter a number and make it reversed!", "/game8"]
//   ["Magic 8 Ball", "Ask the 8 Ball a question and get a mysterious answer.", "/game9"]
//   ["Restaurant Picker", "Pick a food genre and generate a random restaurant.", "/game0"]
// ]
function App() {

  // const[titlePrompt,settitlePromptdesPrompt] = useState("")
  // const[desPrompt,setdesPrompt] = useState("")
  // const[pathPrompt,setpathPrompt] = useState("")
  

  // const changeCard = (index) => {
  //   return index
  // }


  return (
    <div className="bg-[url(/src/assets/media/AllForOneWP.jpg)] min-h-screen bg-no-repeat bg-cover md:pt-20 py-32">
      <div className="container mx-auto">
        <div className="flex justify-center sm:justify-end">
          <h1 className="w-fit">All For One</h1>
        </div>
        <div
          id="titleText"
          className="row flex justify-center sm:justify-start"
        >
          <h3>Select a game mode :</h3>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row mt-4 ">
          <div className="flex flex-col gap-4 md:w-1/2 xs:w-full xs:gap-8 ">
            <div className="flex justify-center sm:justify-start">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game1"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Say Hello
                </h2>
              </a>
            </div>
            <div className="flex justify-center sm:justify-start">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game2"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Asking Questions
                </h2>
              </a>
            </div>
            <div className="flex justify-center sm:justify-start">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game3"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Add 2 Numbers
                </h2>
              </a>
            </div>
            <div className="flex justify-center sm:justify-start">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game4"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Greater Than/Less Than
                </h2>
              </a>
            </div>
            <div className="flex justify-center sm:justify-start">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game5"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Mad Lib
                </h2>
              </a>
            </div>
          </div>
          <div className="col-6 flex flex-col gap-4 md:w-1/2 xs:w-full xs:gap-8">
            <div className="flex justify-center sm:justify-end">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game6"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Odd or Even
                </h2>
              </a>
            </div>
            <div className="flex justify-center sm:justify-end">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game7"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Reverse It: Words
                </h2>
              </a>
            </div>
            <div className="flex justify-center sm:justify-end">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game8"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Reverse It: Numbers
                </h2>
              </a>
            </div>
            <div className="flex justify-center sm:justify-end">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game9"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Magic 8 Ball
                </h2>
              </a>
            </div>
            <div className="flex justify-center sm:justify-end">
              <a
                className="border-2 border-solid rounded-xl hover:bg-white"
                href="/game0"
              >
                <h2 className="p-2 hover:text-green-900 text-center">
                  Restaurant Picker
                </h2>
              </a>
            </div>
          </div>
        </div>
        {/* <PlayBtnComponent title={prompts[0][0]} description={prompts[0][1]} path={prompts[0][2]}/> */}
      </div>
    </div>
  );
}
export default App;
