import Image from "next/image";
import loginImage from "../../../../public/email.png";
import Link from "next/link";
function loading() {
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
        <p className="text-2xl font-semibold">Login here</p>
        <div className="mt-3">
          <label className="cursor-pointer w-full text-sm" htmlFor="email">
            Email :
          </label>
          <p className="w-full p-4 rounded-sm animate-pulse  bg-gray-200"></p>
        </div>
        <div className="mt-3">
          <label className="cursor-pointer w-full  text-sm" htmlFor="password">
            Password :
          </label>
          <p className="w-full p-4 rounded-sm animate-pulse  bg-gray-200"></p>
        </div>
        <Link
          className="my-3 block text-cyan-400 text-sm font-semibold"
          href={"/user/register"}
        >
          Dont have an account ?
        </Link>
        <button className="w-full rounded-sm bg-cyan-400  text-white text-center font-semibold p-1">
          login
        </button>
      </div>
    </div>
  );
}
export default loading;
