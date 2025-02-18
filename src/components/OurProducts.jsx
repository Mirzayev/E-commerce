import { useState, useEffect } from "react";
import banner from "../assets/images/banner.png";
import camera from "../assets/images/camera.png";
import laptop from "../assets/images/laptop.png";
import car from '../assets/images/car.png'
import jacket from '../assets/images/jacket.png'
import jacket_2 from '../assets/images/jacket_2.png'
import bag from '../assets/images/bag.png'
import { Button } from "antd";


export default function OurProducts() {
  const products = [
    {
      id: 1,
      name: " HAVIT HV-G92 Gamepad",
      discount: "-40%",
      price: 120,
      originalPrice: 160,
      image: banner,
    },
    {
      id: 2,
      name: " AK-900 Wired Keyboard",
      discount: "-35%",
      price: 960,
      originalPrice: 1160,
      image: camera,
    },
    {
      id: 3,
      name: " IPS LCD Gaming Monitor",
      discount: "-30%",
      price: 370,
      originalPrice: 400,
      image: laptop,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair ",
      discount: "-25%",
      price: 375,
      originalPrice: 400,
      image: car,
    },
    {
        id: 5,
        name: " HAVIT HV-G92 Gamepad",
        discount: "-40%",
        price: 120,
        originalPrice: 160,
        image: jacket,
      },
      {
        id: 6,
        name: " AK-900 Wired Keyboard",
        discount: "-35%",
        price: 960,
        originalPrice: 1160,
        image: car,
      },
      {
        id: 7,
        name: " IPS LCD Gaming Monitor",
        discount: "-30%",
        price: 370,
        originalPrice: 400,
        image: jacket_2,
      },
      {
        id: 8,
        name: "S-Series Comfort Chair ",
        discount: "-25%",
        price: 375,
        originalPrice: 400,
        image: bag,
      },
  ];

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [starSize, setStarSize] = useState(32);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setStarSize(24); 
      } else if (screenWidth < 1024) {
        setStarSize(32); 
      } else {
        setStarSize(40); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-5">
        <div className="lg:mt-[140px] sm:mt-20 mt-10">
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-4 h-9 rounded-md"></div>
        <h3 className="text-red-500 text-base font-semibold">Our Product </h3>
      </div>

      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-20 ">
          <p className="lg:text-[36px] font-semibold">Explore Our Products</p>
         
        </div>
        <div className="flex items-center gap-1">
          <div className="bg-slate-100 w-[46px] h-[46px] rounded-full  flex items-center justify-center text-xl">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="bg-slate-100 w-[46px] h-[46px] rounded-full  flex items-center justify-center text-xl">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-4 flex overflow-x-auto md:gap-[30px] gap-4  mt-10">
        {products.map((product) => (
          <div key={product.id} className="">
            <div className="md:w-[270px]   md:h-[250px] w-[160px] h-[160px] px-3 py-3 bg-slate-100 relative flex items-center justify-center">
              <p className="absolute bg-red-600 text-white top-1 left-3 text-xs px-2 py-1 rounded-[5px] ">
                {product.discount}
              </p>
              <div className="bg-white md:w-6 w-5 md:h-6 h-5 flex items-center justify-center rounded-full absolute md:top-4 top-2 right-2">
                <i className="fa-regular cursor-pointer fa-heart md:text-md text-xs"></i>
              </div>
              <div className="bg-white  md:w-6 w-5  md:h-6 h-5 flex items-center justify-center rounded-full absolute md:top-12 top-8 right-2">
                <i className="fa-regular cursor-pointer fa-eye md:text-md text-xs"></i>
              </div>

              <img src={product.image} alt="" />
            </div>
            <p className="text-base font-semibold my-4">${product.name}</p>
            <div className="flex items-center gap-4">
              <p className="text-red-600 font-semibold ">${product.price}</p>
              <strike className="text-slate-500 font-semibold  "> ${product.originalPrice}</strike>
            </div>

            <div className="flex items-center gap-2">
              <div className="star-rating">
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;

                  return (
                    <label key={starValue}>
                      <input
                        type="radio"
                        name="rating"
                        value={starValue}
                        onClick={() => setRating(starValue)}
                        style={{ display: "none" }}
                      />
                      <span
                        className="star"
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        style={{
                          color:
                            starValue <= (hover || rating) ? "gold" : "gray",
                          cursor: "pointer",
                          fontSize: `${starSize}px`,
                        }}
                      >
                        &#9733;
                      </span>
                    </label>
                  );
                })}
              </div>
              <h3>({rating + 83})</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center my-[60px]">
        <Button type="primary" danger>View All Products</Button>
      </div>

     
    </div>
    </div>
  );
}
