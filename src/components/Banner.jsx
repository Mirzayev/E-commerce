import apple from "../assets/images/apple_logo.png";
import phone from "../assets/images/banner_2.png";

export default function Banner() {
  return (
    <div className="max-w-[1440px] mx-auto mt-4">
      <div className="flex items-center justify-between gap-10">
        <div className="md:border-r-2 md:px-4 md:block hidden ">
          <div className="flex items-center w-full justify-between my-2">
            <p className="mr-20 ">Woman’s Fashion</p>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="md:flex items-center w-full justify-between my-2 ">
            <p className="mr-20 ">Men's Fashion</p>
            <i class="fa-solid fa-chevron-right "></i>
          </div>
          
          <p className="cursor-pointer my-2">Electronics</p>
          <p className="cursor-pointer my-2">Home & Lifestyle</p>
          <p className="cursor-pointer my-2">Medicine</p>
          <p className="cursor-pointer my-2">Sports & Outdoor</p>
          <p className="cursor-pointer my-2">Baby’s & Toys</p>
          <p className="cursor-pointer my-2">Groceries & Pets</p>
          <p className="cursor-pointer my-2">Health & Beauty</p>
        </div>
        <img className=" lg:w-full object-cover rounded-lg" src={phone} alt="" />
      </div>
    </div>
  );
}
