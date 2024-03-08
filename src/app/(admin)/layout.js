"use client";
import Link from "next/link";
import { RiDashboard3Fill } from "react-icons/ri";
import { IoNewspaper } from "react-icons/io5";
import {
  TbAdjustmentsMinus,
  TbCategory2,
  TbHome,
  TbUser,
} from "react-icons/tb";
import { MdAdminPanelSettings } from "react-icons/md";
import { usePathname } from "next/navigation";
import cn from "@/utility/cn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAllCategorys,
  getsubscriber,
} from "@/store/features/news/newsApiSlice";

export default function Layout({ children }) {
  const path = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategorys());
    dispatch(getsubscriber());
  }, [dispatch]);
  return (
    <div className=" flex">
      <div className="w-2/12 p-4 min-h-screen bg-gray-50">
        <Link
          href={"/admin-panel"}
          className="flex justify-center rounded-md items-center gap-3 p-2 font-semibold  text-cyan-400 "
        >
          <RiDashboard3Fill size={36} />
          BDnews-admin
        </Link>

        <div className=" flex flex-col gap-3 my-5">
          <Link
            href={"#"}
            className="flex items-center gap-4 p-2 bg-cyan-400 text-white hover:text-cyan-400 border-transparent border hover:border-cyan-400 hover:bg-transparent duration-300 rounded-md"
          >
            {" "}
            <IoNewspaper /> News
          </Link>
          <Link
            className={cn(
              `flex items-center gap-4 p-2 bg-cyan-400 text-white hover:text-cyan-400 border-transparent border hover:border-cyan-400 hover:bg-transparent duration-300 rounded-md `,
              {
                "bg-transparent text-cyan-400 border-cyan-400 ":
                  path == "/admin-panel/categorys",
              }
            )}
            href={"/admin-panel/categorys"}
          >
            <TbCategory2 />
            Categorys
          </Link>
          <Link
            className="flex items-center gap-4 p-2 bg-cyan-400 text-white hover:text-cyan-400 border-transparent border hover:border-cyan-400 hover:bg-transparent duration-300 rounded-md"
            href={"#"}
          >
            <MdAdminPanelSettings />
            Subscribers
          </Link>
          <Link
            className="flex items-center gap-4 p-2 bg-cyan-400 text-white hover:text-cyan-400 border-transparent border hover:border-cyan-400 hover:bg-transparent duration-300 rounded-md"
            href={"#"}
          >
            <TbUser />
            Users
          </Link>
          <Link
            className="flex items-center gap-4 p-2 bg-cyan-400 text-white hover:text-cyan-400 border-transparent border hover:border-cyan-400 hover:bg-transparent duration-300 rounded-md"
            href={"/"}
          >
            <TbHome />
            Home
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
}
