import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Errorpage from "../Pages/Errorpage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import FindTutors from "../Pages/FindTutors";
import AddTutorials from "../Pages/AddTutorials";
import MyBookedTutors from "../Pages/MyBookedTutors";
import MyTutorials from "../Pages/MyTutorials";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/find-tutors",
            element: <FindTutors></FindTutors>
        },
        {
            path: "/add-tutorials",
            element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
        },
        {
            path: "/my-tutorials",
            element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
        },
        {
            path: "/my-booked-tutors",
            element: <MyBookedTutors></MyBookedTutors>
        },
      ]
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: <Login></Login>
        },
        {
          path: "/auth/register",
          element: <Register></Register>
        },
      ]
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>

    }
  ]);

  export default router;