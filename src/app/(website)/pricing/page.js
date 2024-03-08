"use client";
import { getAuthData } from "@/store/features/auth/authSlice";
import { getPayment } from "@/store/features/news/newsApiSlice";
import { getNewsData, setMethods } from "@/store/features/news/newsSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const { user } = useSelector(getAuthData);
  const router = useRouter();

  const { methods } = useSelector(getNewsData);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handlePayment = ({ type, amount }) => {
    dispatch(getPayment({ email: user?.email, type, amount, id: user?.id }));
  };
  const handleRedirect = (data) => {
    window.location.replace(data);
  };
  useEffect(() => {
    if (methods) {
      setShow(true);
    }
  }, [methods]);
  const handleCloseModal = () => {
    setShow(false);
    dispatch(setMethods());
  };
  !user?.isVerifyed && router.push("/user/otp");
  !user && router.push("/user/login");
  return (
    <div className="p-10 bg-cyan-50">
      <p className="text-2xl font-semibold text-gray-800 text-center">
        Pricing for news suscrivtion
      </p>
      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-8  py-10 w-11/12 md:w-8/12 mx-auto">
        {/* <===============single pricing ===================> */}
        <div className="border rounded-2xl overflow-hidden  bg-white shadow-md">
          <p className="bg-teal-400 text-white text-lg text-center p-2  ">
            Free
          </p>
          <div className="py-6">
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Ascess all the news
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Ascess all the categorys
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Get notifications for news
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Get Tips for get more news
            </div>
          </div>
          <hr />
          <button className="text-center w-full text-teal-400 font-bold text-2xl p-2">
            00 : BDT
          </button>
        </div>
        {/* <===============single pricing ===================> */}
        <div className="border rounded-2xl overflow-hidden  bg-white shadow-md">
          <p className="bg-blue-400 text-white text-lg text-center p-2   ">
            Standard
          </p>
          <div className="py-6">
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Ascess all the news
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Ascess all the categorys
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Get notifications for news
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Get Tips for get more news
            </div>
          </div>
          <hr />
          <button className="text-center w-full text-blue-400 font-bold text-2xl p-2">
            1000 : BDT
          </button>
          <button
            onClick={() => handlePayment({ type: "strandard", amount: "1000" })}
            className="bg-blue-400 text-white px-3 py-1 rounded-tr-xl"
          >
            Buy now
          </button>
        </div>
        {/* <===============single pricing ===================> */}
        <div className="border rounded-2xl overflow-hidden  bg-white shadow-md">
          <p className="bg-amber-500 text-white text-lg text-center p-2  ">
            Premium
          </p>
          <div className="py-6">
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Ascess all the news
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Ascess all the categorys
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Get notifications for news
            </div>
            <div className=" flex gap-2 items-center text-sm font-semibold p-2  text-gray-500">
              <FaStar className="text-yellow-500" /> Get Tips for get more news
            </div>
          </div>
          <hr />
          <button className="text-center w-full text-amber-400 font-bold text-2xl p-2">
            2000 : BDT
          </button>
          <button
            onClick={() => handlePayment({ type: "premium", amount: "2000" })}
            className="bg-amber-400 text-white px-3 py-1 rounded-tr-xl"
          >
            Buy now
          </button>
        </div>
      </div>

      {setShow && methods && (
        <div className="fixed top-[-20px] flex items-center justify-center left-0 w-full h-full bg-black bg-opacity-25">
          <div
            className=" absolute top-0 left-0 w-full h-full"
            onClick={handleCloseModal}
          ></div>
          <div className="  w-11/12 md:w-7/12 z-10   p-10 rounded-2xl bg-white grid grid-cols-6 lg:grid-cols-10 gap-5">
            {methods?.map((item, index) => (
              <div
                className="my-4 cursor-pointer"
                onClick={() => {
                  handleRedirect(item.redirectGatewayURL);
                }}
                key={index}
              >
                <Image
                  src={item.logo}
                  width={200}
                  height={200}
                  alt={item.name}
                />
              </div>
            ))}{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
