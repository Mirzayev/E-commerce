import Banner from "../components/Banner"
import Categories from "../components/Categories"
import CategoriesBanner from "../components/CategoriesBanner"
import Footer from "../components/Footer"
import MonthProduct from "../components/MonthProduct"
import NewArrival from "../components/NewArrival"
import OurProducts from "../components/OurProducts"
import TodaysProduct from "../components/TodaysProduct"
import Topbar from "../components/Topbar"


 function Home(){


    return(
        <div className=""> 
            <Topbar/>
            <Banner/>
            <TodaysProduct/>
            <Categories/>
            <MonthProduct/>
            <CategoriesBanner/>
            <OurProducts/>
            <NewArrival/>
            <Footer/>
        </div>
    )

}

export default Home