"use client";
import Image from "next/image";
import loginImage from "../../../../public/verifyOtp.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Page() {
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    toast.success("submit you otp");
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 900);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-8/12 border mx-auto my-5  flex justify-between p-5">
      <Image
        src={loginImage}
        width={350}
        height={350}
        className="w-6/12"
        alt="login"
      />
      <div className="w-6/12">
        <p className="text-2xl font-semibold">Otp here</p>
        <div className="my-3">
          <label className="cursor-pointer w-full text-sm" htmlFor="code">
            Code :{timeLeft}
          </label>
          <input
            className="w-full border outline-none p-1   "
            id="code"
            type="text"
          />
        </div>

        <button className="w-full   rounded-sm bg-cyan-400  text-white text-center font-semibold p-1">
          verify
        </button>
      </div>
    </div>
  );
}
