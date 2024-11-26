import { useState } from "react";
import { Button } from "antd";

export default function Wishlist() {
  const [likeQuantity, setLikeQuantity] = useState(0);

  return (
    <div className="my-20 max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between mb-[60px]">
        <p> Wishtlist({likeQuantity})</p>
        <Button className="py-2 px-10 rounded-lg h-full">
          Move All To Bag
        </Button>
      </div>

      <div className="flex md:gap-[30px] gap-4 overflow-x-auto  mt-10">

          <div className="">
            <div className="md:w-[270px]   md:h-[250px] w-[160px] h-[160px] px-3 py-3 bg-slate-100 relative flex items-center justify-center">
              <p className="absolute bg-red-600 text-white top-1 left-3 text-xs px-2 py-1 rounded-[5px] ">
              -10%
              </p>
             <i className="fa-solid  fa-trash absolute text-black bg-white  top-1 right-3 text-xs px-2 py-1 rounded-[5px] cursor-pointer "></i>
           

              <img src="" ekdwpos alt="" />
            </div>
            <p className="text-base font-semibold my-4">name</p>
            <div className="flex items-center gap-4">
              <p className="text-red-600 font-semibold ">120$</p>
              <strike className="text-slate-500 font-semibold  "> 180$</strike>
            </div>

           
          </div>
        
      </div>
    </div>
  );
}
