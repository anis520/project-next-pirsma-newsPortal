import React from "react";
import { MdFileDownloadDone } from "react-icons/md";

const Page = () => {
  return (
    <div className="flex items-center justify-center w-full p-10">
      <div className="bg-white rounded-2xl overflow-hidden  w-11/12 shadow-sm   md:w-7/12  border ">
        <div className="w-full flex  text-2xl flex-col items-center justify-center gap-3 py-8 px-5 bg-green-400 text-white">
          <MdFileDownloadDone className="text-4xl bg-white text-green-400  rounded-full" />
          Success
        </div>
        <div className="text-green-400 text-center py-10">
          Congralution you are successfully purched our suscription
        </div>
      </div>
    </div>
  );
};

export default Page;
