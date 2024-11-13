import reklama_1 from '../assets/images/reklama_2.png'
import reklama_3 from '../assets/images/reklama_3.png'
import reklama_4 from '../assets/images/reklama_4.png'
import reklama_5 from '../assets/images/reklama_5.png'

export default function NewArrival() {
  return (
    <div className="mt-[140px] px-4 md:px-0 ">
      <div className="flex items-center gap-2">
        <div className="bg-red-500 w-4 h-9 rounded-md"></div>
        <h3 className="text-red-500 text-base font-semibold">Featured</h3>
      </div>
      <h2 className="lg:text-[36px] text-2xl font-semibold lg:mt-[30px] lg:mb-[60px] mt-4 mb-6">
        New Arrival
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center gap-4 w-full max-h-[400px]">
        <div className="w-full">
          <img className="w-full h-auto object-contain" src={reklama_1} alt="Reklama 1" />
        </div>
        <div className="w-full">
          <img className="w-full h-auto object-contain" src={reklama_3} alt="Reklama 3" />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px] mt-4 sm:mt-[30px]">
            <img className="w-full h-auto object-contain" src={reklama_4} alt="Reklama 4" />
            <img className="w-full h-auto object-contain" src={reklama_5} alt="Reklama 5" />
          </div>
        </div>
      </div>
    </div>
  );
}
