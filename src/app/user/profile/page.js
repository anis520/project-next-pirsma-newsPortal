"use client";
import { getLogout } from "@/store/features/auth/authApiSlice";
import { getAuthData } from "@/store/features/auth/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector(getAuthData);
  const logoutHandler = () => {
    dispatch(getLogout());
    router.push("/");
  };

  !user && router.push("/user/login");

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

      <div className="w-full my-5 flex gap-3  ">
        <div className="p-5 rounded-md shadow-md w-7/12 bg-white"></div>
        <div className="p-5 rounded-md shadow-md w-5/12 bg-white"></div>
      </div>
    </div>
  );
}
