import { Outlet } from "react-router-dom";
import apple from "../assets/images/apple_logo.png";
import phone from "../assets/images/banner_2.png";

export default function Banner() {
  return (
    <div className="max-w-[1440px] mx-auto mt-4 px-5">
      <div className="flex items-center justify-between gap-10">
        <div className="md:border-r-2 md:px-4 md:block hidden ">
          <div className="flex items-center w-full justify-between my-2 py-2 hover:bg-slate-100 px-3 rounded-md ">
            <p className="mr-20 ">Woman’s Fashion</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="md:flex items-center w-full justify-between my-2  py-2 hover:bg-slate-100 px-3 rounded-md ">
            <p className="mr-20 ">Men's Fashion</p>
            <i class="fa-solid fa-chevron-right "></i>
          </div>
          
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md ">Electronics</p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md ">Home & Lifestyle</p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md ">Medicine</p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md ">Sports & Outdoor</p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md ">Baby’s & Toys</p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md ">Groceries & Pets</p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md ">Health & Beauty</p>
        </div>
        <img className=" lg:w-full object-cover rounded-lg" src={phone} alt="" />
      </div>

      <div className="mt-40">
      <Outlet/>
      </div>
    </div>
  );
}
