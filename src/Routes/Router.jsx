import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AnoutPage";
import Register from "../Pages/Register";
import Dashboard from "../Layout/Dashboard";
import Overview from "../Pages/Dashboard/Overview";
import AllUser from "../Pages/Dashboard/AllUser";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/Dashboard/AddProduct";
import AllProduct from "../Pages/AllProducts";
import ProductDetails from "../Pages/ProductDetails";
import MyCart from "../Pages/Dashboard/MyCart";
import WishList from "../Pages/Dashboard/WishList";
import MyProduct from "../Pages/Dashboard/MyProduct";
import UpdateProduct from "../Pages/Dashboard/UpdateProduct";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
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
          path: '/register',
          element: <Register/>
        },
        {
          path: '/product',
          element: <AllProduct/>
        }
        ,
        {
          path: '/details/:id',
          element:<ProductDetails></ProductDetails>, 
        },
       

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
          path:'/dashboard/updateProduct/:id',
          element:<PrivateRoute><UpdateProduct/></PrivateRoute>
        }
        
      ]
    }
  ]);