"use client";
import { getLogout } from "@/store/features/auth/authApiSlice";
import { getAuthData } from "@/store/features/auth/authSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  return (
    <div className="p-5 md:w-10/12">
      <div className="w-full px-2 py-4 rounded-md shadow-md my-4 text-cyan-400 text-sm  bg-white">
        All comments
      </div>
    </div>
  );
}
