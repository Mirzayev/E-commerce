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
    <div className="max-w-[1440px] mx-auto mt-20">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 shadow-md shadow-slate-400 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-1"
              >
                <img src="" alt="rasm" />
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

        <div className="flex items-center justify-between mt-6 ">
          <Button className="py-2 h-full">Return to Shop</Button>
          <Button className="py-2 h-full">Update Cart</Button>
        </div>

        <div className="mt-20 flex items-start gap-[170px]">
          <div className=" flex items-center gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="py-2 px-6 border border-slate-200 outline-none rounded-lg"
            />
            <Button className="py-2 h-full bg-red-500 text-white">
              Apply Coupon
            </Button>
          </div>
          <div className="border border-slate-400 rounded-lg py-8 px-6 w-full ">
            <h4>Cart Total</h4>
            <p className="border-b border-slate-400 flex items-center justify-between pb-2 my-4"><p>Subtotal:</p> <p>{product*650}</p></p>
            <p className="border-b border-slate-400 flex items-center justify-between pb-2 my-4"><p>Shipping:</p> <p>Free</p></p>
            <p className="flex items-center justify-between pb-2 my-4"><p>Total</p> <p>{product*650}</p></p>
            <div className="flex items-center justify-center">
              <Button className="bg-red-500 text-white py-3 px-8  h-full ">Procees to checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
