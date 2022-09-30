import React from "react";

const Body = ({ reverse, title, text, img }) => {
  return (
    <div>
      {!reverse ? (
        <div className="flex justify-center w-full items-center bg-black border-b-8 border-neutral-800">
          <div className="flex flex-col text-white max-w-lg">
            <h2 className="font-sans text-4xl text-white font-bold tracking-normal no-underline pb-4">
              {title}
            </h2>
            <p className="text-white font-sans text-2xl font-normal tracking-normal no-underline pb-4">
              {text}
            </p>
          </div>
          <div>
            <img src={img} alt="tv"></img>
          </div>
        </div>
      ) : (
        <div className="flex justify-center w-full items-center bg-black border-b-8 border-neutral-800">
          <div>
            <img src={img} alt="tv"></img>
          </div>
          <div className="flex flex-col text-white max-w-lg">
            <h2 className="font-sans text-4xl text-white font-bold tracking-normal no-underline pb-4">
              {title}
            </h2>
            <p className="text-white font-sans text-2xl font-normal tracking-normal no-underline pb-4">
              {text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
