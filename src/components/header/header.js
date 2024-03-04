"use client";
import { getAuthData } from "@/store/features/auth/authSlice";
import Link from "next/link";
import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const { user } = useSelector(getAuthData);

  return (
    <div>
      {" "}
      {/* header  */}
      <div className="w-full  p-5 shadow-md  flex items-end   ">
        <h1 className="text-3xl font-semibold ">
          <Link href={"/"}>
            BDNews
            <span className="font-normal text-2xl text-cyan-400">.com</span>
          </Link>
        </h1>
        <div className="h-10 mx-3 rounded-md w-1 bg-gray-600 "></div>
        <div className=" ms-5">
          <p className="text-lg font-semibold ">Good Morning</p>
          <p className="text-sm text-gray-500">
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
          <FaSearch className="bg-slate-100 w-7 h-7  p-1 rounded-full cursor-pointer hover:scale-110 duration-300" />
          <Link href={user ? "/user/profile" : "/user/login"}>
            <FaUserCircle className="bg-slate-100 w-7 h-7  p-1 border rounded-full cursor-pointer hover:scale-110 duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
