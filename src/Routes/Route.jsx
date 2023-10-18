import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CartProducts from "../Pages/CartProducts/CartProducts";
import AddProducts from "../Pages/AddProducts.jsx/AddProducts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import BrandCategoryPage from "../Pages/BrandCategoryPage/BrandCategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/cartProducts",
        element: <CartProducts></CartProducts>,
      },
      {
        path: "/products/:brandName",
        element: <BrandCategoryPage></BrandCategoryPage>,
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:5000/products/${params.brandName}`
          );
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);

export { router };
