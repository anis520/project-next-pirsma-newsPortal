import Link from "next/link";

export default function layout({ children }) {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <div className="w-2/12 h-fit p-2 bg-cyan-400 text-white">
        <Link
          href={"/user/profile"}
          className="w-full block p-2 hover:bg-white hover:text-cyan-400  duration-200  rounded-md"
        >
          Profile
        </Link>
      </div>
      {children}
    </div>
  );
}
