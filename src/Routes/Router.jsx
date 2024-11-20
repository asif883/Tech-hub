import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ContactPage from "../Pages/ContactPage";
import AboutPage from "../Pages/AnoutPage";

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
        }

      ]
    },
  ]);