import plesteshin from '../assets/images/plesteshin.png'
import televizor from '../assets/images/televizor.png'
import visa from '../assets/images/Visa.png'
import Masterkad from '../assets/images/Mastercard.png'
import iKash from '../assets/images/iKash.png'
import {Button} from "antd";

export default function Checkout() {


    return (
        <div className="text-black text-lg relative z-20 mt-20 max-w-[1440px] mx-auto px-5">
            <h3 className={"text-[30px] font-semibold  lg:mt-40 mt-[100px] mb-10 "}>Billing Details</h3>

            <div className={"lg:flex items-center  gap-[200px]"}>
                <div>
                    <div>
                        <p className={"text-[14px] text-slate-400 lg:mt-8 mt-3"}>first name*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400 lg:mt-8 mt-3"}>Company name</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400 lg:mt-8 mt-3"}>Street adress*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400 lg:mt-8 mt-3"}>Apartment, floor, etc. (optional)</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400 lg:mt-8 mt-3"}>Town/City*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400 lg:mt-8 mt-3"}>Phone Number*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400 lg:mt-8 mt-3"}>Email Address*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div className="flex items-center gap-3 my-4">
                        <input type="checkbox"/>
                        <p>Save this information for faster check-out next time</p>
                    </div>
                </div>

                <div className={"w-full"}>
                    <div className={"flex items-center justify-between my-4 lg:gap-40"}>
                        <div className={"flex items-center  gap-3"}>
                            <img className="max-w-20" src={plesteshin} alt=""/>
                            <h4 className={"text-[14px] sm:text-xl font-semibold"}>LCD Monitor</h4>
                        </div>
                        <p className={"text-[14px] sm:text-xl font-semibold"}>$650</p>

                    </div>
                    <div className={"flex items-center justify-between my-4 lg:gap-40"}>
                        <div className={"flex items-center  gap-3"}>
                            <img className="max-w-20" src={televizor} alt=""/>
                            <h4 className={"text-[14px] sm:text-xl font-semibold"}>H1 Gamepad</h4>
                        </div>
                        <p className={"text-[14px] sm:text-xl font-semibold"}>$1110</p>

                    </div>
                    <div className="  py-8  w-full ">
                        <h4 className="text-lg font-medium mb-4">Cart Total</h4>
                        <div className="border-b border-slate-400 flex items-center justify-between pb-2 my-4">
                            <span>Subtotal:</span> <span>2012</span>
                        </div>
                        <div className="border-b border-slate-400 flex items-center justify-between pb-2 my-4">
                            <span>Shipping:</span> <span>Free</span>
                        </div>
                        <div className="flex items-center justify-between pb-2 my-4">
                            <span>Total:</span> <span>4934</span>
                        </div>
                        <div className="flex items-center justify-center">

                        </div>
                    </div>
                    <div>
                        <form action="">
                            <label htmlFor="">
                                <div className={"flex items-center justify-between"}>
                                    <div className={"flex items-center gap-2"}>
                                        <input name="choice" className={"cursor-pointer"} type="radio"/>
                                        <p className={"font-semibold text-[16px]"}>Bank</p>
                                    </div>
                                    <div className={"flex items-center gap-2"}>
                                        <img className={"object-contain w-14"} src={iKash} alt=""/>
                                        <img className={"object-contain w-14"} src={visa} alt=""/>
                                        <img className={"object-contain w-14"} src={Masterkad} alt=""/>
                                    </div>

                                </div>


                            </label>
                            <label className={""} htmlFor="">
                                <div className={"flex items-center gap-2"}>
                                    <input name="choice" className={"cursor-pointer"} type="radio"/>
                                    <p className={"font-semibold text-[16px]"}>Cash on delivery</p>
                                </div>
                            </label>

                        </form>


                        <div className="flex h-[40px] items-center gap-4 w-full md:w-auto my-8 ">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="h-full w-2/3  sm:px-6 border border-slate-200 outline-none rounded-lg  md:w-auto"
                            />
                            <Button className="h-full px-4 bg-red-500 text-white">Apply Coupon</Button>
                        </div>

                        <Button className={"bg-red-500 text-white h-[40px] px-10"}>Palece Order</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}