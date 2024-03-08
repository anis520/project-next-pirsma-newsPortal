"use client";
import { getAuthData } from "@/store/features/auth/authSlice";
import { getNewsData } from "@/store/features/news/newsSlice";
import Image from "next/image";
import Link from "next/link";
import { FaNewspaper, FaTable, FaUser, FaUserClock } from "react-icons/fa";
import { useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const { user } = useSelector(getAuthData);
  const { categorys, subscribers } = useSelector(getNewsData);
  return (
    <div className="p-5 w-10/12">
      <div className="text-gray-600 text-xl my-2 ">
        Welcome admin {user?.firstName}
      </div>
      <hr />
      <div className=" py-5 grid grid-cols-5 gap-3">
        <div className="flex flex-col items-center justify-center  gap-2 p-4 rounded-md hover:text-white hover:bg-blue-400 duration-300 cursor-pointer bg-blue-100 text-blue-500">
          <FaNewspaper size={35} />
          <p className="text-sm">Total news</p>
          <p className="font-semibold text-2xl">56</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-center  gap-2 p-4 rounded-md hover:text-white duration-300 cursor-pointer hover:bg-yellow-300 bg-yellow-50 text-yellow-400">
          <FaTable size={35} />
          <p className="text-sm">Total categorys</p>
          <p className="font-semibold text-2xl">{categorys?.length}</p>
        </div>
        <div className="flex flex-col items-center justify-center  gap-2 p-4 rounded-md hover:text-white duration-300 cursor-pointer hover:bg-cyan-400 bg-cyan-50 text-cyan-400">
          <FaUser size={35} />
          <p className="text-sm">Total users</p>
          <p className="font-semibold text-2xl">78</p>
        </div>
        <div className="flex flex-col items-center justify-center  gap-2 p-4 rounded-md hover:text-white duration-300 cursor-pointer hover:bg-green-400 bg-green-50 text-green-400">
          <FaUserClock size={35} />
          <p className="text-sm">Total suscribers</p>
          <p className="font-semibold text-2xl">{subscribers?.length}</p>
        </div>
      </div>
    </div>
  );
}
