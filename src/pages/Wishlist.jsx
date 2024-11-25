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

      
    </div>
  );
}
