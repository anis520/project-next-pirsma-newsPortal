import React from "react";

function loading() {
  return (
    <div>
      <div className="w-screen h-screen  space-y-4 p-5 ">
        <div className="w-full h-2/6 bg-gray-200 animate-pulse rounded-md"></div>
        <div className="w-8/12 h-10 bg-gray-200 animate-pulse rounded-md"></div>
        <div className="w-10/12 h-6 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="h-2/6 w-full grid grid-cols-4 gap-4">
          <div className="bg-slate-300 rounded-md"></div>
          <div className="bg-slate-200 rounded-md"></div>
          <div className="bg-slate-300 rounded-md"></div>
          <div className="bg-slate-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default loading;
