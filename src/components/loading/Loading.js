import React from "react";

const Loading = () => {
  return (
    <div className=" fixed top-0 left-0 w-full h-full backdrop-blur-md bg-opacity-70 bg-white z-30 flex items-center justify-center">
      <div className="text-2xl md:text-4xl font-bold">
        BDNews
        <span className="text-cyan-400 md:text-2xl font-normal">.com</span>
      </div>
    </div>
  );
};

export default Loading;
