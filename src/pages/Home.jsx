import Banner from "../components/Banner"
import Categories from "../components/Categories"
import CategoriesBanner from "../components/CategoriesBanner"
import MonthProduct from "../components/MonthProduct"
import OurProducts from "../components/OurProducts"
import TodaysProduct from "../components/TodaysProduct"
import Topbar from "../components/Topbar"


 function Home(){


    return(
        <div className="px-5"> 
            <Topbar/>
            <Banner/>
            <TodaysProduct/>
            <Categories/>
            <MonthProduct/>
            <CategoriesBanner/>
            <OurProducts/>
        </div>
    )

}

export default Home