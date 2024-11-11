import smartwatch from '../assets/icons/smartwatch.png'


export default function Categories() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 w-4 h-9 rounded-md"></div>
          <h3 className="text-red-500 text-base font-semibold">Categories </h3>
        </div>

        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-20 ">
            <p className="text-[36px] font-semibold">Browse By Category</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-slate-100 w-[46px] h-[46px] rounded-full  flex items-center justify-center text-xl">
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="bg-slate-100 w-[46px] h-[46px] rounded-full  flex items-center justify-center text-xl">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-16 gap-4 overflow-x-auto">
          <div className="border shadow-md cursor-pointer min-w-[120px] sm:min-w-[170px] h-[145px] group flex flex-col items-center justify-center rounded-lg hover:bg-red-500 transition-all">
            <i class="fa-solid fa-mobile-screen text-3xl group-hover:text-white transition-all  "></i>
            <p className="mt-4 group-hover:text-white transition-all font-semibold">Phone</p>
          </div>
          <div className="border shadow-md cursor-pointer min-w-[120px] sm:min-w-[170px] h-[145px] group flex items-center justify-center flex-col rounded-lg hover:bg-red-500 transition-all">
            <i class="fa-solid fa-computer text-3xl group-hover:text-white transition-all  "></i>{" "}
            <p className="mt-4 group-hover:text-white transition-all font-semibold">Computer</p>
          </div>
          <div className="border shadow-md cursor-pointer min-w-[120px] sm:min-w-[170px] h-[145px] group flex items-center justify-center flex-col rounded-lg hover:bg-red-500 transition-all">
          <img src={smartwatch} className='w-8' alt=""/>
            <p className="mt-4 group-hover:text-white transition-all font-semibold">Smartwatch</p>
          </div>
          <div className="border shadow-md cursor-pointer min-w-[120px] sm:min-w-[170px] h-[145px] group flex items-center justify-center flex-col rounded-lg hover:bg-red-500 transition-all">
            <i class="fa-solid fa-camera text-3xl group-hover:text-white transition-all  "></i>{" "}
            <p className="mt-4 group-hover:text-white transition-all font-semibold">Camera</p>
          </div>
          <div className="border shadow-md cursor-pointer min-w-[120px] sm:min-w-[170px] h-[145px] group flex items-center justify-center flex-col rounded-lg hover:bg-red-500 transition-all">
            <i class="fa-solid fa-headphones text-3xl group-hover:text-white transition-all  "></i>{" "}
            <p className="mt-4 group-hover:text-white transition-all font-semibold">Headphone</p>
          </div>
          <div className="border shadow-md cursor-pointer min-w-[120px] sm:min-w-[170px] h-[145px] group flex items-center justify-center flex-col rounded-lg hover:bg-red-500 transition-all">
            <i class="fa-solid fa-gamepad text-3xl group-hover:text-white transition-all  "></i>{" "}
            <p className="mt-4 group-hover:text-white transition-all font-semibold">Gaming</p>
          </div>
        </div>
      </div>
      <hr className='my-16 h-1 w-full' />

    </div>
  );
}
