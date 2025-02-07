import "./App.css";


function App() {
  return (
    <div className="bg-[url(/src/assets/media/AllForOneWP.jpg)] min-h-screen bg-no-repeat bg-fixed bg-cover pt-20">
      <div className="container mx-auto">
      <div className="flex xs:justify-center md:justify-end">
        <h1 className="w-fit">All For One</h1>
      </div>
        <div className="row flex xs:justify-center md:justify-start">
          <h3>Select a game mode :</h3>
        </div>
        <div className="flex row md:gap-0 md:flex-row xs:gap-8 xs:flex-col mt-4 ">
          <div className="flex flex-col gap-4 md:w-1/2 xs:w-full xs:gap-8 ">
            <div className="flex xs:justify-center md:justify-start">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game1">
                <h2 className="p-2 hover:text-green-900 text-center">Say Hello</h2>
              </a>
            </div>
            <div className="flex xs:justify-center md:justify-start">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game2">
                <h2 className="p-2 hover:text-green-900 text-center">Asking Questions</h2>
              </a>
            </div>
            <div className="flex xs:justify-center md:justify-start">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game3">
                <h2 className="p-2 hover:text-green-900 text-center">Add 2 Numbers</h2>
              </a>
            </div>
            <div className="flex xs:justify-center md:justify-start">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game4">
                <h2 className="p-2 hover:text-green-900 text-center">Greater Than/Less Than</h2>
              </a>
            </div>
            <div className="flex xs:justify-center md:justify-start">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game5">
                <h2 className="p-2 hover:text-green-900 text-center">Mad Lib</h2>
              </a>
            </div>
          </div>
          <div className="col-6 flex flex-col gap-4 md:w-1/2 xs:w-full xs:gap-8">
            <div className="flex xs:justify-center md:justify-end">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game6">
                <h2 className="p-2 hover:text-green-900 text-center">Odd or Even</h2>
              </a>
            </div>
            <div className="flex xs:justify-center md:justify-end">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game7">
                <h2 className="p-2 hover:text-green-900 text-center">Reverse It: Words</h2>
              </a>
            </div>
            <div className="flex xs:justify-center md:justify-end">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game8">
                <h2 className="p-2 hover:text-green-900 text-center">Reverse It: Numbers</h2>
              </a>
            </div>
            <div className="flex xs:justify-center md:justify-end">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game9">
                <h2 className="p-2 hover:text-green-900 text-center">Magic 8 Ball</h2>
              </a>
            </div>
            <div className="flex xs:justify-center md:justify-end">
              <a className="border-2 border-solid rounded-xl hover:bg-white" href="/game0">
                <h2 className="p-2 hover:text-green-900 text-center">Restaurant Picker</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;