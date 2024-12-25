import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import HomeElements from "./components/HomeElements.jsx";
import SignUp from "./pages/SignUp.jsx";
import About from "./pages/About.jsx";
import BasketProduct from "./pages/BasketProduct.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Checkout from "./pages/Checkout.jsx";
import SelectedProduct from "./pages/SelectedProduct.jsx";
import Contact from "./pages/Contact.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import NotFound from "./components/NotFound.jsx";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: '/',
          element: <HomeElements />,
          children: [
            {
              path: "selected-product",
              element: <SelectedProduct />,
            },
          ],
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },

        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "cart",
          element: <BasketProduct />,

        },
        {
          path: "cart/checkout",
          element: <Checkout/>
        },
        {
          path: "my-account",
          element: <MyAccount />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "signUp",
      element: <SignUp />,
    },

  ]);

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
