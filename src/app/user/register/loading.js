import Image from "next/image";
import Link from "next/link";
import React from "react";
import loginImage from "../../../../public/register.png";

function loading() {
  return (
    <div className="  sm:w-10/12 md:w-8/12 border mx-auto my-5  flex flex-col md:flex-row justify-between p-5">
      <Image
        src={loginImage}
        width={350}
        height={350}
        className="md:w-6/12"
        alt="login"
      />
      <div className="md:w-6/12">
        <p className="text-2xl font-semibold">Register here</p>
        <div className="mt-3">
          <label className="cursor-pointer w-full text-sm" htmlFor="name">
            Name :
          </label>
          <p className="w-full p-4 rounded-sm animate-pulse  bg-gray-200"></p>
        </div>
        <div className="mt-3">
          <label className="cursor-pointer w-full text-sm" htmlFor="email">
            Email :
          </label>
          <p className="w-full p-4 rounded-sm animate-pulse  bg-gray-200"></p>
        </div>

        <div className="mt-3">
          <label className="cursor-pointer w-full  text-sm" htmlFor="password">
            Password :
          </label>
          <p className="w-full p-4 rounded-sm animate-pulse  bg-gray-200"></p>
        </div>
        <Link
          className="my-3 block text-cyan-400 text-sm font-semibold"
          href={"/user/login"}
        >
          Have an account ?
        </Link>
        <button className="w-full rounded-sm bg-cyan-400  text-white text-center font-semibold p-1">
          register
        </button>
      </div>
    </div>
  );
}

export default loading;
