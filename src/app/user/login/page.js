"use client";
import Image from "next/image";
import loginImage from "../../../../public/register.png";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useDispatch, useSelector } from "react-redux";
import { createUser, userLogin } from "@/store/features/auth/authApiSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAuthData, setMessageEmpty } from "@/store/features/auth/authSlice";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();

  const [input, setInput] = useState({
    email: null,
    password: null,
  });
  const dispatch = useDispatch();
  const { error, message, user } = useSelector(getAuthData);
  const handleLogin = async () => {
    if (!input.email | !input.password) {
      toast.error("All fields are requerd");
    } else {
      dispatch(userLogin(input));
    }
  };
  useEffect(() => {
    if (message) {
      setInput({ email: "", password: "" });
      toast.success(message);
      router.push("/user/profile");
    }
    if (error) {
      toast.error(error);
    }
    dispatch(setMessageEmpty());
  }, [error, message, dispatch, router]);

  user && router.push("/user/profile");

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
        <p className="text-2xl font-semibold">Login here</p>

        <div className="mt-3">
          <label className="cursor-pointer w-full text-sm" htmlFor="email">
            Email :
          </label>
          <input
            className="w-full border outline-none p-1   "
            id="email"
            type="email"
            name="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </div>

        <div className="mt-3">
          <label className="cursor-pointer w-full  text-sm" htmlFor="password">
            Password :
          </label>
          <input
            className="w-full border outline-none p-1 "
            id="password"
            type="password"
            value={input.password}
            name="password"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </div>
        <div className="my-3  text-cyan-400 text-sm font-semibold flex justify-between">
          <Link href={"/user/register"}>Dont have an account ?</Link>
          <Link href={"/user/verifyemail"}>Forgot password ?</Link>
        </div>

        <button
          onClick={handleLogin}
          className="w-full   rounded-sm bg-cyan-400  text-white text-center font-semibold p-1"
        >
          login
        </button>
      </div>
    </div>
  );
}
