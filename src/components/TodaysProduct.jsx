// TodaysProduct.jsx
import { useEffect, useState } from "react";
import joystik from "../assets/images/plesteshin.png";
import klaviatura from "../assets/images/klaviatura.png";
import televizor from "../assets/images/televizor.png";
import chair from "../assets/images/stul.png";
import { Button } from "antd";

export default function TodaysProduct({ onAddCart }) {
  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", discount: "-40%", price: 120, originalPrice: 160, image: joystik },
    { id: 2, name: "AK-900 Wired Keyboard", discount: "-35%", price: 960, originalPrice: 1160, image: klaviatura },
    { id: 3, name: "IPS LCD Gaming Monitor", discount: "-30%", price: 370, originalPrice: 400, image: televizor },
    { id: 4, name: "S-Series Comfort Chair", discount: "-25%", price: 375, originalPrice: 400, image: chair },
  ];

  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [hover, setHover] = useState({});
  const [starSize, setStarSize] = useState(32);

  useEffect(() => {
    const updateStarSize = () => {
      const screenWidth = window.innerWidth;
      setStarSize(screenWidth < 768 ? 24 : screenWidth < 1024 ? 32 : 40);
    };

    updateStarSize();
    window.addEventListener("resize", updateStarSize);

    return () => {
      window.removeEventListener("resize", updateStarSize);
    };
  }, []);

  const handleHeartClick = (product) => {
    setFavorites((prev) =>
        prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const handleRatingClick = (productId, value) => {
    setRatings((prev) => ({ ...prev, [productId]: value }));
  };

  const handleHover = (productId, value) => {
    setHover((prev) => ({ ...prev, [productId]: value }));
  };

  return (
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="lg:mt-[140px] sm:mt-20 mt-10">
          <h3 className="text-red-500 text-base font-semibold">Today's Products</h3>

          <div className="flex md:gap-[30px] gap-4 overflow-x-auto mt-10">
            {products.map((product) => (
                <div key={product.id}>
                  <div className="md:w-[270px] md:h-[250px] w-[160px] h-[160px] px-3 py-3 bg-slate-100 relative flex items-center justify-center group">
                    <p className="absolute bg-red-600 text-white top-1 left-3 text-xs px-2 py-1 rounded-[5px]">
                      {product.discount}
                    </p>
                    <Button
                        onClick={() => onAddCart(product)}
                        className="absolute bottom-0 bg-black text-white font-medium w-full text-center hidden group-hover:block transition-all"
                    >
                      Add to cart
                    </Button>
                    <div
                        className={`bg-white md:w-6 w-5 md:h-6 h-5 flex items-center justify-center rounded-full absolute md:top-4 top-2 right-2 ${
                            favorites.includes(product.id) ? "text-red-500" : "text-gray-500"
                        }`}
                    >
                      <i
                          className={`cursor-pointer ${
                              favorites.includes(product.id) ? "fa-solid" : "fa-regular"
                          } fa-heart md:text-md text-xs`}
                          onClick={() => handleHeartClick(product)}
                      ></i>
                    </div>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <p className="text-base font-semibold my-4">{product.name}</p>
                  <div className="flex items-center gap-4">
                    <p className="text-red-600 font-semibold">${product.price}</p>
                    <strike className="text-slate-500 font-semibold">${product.originalPrice}</strike>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="star-rating">
                      {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <label key={starValue}>
                              <input
                                  type="radio"
                                  name={`rating-${product.id}`}
                                  value={starValue}
                                  onClick={() => handleRatingClick(product.id, starValue)}
                                  style={{ display: "none" }}
                              />
                              <span
                                  className="star"
                                  onMouseEnter={() => handleHover(product.id, starValue)}
                                  onMouseLeave={() => handleHover(product.id, 0)}
                                  style={{
                                    color: starValue <= (hover[product.id] || ratings[product.id]) ? "gold" : "gray",
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
                    <h3>({ratings[product.id] || 0} reviews)</h3>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}
