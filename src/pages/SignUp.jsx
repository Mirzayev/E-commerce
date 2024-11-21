import { Button } from "antd";
import basket from "../assets/images/registr.png";

export default function SignUp() {
  return (
    <div className="mt-[60px] flex flex-col lg:flex-row gap-10 lg:gap-[130px] items-center px-3">
      <img
        src={basket}
        className="w-full max-w-[500px] lg:max-w-[805px] object-cover"
        alt=""
      />
      <div className="w-full max-w-[400px] px-4 lg:px-0">
        <h2 className="text-[24px] lg:text-[36px] font-semibold text-center lg:text-left">
          Create an account
        </h2>
        <p className="mt-4 lg:mt-6 mb-6 lg:mb-12 text-center lg:text-left">
          Enter your details below
        </p>
        <input
          type="text"
          placeholder="Name"
          className="outline-none border-b border-slate-300 block w-full mb-6"
        />
        <input
          type="text"
          placeholder="Email or phone number"
          className="outline-none border-b border-slate-300 block w-full mb-6"
        />
        <input
          type="text"
          placeholder="Password"
          className="outline-none border-b border-slate-300 block w-full mb-6"
        />
        <Button className="text-white bg-red-500 py-4 w-full mt-6">
          Create Account
        </Button>
        <Button className="w-full mt-4">Sign up with Google</Button>
        <p className="mt-5 text-center lg:text-left">
          Already have an account?{" "}
          <a
            className="hover:border-b border-blue-500 text-blue-500 font-semibold ml-2"
            href=""
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
