import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AnoutPage";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Pages/Dashboard/Overview";
import AllUser from "../Pages/Dashboard/AllUser";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/Dashboard/AddProduct";
import ProductDetails from "../Pages/ProductDetails";
import MyCart from "../Pages/Dashboard/MyCart";
import WishList from "../Pages/Dashboard/WishList";
import MyProduct from "../Pages/Dashboard/MyProduct";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct";
import Blog from "../Pages/Blog";
import Profile from "../Pages/Dashboard/Profile";
import Shop from "../Pages/Shop";
import RegistrationPage from "../Layout/RegistrationPage";
import SingIn from "../Layout/SingIn";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        ,
        {
          path:'/contact',
          element:<ContactPage/>
        },
        {
          path:'/about',
          element:<AboutPage/>
        },
        {
          path: '/product',
          element: <Shop/>
        }
        ,
        {
          path: '/details/:id',
          element:<ProductDetails></ProductDetails>, 
        },
        {
          path:'/blog',
          element: <Blog/>
        }

      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path:'dashboard/overview',
          element: <PrivateRoute><Overview/></PrivateRoute>
        },
        {
          path: 'dashboard/users',
          element: <PrivateRoute><AllUser/></PrivateRoute>
        },
        {
          path: 'dashboard/add-product',
          element: <PrivateRoute><AddProduct/></PrivateRoute>
        },
        {
          path: 'dashboard/my-cart',
          element:<PrivateRoute><MyCart/></PrivateRoute>
        },
        {
          path: 'dashboard/my-wishList',
          element:<PrivateRoute><WishList/></PrivateRoute>
        },
        {
          path: 'dashboard/my-product',
          element:<PrivateRoute><MyProduct/></PrivateRoute>
        },
        {
          path: 'dashboard/profile',
          element:<PrivateRoute><Profile/></PrivateRoute>
        },
        {
          path:'/dashboard/updateProduct/:id',
          element:<PrivateRoute><UpdateProduct/></PrivateRoute>
        }
        
      ]
    },
    {
      path: '/register',
      element: <RegistrationPage/>
    },
    {
      path: '/login',
      element: <SingIn/>
    },
  ]);