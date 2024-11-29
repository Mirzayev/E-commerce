import { Outlet } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import kalonka from "../assets/images/kalonka.png";
import plesteshin from "../assets/images/plesteshin.png";
import car from "../assets/images/car.png";
import { Button } from "antd";

export default function Banner() {
  const products = [
    {
      id: 1,
      title: "iPhone 14 Series",
      discount: "Up to 10% off Voucher",
      image: kalonka,
    },
    {
      id: 2,
      title: "Explore  smartphone!",
      discount: "Up to 25% off Voucher",
      image: plesteshin,
    },
    {
      id: 3,
      title: "Stylish  for everyone!",
      discount: "Up to 50% off Voucher",
      image: car,
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto mt-4 px-5">
      <div className="flex items-center justify-between gap-10">
        <div className="md:border-r-2 md:px-4 md:block hidden">
          <div className="flex items-center w-full justify-between my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            <p className="mr-20">Woman’s Fashion</p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="flex items-center w-full justify-between my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            <p className="mr-20">Men's Fashion</p>
            <i className="fa-solid fa-chevron-right"></i>
          </div>

          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            Electronics
          </p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            Home & Lifestyle
          </p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            Medicine
          </p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            Sports & Outdoor
          </p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            Baby’s & Toys
          </p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            Groceries & Pets
          </p>
          <p className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md">
            Health & Beauty
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          className="rounded-lg w-full"
          style={{WebkitTextFillColor: "-moz-initial"}}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-full lg:h-[500px] bg-black h-full text-white px-8 py-16 flex items-center lg:justify-around justify-between gap-4">
                <div>
                  <p className="text-[16px]">{product.title}</p>
                  <h3 className="max-w-[300px] lg:text-[50px] font-medium mt-4">
                    {product.discount}
                  </h3>
                  <Button className="bg-transparent text-white mt-5 border-none border-b border-white border-2">
                    Shop Now
                  </Button>
                </div>
                <img  src={product.image} alt={product.title} className=" object-cover lg:w-[400px] w-[200px] " />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    
    </div>
  );
}