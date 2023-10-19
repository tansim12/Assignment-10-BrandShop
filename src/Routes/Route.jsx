import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CartProducts from "../Pages/CartProducts/CartProducts";
import AddProducts from "../Pages/AddProducts.jsx/AddProducts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import BrandCategoryPage from "../Pages/BrandCategoryPage/BrandCategoryPage";
import ProductUpdateForm from "../ProductUpdateForm/ProductUpdateForm";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/cartProducts",
        element: (
          <PrivateRoute>
            <CartProducts></CartProducts>
          </PrivateRoute>
        ),
        loader: async () => {
          // const res = await fetch("https://assingment-10-server-murex.vercel.app/products");
          const res = await fetch(
            "https://assingment-10-server-murex.vercel.app/products"
          );
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/products/:brandName",
        element: <BrandCategoryPage></BrandCategoryPage>,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://assingment-10-server-murex.vercel.app/products/${params.brandName}`
          );
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/products/:brandName/:_id",
        element: (
          <PrivateRoute>
            <ProductUpdateForm></ProductUpdateForm>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `https://assingment-10-server-murex.vercel.app/products/${params.brandName}/${params._id}`
          );
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/details/:brandName/:_id",
        element: (
          <PrivateRoute>
            <ProductsDetails></ProductsDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `https://assingment-10-server-murex.vercel.app/products/${params.brandName}/${params._id}`
          );
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);

export { router };
