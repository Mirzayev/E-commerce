import { Button } from "antd"
import kalonka from '../assets/images/kalonka.png'

export default function CategoriesBanner() {


    return(
        <div className="min-h-[500px] bg-black text-white flex flex-col-reverse lg:flex-row px-10 items-center justify-between lg:px-[56px] max-w-[1440px] mx-auto">
            <div>
                <p className="text-[#00FF66] font-semibold">Categories</p>
                <h2 className="max-w-[443px] lg:text-[52px] font-semibold">Enhance Your Music Experience</h2>
                <div className="flex items-center gap-2 lg:gap-6 my-8">
                    <div className="w-[70px] text-[14px] text-red-500  h-[70px] font-semibold bg-slate-50 rounded-full flex flex-col justify-center items-center ">
                        <p>4</p>
                        <p>Days</p>
                    </div>
                    <div className="w-[70px] text-[14px] text-green-500 h-[70px] font-semibold bg-slate-50 rounded-full flex flex-col justify-center items-center ">
                        <p>23</p>
                        <p>Hours</p>
                    </div>
                    <div className="w-[70px] text-[14px] h-[70px] font-semibold bg-slate-50 rounded-full flex flex-col justify-center items-center text-blue-500">
                        <p>54</p>
                        <p>Minutes</p>
                    </div>
                    <div className="w-[70px] text-[14px]  h-[70px] font-semibold bg-slate-50 rounded-full flex flex-col justify-center items-center text-pink-400">
                        <p>29</p>
                        <p>Seconds</p>
                    </div>
                </div>

                <Button style={{background: "#00FF66", color: "white"}} type="">Buy Now</Button>
            </div>
           <div className="my-4">
           <img className="" src={kalonka} alt="" />
           </div>
        </div>
    )
}