import React from "react";
import { MdError, MdFileDownloadDone, MdInfo } from "react-icons/md";

const Page = () => {
  return (
    <div className="flex items-center justify-center w-full p-10">
      <div className="bg-white rounded-2xl overflow-hidden  w-11/12 shadow-sm   md:w-7/12  border ">
        <div className="w-full text-2xl flex flex-col items-center justify-center gap-3 py-8 px-5 bg-red-400 text-white">
          <MdInfo className="text-4xl bg-white text-red-400  rounded-full" />
          Cancel
        </div>
        <div className="text-red-400 text-center py-10">
          Cancel purched our suscription !
        </div>
      </div>
    </div>
  );
};

export default Page;
