import { getAuthData } from "@/store/features/auth/authSlice";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";

const Fotter = () => {
  const { user } = useSelector(getAuthData);

  return (
    <div className="w-full  bg-gray-200    ">
      <div className="p-10">
        <div className=" text-2xl flex flex-col sm:flex-row justify-start sm:items-center sm:justify-center gap-3">
          <FaFacebook className=" bg-black text-white rounded-md p-1 h-8 w-8" />
          <FaYoutube className=" bg-black text-white rounded-md p-1 h-8 w-8" />
          <FaTwitter className=" bg-black text-white rounded-md p-1 h-8 w-8" />
          <FaLinkedin className=" bg-black text-white rounded-md p-1 h-8 w-8" />
        </div>
        <div className="  font-semibold my-5 flex flex-col sm:flex-row justify-start sm:items-center sm:justify-center gap-3">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>News</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact us</Link>
          <Link href={"/"}>Our team</Link>
        </div>{" "}
        <div className="flex  sm:justify-center  items-center  gap-3">
          <Link
            href={user ? "/pricing" : "/user/login"}
            className="text-white bg-red-500 p-2 rounded-md  "
          >
            Suscribe
          </Link>
          <input
            type="email"
            className="  p-2 border outline-red-400 rounded-md"
          />
        </div>
      </div>{" "}
      <p className=" w-full p-2 text-sm text-center bg-gray-400">
        Copyright:@2024 ( the news bd website )
      </p>
    </div>
  );
};

export default Fotter;
