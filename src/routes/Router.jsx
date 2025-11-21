import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Coverage from "../pages/coverage/Coverage";
import ErrorPage from "../pages/error/ErrorPage";
import AboutUs from "../pages/about-us/AboutUs";
import Pricing from "../pages/pricing/Pricing";
import Blogs from "../pages/blog/Blogs";
import Contact from "../pages/contact/Contact";
import Services from "../pages/services/Services";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/rider/Rider";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "coverage",
        element: <Coverage></Coverage>,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "pricing",
        element: <Pricing></Pricing>,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
