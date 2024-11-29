import { useState, useEffect } from "react";
import { Button } from "antd";
import kalonka from "../assets/images/kalonka.png";

export default function CategoriesBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 23,
    minutes: 54,
    seconds: 29,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateCountdown = () => {
    setTimeLeft((prev) => {
      let { days, hours, minutes, seconds } = prev;

      if (seconds > 0) {
        seconds -= 1;
      } else {
        seconds = 59;
        if (minutes > 0) {
          minutes -= 1;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours -= 1;
          } else {
            hours = 23;
            if (days > 0) {
              days -= 1;
            } else {
              clearInterval();
            }
          }
        }
      }
      return { days, hours, minutes, seconds };
    });
  };

  return (
    <div className="min-h-[500px] bg-black text-white flex flex-col-reverse lg:flex-row px-10 items-center justify-between lg:px-[56px] max-w-[1440px] mx-auto py-10">
      <div>
        <p className="text-[#00FF66] font-semibold">Categories</p>
        <h2 className="max-w-[443px] lg:text-[52px] font-semibold">Enhance Your Music Experience</h2>
        <div className="flex items-center gap-2 lg:gap-6 my-8">
          <div className="w-[70px] text-[14px] text-red-500 h-[70px] font-semibold bg-slate-50 rounded-full flex flex-col justify-center items-center">
            <p>{timeLeft.days}</p>
            <p>Days</p>
          </div>
          <div className="w-[70px] text-[14px] text-green-500 h-[70px] font-semibold bg-slate-50 rounded-full flex flex-col justify-center items-center">
            <p>{timeLeft.hours}</p>
            <p>Hours</p>
          </div>
          <div className="w-[70px] text-[14px] h-[70px] font-semibold bg-slate-50 rounded-full flex flex-col justify-center items-center text-blue-500">
            <p>{timeLeft.minutes}</p>
            <p>Minutes</p>
          </div>
          <div className="w-[70px] text-[14px] h-[70px] font-semibold bg-slate-50 rounded-full flex flex-col justify-center items-center text-pink-400">
            <p className="">{timeLeft.seconds}</p>
            <p>Seconds</p>
          </div>
        </div>

        <Button style={{ background: "#00FF66", color: "white" }} type="">
          Buy Now
        </Button>
      </div>
      <div className="my-4">
        <img className="" src={kalonka} alt="" />
      </div>
    </div>
  );
}
