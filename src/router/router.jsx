import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Errorpage from "../Pages/Errorpage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>

    }
  ]);

  export default router;