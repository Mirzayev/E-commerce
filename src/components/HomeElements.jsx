import MonthProduct from "../components/MonthProduct";
import NewArrival from "../components/NewArrival";
import OurProducts from "../components/OurProducts";
import TodaysProduct from "../components/TodaysProduct";

import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CategoriesBanner from "../components/CategoriesBanner";
export default function HomeElements() {
  return (
    <div>
        <Banner/>
      <TodaysProduct />
      <Categories/>
      <MonthProduct/>
      <CategoriesBanner/>
      <OurProducts/>
      <NewArrival/>

    </div>
  );
}
