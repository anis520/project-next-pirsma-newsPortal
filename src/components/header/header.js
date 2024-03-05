"use client";
import { getAuthData } from "@/store/features/auth/authSlice";
import { getTimeOfDay } from "@/utility/GetTimeText";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaClosedCaptioning,
  FaSearch,
  FaUserCircle,
  FaWindowClose,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";
import Loading from "../loading/Loading";

const Header = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const { user, loader } = useSelector(getAuthData);

  const handleProfleRoter = () => {
    setNav(false);
    router.push(user ? "/user/profile" : "/user/login");
  };
  return (
    <div>
      {" "}
      {/* header  */}
      <div className="w-full  p-5 shadow-md  flex items-center sm:items-end   ">
        <h1 className="text-2xl   md:text-3xl font-semibold ">
          <Link href={"/"}>
            BDNews
            <span className="font-normal text-xl md:text-2xl text-cyan-400">
              .com
            </span>
          </Link>
        </h1>
        <div className="h-10 mx-3 rounded-md w-1 bg-gray-600 "></div>
        <div className=" ms-5">
          <p className=" md:text-lg font-semibold ">Good {getTimeOfDay()}</p>
          <p className="text-sm text-gray-500 hidden sm:block">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "We produce food for Mice",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We produce food for Hamsters",
                1000,
                "We produce food for Guinea Pigs",
                1000,
                "We produce food for Chinchillas",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "auto", display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="ms-auto    flex gap-3">
          <FaBars
            onClick={() => setNav(!nav)}
            className="ms-auto sm:hidden bg-white p-1 rounded-sm cursor-pointer w-8 h-8 text-black"
          />

          <FaSearch className=" hidden sm:block bg-slate-100 w-7 h-7  p-1 rounded-full cursor-pointer hover:scale-110 duration-300" />
          <Link href={user ? "/user/profile" : "/user/login"}>
            <FaUserCircle className=" hidden sm:block bg-slate-100 w-7 h-7  p-1 border rounded-full cursor-pointer hover:scale-110 duration-300" />
          </Link>
        </div>
      </div>
      {/* <=================navbar / mobile menu ===========================> */}
      {nav && (
        <div className="fixed top-0 left-0 z-30 flex items-center justify-end bg-white bg-opacity-35 backdrop-blur-sm sm:hidden w-screen h-screen">
          <div
            onClick={() => setNav(false)}
            className="absolute w-full h-full  "
          ></div>
          <div className="w-9/12 h-4/6 px-5 py-10 bg-white rounded-md border relative">
            <FaWindowClose
              onClick={() => setNav(false)}
              className="absolute top-1 right-1 bg-red-500 text-white h-7 w-7  "
            />

            <button
              onClick={handleProfleRoter}
              className="p-1 font-semibold bg-cyan-400  text-white w-full "
            >
              Account
            </button>
          </div>
        </div>
      )}
      {/* ===============loading================ */}
      {loader && <Loading />}
    </div>
  );
};

export default Header;
