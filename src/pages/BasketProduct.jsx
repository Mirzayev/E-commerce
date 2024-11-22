import { Button } from "antd";
import { useState } from "react";

export default function BasketProduct() {
  const [product, setProduct] = useState(1);

  function handleOnclickChangeQuantityPlus() {
    setProduct((prev) => prev + 1);
  }

  function handleOnclickChangeQuantityMinus() {
    setProduct((prev) => (prev > 1 ? prev - 1 : 1)); // Minimal qiymatni 1 qilish
  }

  return (
    <div className="max-w-[1440px] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-x-scroll">
        {/* Jadval */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 shadow-sm">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 shadow-md">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-2"
              >
                <img src="" alt="Product" className="w-10 h-10 rounded-md" />
                <p>Name</p>
              </th>
              <td className="px-6 py-4">650$</td>
              <td className="px-6 py-4">
                <div className="border border-slate-200 pr-10 pl-2 py-1 rounded-md max-w-[72px] flex items-center gap-4">
                  <p>{product}</p>
                  <div className="flex flex-col items-center">
                    <i
                      onClick={handleOnclickChangeQuantityPlus}
                      className="fa-solid fa-chevron-up text-xs cursor-pointer"
                    ></i>
                    <i
                      onClick={handleOnclickChangeQuantityMinus}
                      className="fa-solid fa-chevron-down text-xs cursor-pointer"
                    ></i>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">{650 * product}$</td>
            </tr>
          </tbody>
        </table>

        {/* Tugmalar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
          <Button className="py-2 h-full w-full sm:w-auto">Return to Shop</Button>
          <Button className="py-2 h-full w-full sm:w-auto">Update Cart</Button>
        </div>

        {/* Kupon va Jami */}
        <div className="mt-10 flex flex-col md:flex-row items-start gap-6">
          {/* Kupon Kiritish */}
          <div className="flex items-center gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon Code"
              className="py-2 px-6 border border-slate-200 outline-none rounded-lg w-full md:w-auto"
            />
            <Button className="py-2 h-full bg-red-500 text-white w-full md:w-auto">
              Apply Coupon
            </Button>
          </div>

          {/* Jami Hisob */}
          <div className="border border-slate-400 rounded-lg py-6 px-4 w-full md:w-1/2 lg:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Cart Total</h4>
            <p className="border-b border-slate-400 flex items-center justify-between pb-2 my-2">
              <span>Subtotal:</span> <span>{product * 650}$</span>
            </p>
            <p className="border-b border-slate-400 flex items-center justify-between pb-2 my-2">
              <span>Shipping:</span> <span>Free</span>
            </p>
            <p className="flex items-center justify-between pb-2 my-2">
              <span>Total:</span> <span>{product * 650}$</span>
            </p>
            <div className="flex items-center justify-center mt-4">
              <Button className="bg-red-500 text-white py-3 px-6 w-full md:w-auto">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
