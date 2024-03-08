"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "@/store/features/auth/authSlice";
import {
  getLoggedInUser,
  getOtpByEmail,
  getVerifyOtp,
} from "@/store/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
export default function Page() {
  const { user, message, error } = useSelector(getAuthData);
  const dispatch = useDispatch();

  const router = useRouter();

  const [timeLeft, setTimeLeft] = useState(15);
  const [otp, setOtp] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSendOtp = () => {
    dispatch(
      getOtpByEmail(
        user ? user.email : JSON.parse(localStorage.getItem("email"))
      )
    );
    setTimeLeft(15);
  };
  const handleVerifyOtp = () => {
    if (otp) {
      dispatch(
        getVerifyOtp({
          email: user ? user.email : JSON.parse(localStorage.getItem("email")),
          otp: otp,
        })
      );
    } else {
      toast.error("Invalid otp");
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      if (localStorage.getItem("email")) {
        localStorage.removeItem("email");
        dispatch(getLoggedInUser());

        router.push("/user/login");
      } else {
        router.push("/user/profile");
      }
    }
    if (error) {
      toast.error(error);
    }
    dispatch(setMessageEmpty());
  }, [error, message, dispatch, router]);

  user?.isVerifyed && router.push("/user/profile");

  return (
    <div className="  sm:w-10/12 md:w-8/12 border mx-auto my-5  flex flex-col md:flex-row justify-between p-5">
      <Image
        src={require("@/assets/verifyOtp.png")}
        width={350}
        height={350}
        className="md:w-6/12"
        alt="login"
      />
      <div className="md:w-6/12">
        <p className="text-2xl font-semibold">Otp here</p>
        <div
          style={{ width: `${timeLeft - 1}0%` }}
          className={`h-2 max-w-full   duration-1000 ease-linear rounded-sm my-2 ${
            timeLeft > 6 ? "bg-green-400" : "bg-red-500"
          }`}
        ></div>
        <div className="my-3">
          <label className="cursor-pointer w-full text-sm" htmlFor="code">
            Code :{timeLeft}
          </label>
          <input
            disabled={timeLeft == 0}
            className={`w-full border outline-none p-1 ${
              timeLeft == 0 && "border-2 border-red-400"
            } `}
            id="code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            type="text"
          />
        </div>
        {timeLeft == 0 ? (
          <button
            onClick={handleSendOtp}
            className="w-full   rounded-sm bg-cyan-400  text-white text-center font-semibold p-1"
          >
            Send Again
          </button>
        ) : (
          <button
            onClick={handleVerifyOtp}
            className="w-full   rounded-sm bg-cyan-400  text-white text-center font-semibold p-1"
          >
            Verify
          </button>
        )}
      </div>
    </div>
  );
}
