import { Button } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function BasketProduct({items}) {
  const [product, setProduct] = useState(1);
  console.log(items)

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);

  function handleOnclickChangeQuantityPlus() {
    setProduct((prev) => prev + 1);
  }

  function handleOnclickChangeQuantityMinus() {
    setProduct((prev) => (prev > 1 ? prev - 1 : 1));
  }

  return (
    <div className="max-w-[1440px] mx-auto mt-20 px-4 sm:px-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs sm:text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 shadow-sm">
            <tr>
              <th scope="col" className="px-4 sm:px-6 py-3">Product</th>
              <th scope="col" className="px-4 sm:px-6 py-3">Price</th>
              <th scope="col" className="px-4 sm:px-6 py-3">Quantity</th>
              <th scope="col" className="px-4 sm:px-6 py-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 shadow-md shadow-slate-400">
              <th
                scope="row"
                className="px-4 sm:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2 sm:gap-4"
              >
                <img
                  src="https://via.placeholder.com/50"
                  alt="Product"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <p className="text-[10px] sm:text-sm">Name</p>
              </th>
              <td className="px-4 sm:px-6 py-4">{formattedPrice(650)}</td>
              <td className="px-4 sm:px-6 py-4">
                <div className="border border-slate-200 px-2 sm:pr-10 sm:pl-2 py-1 rounded-md max-w-[72px] flex items-center gap-2 sm:gap-4">
                  <p>{product}</p>
                  <div className="flex flex-col items-center gap-1">
                    <i
                      onClick={handleOnclickChangeQuantityPlus}
                      className="fa-solid fa-chevron-up text-xs cursor-pointer hover:text-red-500"
                    ></i>
                    <i
                      onClick={handleOnclickChangeQuantityMinus}
                      className="fa-solid fa-chevron-down text-xs cursor-pointer hover:text-red-500"
                    ></i>
                  </div>
                </div>
              </td>
              <td className="px-4 sm:px-6 py-4">{formattedPrice(650 * product)}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4 sm:gap-0">
          <Button className="py-2 w-full sm:w-auto" onClick={() => console.log("Returning to shop")}>Return to Shop</Button>
          <Button className="py-2 w-full sm:w-auto" onClick={() => console.log("Cart updated")}>Update Cart</Button>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-start gap-8 md:gap-[170px]">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon Code"
              className="py-2 px-4 sm:px-6 border border-slate-200 outline-none rounded-lg w-full md:w-auto"
            />
            <Button className="py-2 px-4 bg-red-500 text-white">Apply Coupon</Button>
          </div>
          <div className="border border-slate-400 rounded-lg py-8 px-6 w-full ">
            <h4 className="text-lg font-medium mb-4">Cart Total</h4>
            <div className="border-b border-slate-400 flex items-center justify-between pb-2 my-4">
              <span>Subtotal:</span> <span>{formattedPrice(product * 650)}</span>
            </div>
            <div className="border-b border-slate-400 flex items-center justify-between pb-2 my-4">
              <span>Shipping:</span> <span>Free</span>
            </div>
            <div className="flex items-center justify-between pb-2 my-4">
              <span>Total:</span> <span>{formattedPrice(product * 650)}</span>
            </div>
            <div className="flex items-center justify-center">
              <NavLink
                to="/cart/checkout"
                className="bg-red-500 text-white py-3 px-8 h-full rounded-lg hover:bg-red-600 transition-all"
              >
                Proceed to checkout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}