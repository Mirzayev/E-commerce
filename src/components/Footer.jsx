import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
      <div className="relative bg-black text-white mt-10 w-full px-5 py-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-[24px] font-bold">Exclusive</h2>
            <p className="text-[20px] my-6 cursor-pointer">Subscribe</p>
            <p>Get 10% off your first order</p>
            <div className="border border-white flex items-center text-white py-2 px-2 rounded-md mt-4">
              <input
                className="w-full h-full bg-transparent outline-none"
                placeholder="Enter your email"
                type="text"
              />
              <i className="fa-brands fa-telegram cursor-pointer"></i>
            </div>
          </div>
  
          <div>
            <h3 className="text-[20px] cursor-pointer">Support</h3>
            <p className="mt-6 cursor-pointer max-w-[175px]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="my-4 cursor-pointer">exclusive@gmail.com</p>
            <p className="cursor-pointer">+88015-88888-9999</p>
          </div>
  
         <div className="flex items-start w-full justify-between px-3">

         <div className={"flex flex-col "}>
            <h3 className="text-[20px] ">Account</h3>
            <NavLink to={"my-account"} className="mt-6 cursor-pointer block  hover:text-slate-300 transition-all">
              My Account
            </NavLink>
            <NavLink to={"signUp"} className="my-4  cursor-pointer hover:text-slate-300 transition-all">
              Login / Register
            </NavLink>
            <NavLink to={"cart"} className="cursor-pointer hover:text-slate-300 transition-all">
              Cart
            </NavLink>
            <NavLink to={"wishlist"} className="my-4 cursor-pointer hover:text-slate-300 transition-all">
              Wishlist
            </NavLink>
            <NavLink to={"/"} className="cursor-pointer hover:text-slate-300 transition-all">
              Shop
            </NavLink>
          </div>
  
          <div>
            <h3 className="text-[20px] cursor-pointer hover:text-slate-300 transition-all">
              Quick Link
            </h3>
            <p className="mt-6 cursor-pointer hover:text-slate-300 transition-all">
              Privacy Policy
            </p>
            <p className="my-4 cursor-pointer hover:text-slate-300 transition-all">
              Terms Of Use
            </p>
            <p className="cursor-pointer hover:text-slate-300 transition-all">
              FAQ
            </p>
            <p className="my-4 cursor-pointer hover:text-slate-300 transition-all">
              Contact
            </p>
          </div>
         </div>
        </div>
      </div>
    );
  }
  