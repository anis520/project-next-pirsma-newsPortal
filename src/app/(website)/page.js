"use client";
import { getAuthData } from "@/store/features/auth/authSlice";
import { getAllCategorys } from "@/store/features/news/newsApiSlice";
import { getNewsData } from "@/store/features/news/newsSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  FaBars,
  FaChevronCircleRight,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const { categorys } = useSelector(getNewsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategorys());
  }, [dispatch]);
  return (
    <>
      {/* navbar  */}
      <div className="w-full py-2 px-5 bg-cyan-300 flex items-center  text-white gap-3">
        {" "}
        {categorys?.map((item, index) => (
          <p
            key={index}
            className="hover:bg-white  py-1  hover:text-cyan-400 rounded-md px-3 duration-500 cursor-pointer"
          >
            {item.name}
          </p>
        ))}
      </div>
      {/* hero */}{" "}
      <div className="flex items-center sticky top-0 left-0 ">
        <span className="bg-red-500 py-1 px-2 text-white font-semibold">
          Headline
        </span>
        <marquee className="bg-slate-200 p-1 text-sm ">
          {" "}
          Also, there was a legal notice, demanding a judicial commission to
          investigate the incident and Tk 50m compensation for each of the
          victims
        </marquee>
      </div>
      <div className="px-5">
        <Image
          className="w-screen h-[350px] object-cover"
          src={require("@/assets/heroimage.webp")}
          width={440}
          height={425}
          alt="banner"
        />
        <h2 className=" text-2xl md:text-4xl font-bold py-4">
          Talabian govment is successfully in there mission{" "}
        </h2>
        <p className="font-semibold font-serif text-gray-600">
          Date : 11/1/2028
        </p>
        <button className="text-sm font-serif bg-cyan-400 text-white px-2 py-1 rounded-md my-3">
          See more
        </button>
      </div>
      <hr />
      <div className="p-5">
        <h3 className="text-lg font-semibold">Latest news </h3>
        <div className="grid  grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-5 py-5">
          {/* single */}
          <div className="group relative  rounded-md overflow-hidden">
            <Image
              src={require("@/assets/heroimage.webp")}
              width={200}
              height={200}
              alt="latest"
              className="w-full "
            />
            <Link href={"/posts"}>
              <div className="group-hover:min-h-full duration-500 min-h-0 absolute bottom-0 left-0 w-full bg-cyan-400 p-2 bg-opacity-80 text-white text-center">
                all foods
                <p className="duration-500 group-hover:block hidden text-sm mt-2">
                  {" "}
                  lorem more information
                </p>
                <FaChevronCircleRight className="animate-ping hover:animate-none absolute bottom-2 right-2 cursor-pointer hover:scale-110 duration-500 group-hover:block hidden text-4xl mx-auto" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
