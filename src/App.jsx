import { useState } from "react";
import Contact from "./pages/Contact.jsx";
import {
  RouterProvider,
  createBrowserRouter,

} from "react-router-dom";
import Home from "./pages/Home";
import HomeElements from "./components/HomeElements.jsx";
import SignUp from "./pages/SignUp.jsx";
import About from "./pages/About.jsx";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element:  <Home/>,
      children: [
        {
          path: "/home",
          element: <HomeElements/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/signUp",
          element: <SignUp/>
        }
      ]
    },
  ]);

  return (
    <div>
       <RouterProvider router={route} />
    </div>
  )
}

export default App;
