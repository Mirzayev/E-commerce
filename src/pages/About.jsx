import activeSite from "../assets/icons/Icon-Moneybag.png";
import ourEmployee from "../assets/images/ourEmployee.png";
// import Sale from "../assets/icons/Icon-Sale.png";
import iconShop from "../assets/icons/icon_shop.png";
import money from "../assets/icons/Icon-Moneybag.png";
import Tom from  "../assets/images/Tom.png";
import Emma from "../assets/images/emmaWatson.png";
import Simth from "../assets/images/Smith.png";
export default function About() {
  return (
    <div className="lg:mt-[140px] px-4 mt-8 mx-auto max-w-[1920px]">
      <div className="flex sm:flex-col flex-col-reverse  md:flex-row gap-10 items-center md:pl-[135px]">
        <div>
          <h2 className="text-[36px] md:text-[54px] font-semibold mb-6 md:mb-10 ">Our Story</h2>
          <p className="mb-6 max-w-[525px]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data, and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={ourEmployee} alt="Our Employee" className="w-full md:w-auto " />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto my-[80px]">
        {[
          { img: activeSite, count: "10.5k", label: "Sellers active on our site" },
          { img: money, count: "33k", label: "Monthly Product Sale" },
          { img: iconShop, count: "45.5k", label: "Customers active on our site" },
          { img: money, count: "25k", label: "Annual gross sale on our site" },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full h-[230px] border-2 rounded-md border-slate-300 flex items-center justify-center flex-col cursor-pointer hover:bg-red-500 transition-all hover:text-white hover:shadow shadow-black"
          >
            <div className="bg-slate-300 w-20 h-20 rounded-full flex items-center justify-center">
              <div className="bg-black w-[60px] h-[60px] flex items-center justify-center rounded-full">
                <img className="max-w-10 max-h-10" src={item.img} alt={item.label} />
              </div>
            </div>
            <p className="text-[24px] md:text-[36px] font-bold">{item.count}</p>
            <p className="text-center text-sm md:text-base">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
        {[
          { img: Tom, name: "Tom Cruise", role: "Founder & Chairman" },
          { img: Emma, name: "Emma Watson", role: "Managing Director" },
          { img: Simth, name: "Temurbek Mirzayev", role: "Director" },
        ].map((person, index) => (
          <div
            key={index}
            className="flex justify-start items-center flex-col min-w-[300px] rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-gray-100 w-full px-6 pt-6">
              <img src={person.img} alt={person.name} className="w-full max-w-[200px] mx-auto" />
            </div>
            <h5 className="text-[24px] md:text-[32px] mt-4">{person.name}</h5>
            <p className="my-2 font-semibold">{person.role}</p>
            <div className="flex items-center gap-4 pb-4">
              <i className="fa-brands fa-twitter text-lg cursor-pointer hover:text-blue-500 transition-all"></i>
              <i className="fa-brands fa-instagram text-lg cursor-pointer hover:text-blue-500 transition-all"></i>
              <i className="fa-brands fa-linkedin text-lg cursor-pointer hover:text-blue-500 transition-all"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
