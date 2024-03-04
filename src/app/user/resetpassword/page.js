import Image from "next/image";
import loginImage from "../../../../public/forgotpass.png";
import Link from "next/link";
export default function Page() {
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
        <p className="text-2xl font-semibold">Reset your password here</p>
        <div className="mt-3">
          <label className="cursor-pointer w-full text-sm" htmlFor="password">
            Password :
          </label>
          <input
            className="w-full border outline-none p-1   "
            id="password"
            type="passoword"
          />
        </div>
        <div className="my-3">
          <label
            className="cursor-pointer w-full text-sm"
            htmlFor="conpassword"
          >
            Confrom password :
          </label>
          <input
            className="w-full border outline-none p-1   "
            id="conpassword"
            type="passoword"
          />
        </div>

        <button className="w-full   rounded-sm bg-cyan-400  text-white text-center font-semibold p-1">
          Update
        </button>
      </div>
    </div>
  );
}
