import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [theme, setTheme]=useState("light")
  const {user, logout}=useContext(AuthContext)



  useEffect(()=>{
    const savedTheme = localStorage.getItem("theme")
    if(savedTheme){
      setTheme(savedTheme)
      document.documentElement.classList.add(savedTheme)
    }
  },[])

  const toggleTheme = ()=>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme);

    document.documentElement.setAttribute("data-theme", newTheme)
    
  }

  const links=<>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/find-tutors"}>Find tutors</NavLink></li>
    <li><NavLink to={"/add-tutorials"}>Add Tutorials</NavLink></li>
    <li><NavLink to={"/my-tutorials"}>My Tutorials</NavLink></li>
    <li><NavLink to={"/my-booked-tutors"}>My booked tutors</NavLink></li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
          {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-[#ff006e]">EduSync</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      <button className="btn btn-accent bg-[#FF006E] text-white mr-1 lg:md:mr-3 border-0" onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button>
    }
  <div className='btn btn-ghost bg-[#ff006e] hover:bg-[#ff0095] border-0 text-white mr-1 lg:md:mr-5'>
        {
            user && user?.email? (<button onClick={logout}>Logout</button>):(<div><Link to={"/auth/login"}>Login</Link></div>)
        }

    </div>
    <div className="dropdown dropdown-end">

      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="rounded-full">
        {
        user && user?.email ? (<div>
          {
            user.photoURL ? (<img className='w-12 h-12 rounded-full mr-3' src={user.photoURL} alt="" title={user.displayName} />) :
            (<FaRegUserCircle className='mr-3 text-3xl'></FaRegUserCircle>)
          }
        </div>): (<FaRegUserCircle className='mr-3 text-3xl'></FaRegUserCircle>)
      }
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between uppercase font-bold">
            {user?.displayName || "User Name"}
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  );
};

export default Navbar;
