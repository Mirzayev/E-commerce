

export default function Footer(){


    return(
        <div className="relative  bg-black text-white mt-10 w-full px-5">
            <div className="flex max-w-[1440px] mx-auto justify-between">
                <div>
                    <h2 className="text-[24px] font-bold ">Exclusive</h2>
                    <p className="text-[20px] my-6">Subscribe</p>
                    <p>Get 10% off your first order</p>
                    <div className="border border-white flex items-center text-white py-2 px-2 rounded-md mt-4">
                        <input className="w-full h-full bg-transparent outline-none" placeholder="Enter you email" type="text" />
                        <i class="fa-brands fa-telegram"  ></i>
                    </div>
                </div>
                <div>
                    <h3 className="text-[20px] ">Support</h3>
                    <p className="max-w-[175px]  mt-6">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className="my-4">exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div>
                <h3 className="text-[20px] ">Account</h3>
                    <p className="max-w-[175px]  mt-6">My Account</p>
                    <p className="my-4">Login / Register</p>
                    <p>Cart</p>
                    <p className="my-4">Wishlist</p>
                    <p>Shop</p>


                </div>
                <div>
                <h3 className="text-[20px] ">Quick Link</h3>
                    <p className="max-w-[175px]  mt-6">Privacy Policy</p>
                    <p className="my-4">Terms Of Use</p>
                    <p>FAQ</p>
                    <p className="my-4">Contact</p>
                </div>
                <div></div>
            </div>

        </div>
    )
}