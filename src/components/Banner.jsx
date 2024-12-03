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
import { NavLink } from "react-router-dom";

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
      title: "Explore smartphone!",
      discount: "Up to 25% off Voucher",
      image: plesteshin,
    },
    {
      id: 3,
      title: "Stylish for everyone!",
      discount: "Up to 50% off Voucher",
      image: car,
    },
  ];

  return (
      <div className="max-w-[1440px] mx-auto mt-4 lg:mt-[100px] px-5">
        <div className="flex items-center justify-between gap-10">
          <div className="md:border-r-2 md:px-4 md:block hidden">
            {[
              "Woman’s Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby’s & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((category, index) => (
                <p
                    key={index}
                    className="cursor-pointer my-2 py-2 hover:bg-slate-100 px-3 rounded-md"
                >
                  {category}
                </p>
            ))}
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
              style={{ color: "inherit" }}
          >
            {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="w-full lg:h-[500px] bg-black h-full text-white px-8 py-16 flex items-center lg:justify-around justify-between gap-4">
                    <div>
                      <p className="text-[16px]">{product.title}</p>
                      <h3 className="max-w-[300px] lg:text-[50px] font-medium mt-4">
                        {product.discount}
                      </h3>
                      <NavLink to="/cart">
                        <Button
                            className="custom-button mt-5"
                            style={{
                              backgroundColor: "transparent",
                              color: "white",
                              border: "none",
                              borderBottom: "2px solid white",
                            }}
                        >
                          Shop Now
                        </Button>
                      </NavLink>
                    </div>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="object-cover lg:w-[400px] w-[200px]"
                    />
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  );
}
