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
import UpdateTutorial from "../Pages/UpdateTutorial";
import TutorDetails from "../Pages/TutorDetails";


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
            element: <FindTutors></FindTutors>, 
            loader: ()=>fetch(`https://assignment-11-server-six-gamma.vercel.app/tutor`)
        },
        {
            path: "/find-tutors/:category",
            element: <FindTutors></FindTutors>,
            loader: ({params})=>fetch(`https://assignment-11-server-six-gamma.vercel.app/find-tutors/${params.category}`)
        },
        {
            path: "/tutor/:details",
            element: <PrivateRoute><TutorDetails></TutorDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://assignment-11-server-six-gamma.vercel.app/tutor/${params.details}`)
        },
        {
            path: "/add-tutorials",
            element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
        },
        {
            path: "/update-tutorial/:id",
            element: <PrivateRoute><UpdateTutorial></UpdateTutorial></PrivateRoute>,
            loader: ({params})=>fetch(`https://assignment-11-server-six-gamma.vercel.app/tutor/${params.id}`)
        },
        {
            path: "/my-tutorials",
            element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
        },
        {
            path: "/my-booked-tutors",
            element: <PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>
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