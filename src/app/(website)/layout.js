"use client";

import Fotter from "@/components/fotter/Fotter";
import Header from "@/components/header/header";
import NextTopLoader from "nextjs-toploader";

import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <div>
      {" "}
      <NextTopLoader
        color="#35B7F1"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <Toaster /> <Header />
      {children}
      <Fotter />
    </div>
  );
}
