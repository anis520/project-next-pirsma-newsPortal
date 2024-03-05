"use client";
import { getOtpByEmail } from "@/store/features/auth/authApiSlice";
import { getAuthData } from "@/store/features/auth/authSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Layout({ children }) {
  const { user } = useSelector(getAuthData);
  const path = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.isVerifyed) {
      dispatch(getOtpByEmail(user?.email));
    }
  }, [dispatch, user]);

  !user?.isVerifyed && router.push("/user/otp");
  !user && router.push("/user/login");

  return (
    <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen">
      <div className=" md:w-2/12 h-fit flex items-center gap-2 md:flex-col p-4  md:space-y-2 bg-cyan-400 text-white">
        <Link
          href={"/user/profile"}
          className={`w-6/12 md:w-full block p-2 hover:bg-white hover:text-cyan-400  duration-200  rounded-md ${
            path == "/user/profile" && "bg-white text-cyan-400  "
          }`}
        >
          Profile
        </Link>
        <Link
          href={"/user/profile/comments"}
          className={`w-6/12 md:w-full block p-2 hover:bg-white hover:text-cyan-400  duration-200  rounded-md ${
            path == "/user/profile/comments" && "bg-white text-cyan-400  "
          }`}
        >
          Comments
        </Link>
      </div>
      {children}
    </div>
  );
}
