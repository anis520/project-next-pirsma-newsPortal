"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2500);
  }, [router]);

  return (
    <div className="w-full p-20 flex flex-col items-center justify-center gap-4  ">
      <h2 className="text-red-500 text-6xl font-semibold">404</h2>
      <p className="text-lg">Could not find requested resource</p>
      <Link
        className="text-white bg-cyan-400 px-4 py-1 rounded-md font-semibold"
        href="/"
      >
        Return Home
      </Link>
    </div>
  );
}
