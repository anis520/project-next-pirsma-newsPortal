"use client";
import { getLogout } from "@/store/features/auth/authApiSlice";
import { getAuthData } from "@/store/features/auth/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaMarker, FaMars, FaSave, FaUpload } from "react-icons/fa";

export default function Page() {
  const { user } = useSelector(getAuthData);

  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = () => {
    dispatch(getLogout());
    router.push("/");
  };

  return (
    <div className="p-5 w-10/12">
      <div className="flex w-full justify-between">
        <h1 className="font-semibold text-2xl text-gray-600">Profile info</h1>
        <button
          onClick={logoutHandler}
          className="py-1   px-3 bg-slate-300  rounded-md font-semibold"
        >
          logout
        </button>
      </div>
      <div className="w-full px-2 py-4 rounded-md shadow-md my-4 text-cyan-400 text-sm  bg-white">
        Account Details
      </div>
      <div className="w-full my-5 flex gap-3  ">
        <div className="p-5 rounded-md shadow-md w-7/12 bg-white">
          <Image
            src={require("../../../../public/users-vector-icon-png_260862.jpg")}
            width={250}
            height={250}
            alt="user-avatar"
            className="w-3/12 mx-auto rounded-full"
          />
          <button className=" flex justify-center gap-3 items-center p-2 my-2 rounded-md text-center w-full bg-slate-200 text-gray-700 font-semibold">
            Upload Photo <FaUpload />
          </button>

          <div className="mt-3 space-y-2">
            <label className="cursor-pointer w-full " htmlFor="fristName">
              First Name :
            </label>
            <input
              className="w-full border outline-cyan-300 p-2  text-lg font-semibold  rounded-md "
              id="firstName"
              type="text"
              name="firstName"
              value={user?.firstName}
            />
          </div>
          <div className="mt-3 space-y-2">
            <label className="cursor-pointer w-full " htmlFor="lastName">
              Last Name :
            </label>
            <input
              className="w-full border outline-cyan-300 p-2  text-lg font-semibold   rounded-md"
              id="lastName"
              type="text"
              name="lastName"
              value={user?.lastName}
            />
          </div>
          <div className="mt-3 space-y-2">
            <label className="cursor-pointer w-full " htmlFor="email">
              Email :
            </label>
            <input
              className="w-full opacity-70 cursor-not-allowed border outline-cyan-300 p-2  text-lg font-semibold   rounded-md"
              id="email"
              type="email"
              name="email"
              value={user?.email}
              disabled
            />
          </div>
          <button className=" flex justify-center gap-3 items-center   p-2 my-3 rounded-md text-center w-full bg-cyan-400 text-white  font-semibold">
            Update <FaEdit />
          </button>
        </div>
        <div className="p-5 rounded-md shadow-md w-5/12 h-fit bg-white">
          <p className="font-bold text-gray-800 text-lg">
            Change your password
          </p>
          <div className="mt-3 space-y-2">
            <label className="cursor-pointer w-full " htmlFor="password">
              Password :
            </label>
            <input
              className="w-full border outline-cyan-300 p-2  text-lg font-semibold   rounded-md"
              id="password"
              type="password"
              name="password"
            />
          </div>
          <div className="mt-3 space-y-2">
            <label className="cursor-pointer w-full " htmlFor="conpassword">
              Confrom Password :
            </label>
            <input
              className="w-full border outline-cyan-300 p-2  text-lg font-semibold   rounded-md"
              id="conpassword"
              type="password"
              name="password"
            />
          </div>
          <button className=" flex justify-center gap-3 items-center   p-2 my-3 rounded-md text-center w-full bg-cyan-400 text-white  font-semibold">
            Update <FaEdit />
          </button>
        </div>
      </div>
    </div>
  );
}
