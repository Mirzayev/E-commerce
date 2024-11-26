import { useState, useEffect } from "react";
import joystik from "../assets/images/plesteshin.png";
import klaviatura from "../assets/images/klaviatura.png";
import televizor from "../assets/images/televezor.png";
import chair from "../assets/images/stul.png";
import { Button } from "antd";

export default function TodaysProduct() {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      discount: "-40%",
      price: 120,
      originalPrice: 160,
      image: joystik,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      discount: "-35%",
      price: 960,
      originalPrice: 1160,
      image: klaviatura,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      discount: "-30%",
      price: 370,
      originalPrice: 400,
      image: televizor,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      discount: "-25%",
      price: 375,
      originalPrice: 400,
      image: chair,
    },
  ];

  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
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
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHeartClick = (product) => {
    // Yurak holatini o'zgartirish
    if (favorites.includes(product.id)) {
      setFavorites(favorites.filter((id) => id !== product.id));
    } else {
      setFavorites([...favorites, product.id]);

      // Mahsulotni savatga qo'shish
      if (!cart.find((item) => item.id === product.id)) {
        setCart([...cart, product]);
      }
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5">
      <div className="lg:mt-[140px] sm:mt-20 mt-10">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 w-4 h-9 rounded-md"></div>
          <h3 className="text-red-500 text-base font-semibold">Today's</h3>
        </div>

        <div className="flex md:gap-[30px] gap-4 overflow-x-auto mt-10">
          {products.map((product) => (
            <div key={product.id}>
              <div className="md:w-[270px] md:h-[250px] w-[160px] h-[160px] px-3 py-3 bg-slate-100 relative flex items-center justify-center">
                <p className="absolute bg-red-600 text-white top-1 left-3 text-xs px-2 py-1 rounded-[5px] ">
                  {product.discount}
                </p>
                <div className="bg-white md:w-6 w-5 md:h-6 h-5 flex items-center justify-center rounded-full absolute md:top-4 top-2 right-2">
                  <i
                    className={`cursor-pointer ${
                      favorites.includes(product.id)
                        ? "fa-solid text-red-500"
                        : "fa-regular text-gray-500"
                    } fa-heart md:text-md text-xs`}
                    onClick={() => handleHeartClick(product)}
                  ></i>
                </div>
                <div className="bg-white md:w-6 w-5 md:h-6 h-5 flex items-center justify-center rounded-full absolute md:top-12 top-8 right-2">
                  <i className="fa-regular cursor-pointer fa-eye md:text-md text-xs"></i>
                </div>
                <img src={product.image} alt={product.name} />
              </div>
              <p className="text-base font-semibold my-4">{product.name}</p>
              <div className="flex items-center gap-4">
                <p className="text-red-600 font-semibold">${product.price}</p>
                <strike className="text-slate-500 font-semibold">
                  ${product.originalPrice}
                </strike>
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
          <Button type="primary" danger>
            View All Products
          </Button>
        </div>
        <hr className="bg-slate-400 h-[3px] my-4" />
        <canvas id="myCanvas" width="200" height="200"></canvas>



      </div>
    </div>
  );
}
