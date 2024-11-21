
import Footer from "../components/Footer"

import Topbar from "../components/Topbar"
import { Outlet } from "react-router-dom"

 function Home(){


    return(
        <div className=""> 
            <Topbar/>
           <Outlet/>
            <Footer/>
        </div>
    )

}

export default Home