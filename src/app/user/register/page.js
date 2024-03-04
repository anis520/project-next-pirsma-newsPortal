"use client";
import Image from "next/image";
import loginImage from "../../../../public/register.png";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/store/features/auth/authApiSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAuthData, setMessageEmpty } from "@/store/features/auth/authSlice";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();

  const [input, setInput] = useState({
    email: null,
    password: null,
    firstName: null,
    lastName: "",
    mobile: "",
  });
  const dispatch = useDispatch();
  const { error, message, user } = useSelector(getAuthData);
  const handleRegister = async () => {
    if (!input.email | !input.firstName | !input.password) {
      toast.error("All fields are requerd");
    } else {
      dispatch(createUser(input));
    }
  };
  useEffect(() => {
    if (message) {
      setInput({ firstName: "", email: "", password: "" });
      toast.success(message);
      router.push("/user/otp");
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
        <p className="text-2xl font-semibold">Register here</p>
        <div className="mt-3">
          <label className="cursor-pointer w-full text-sm" htmlFor="name">
            Name :
          </label>
          <input
            className="w-full border outline-none p-1   "
            id="name"
            type="text"
            name="name"
            value={input.firstName}
            onChange={(e) => setInput({ ...input, firstName: e.target.value })}
          />
        </div>
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
        <Link
          className="my-3 block text-cyan-400 text-sm font-semibold"
          href={"/user/login"}
        >
          Have an account ?
        </Link>
        <button
          onClick={handleRegister}
          className="w-full rounded-sm bg-cyan-400  text-white text-center font-semibold p-1"
        >
          register
        </button>
      </div>
    </div>
  );
}
