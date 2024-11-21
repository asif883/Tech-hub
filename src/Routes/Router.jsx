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
        }

      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard/>,
      children: [
        {
          path:'dashboard/overview',
          element: <Overview/>
        },
        {
          path: 'dashboard/users',
          element: <AllUser/>
        }
      ]
    }
  ]);