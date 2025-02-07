import React from "react";

const PlayBtnComponent = ({ title, description, path }) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-fit gap-2 flex-col justify-center">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div className="flex justify-center">
          <a
            className="border-2 border-solid rounded-xl hover:bg-white w-fit"
            href={path}
          >
            <h2 className="p-2 hover:text-green-900 text-center">Play</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayBtnComponent;
