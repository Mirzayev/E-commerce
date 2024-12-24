import plesteshin from '../assets/images/plesteshin.png'
import televizor from '../assets/images/televizor.png'
import {NavLink} from "react-router-dom";

export default function Checkout() {


    return (
        <div className="text-black text-lg relative z-20 mt-20 max-w-[1440px] mx-auto px-5">
            <h3 className={"text-[30px] font-semibold  lg:mt-40 mt-[100px] mb-10 "}>Billing Details</h3>

            <div className={"lg:flex items-center  justify-between"}>
                <div>
                    <div>
                        <p className={"text-[14px] text-slate-400"}>first name*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400"}>Company name</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400"}>Street adress*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400"}>Apartment, floor, etc. (optional)</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400"}>Town/City*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400"}>Phone Number*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div>
                        <p className={"text-[14px] text-slate-400"}>Email Address*</p>
                        <input type="text"
                               className={"lg:min-w-[470px] outline-none py-2  w-full rounded-md bg-slate-100"}/>
                    </div>
                    <div className="flex items-center gap-3 my-4">
                        <input type="checkbox"/>
                        <p>Save this information for faster check-out next time</p>
                    </div>
                </div>

                <div>
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

                        <div className={"flex items-center gap-2"}>
                            <input className={""} type="radio"/>
                            <p className={"font-semibold text-[16px]"}>Bank</p>
                        </div>
                        <div className={"flex items-center gap-2"}>
                            <input className={""} type="radio"/>
                            <p className={"font-semibold text-[16px]"}>Cash on delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}