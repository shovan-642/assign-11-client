import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Component/SocialLogin';
import registerAnimation from '../assets/Register.json'
import Lottie from 'lottie-react';

const Register = () => {

    const {createUser, updatedProfile, setUser}=useContext(AuthContext)
    const navigate = useNavigate()

    const [error, setError]=useState({})


    const handleRegister = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
          setError({
            ...error,
            password: "please input password atleast 6 character",
          });
          return;
        } else if (!/[A-Z]/.test(password)) {
          setError({ ...error, password: "please input atleast 1 uppercase" });
          return;
        } else if (!/[a-z]/.test(password)) {
          setError({ ...error, password: "please input atleast 1 lowercase" });
          return;
        }
        setError({ ...error, password: "" });

        createUser(email, password)
        .then(result=>{
            const user = result.user;
            setUser(user);
            updatedProfile({displayName: name, photoURL: photo})
            .then(() => {
                navigate("/");
              })
              .catch((err) => {
                console.log(err);
              });
        })
        .catch(error=>{
            console.log(error.message)
        })

    }


    return (
        <div>
            <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <Lottie className='h-96' animationData={registerAnimation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" required/>
          <label className="fieldset-label">Photo URL</label>
          <input type="url" name='photo' className="input" placeholder="Your Photo Url" required/>
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required/>
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>
          <div>{error.password && <label>{error.password}</label>}</div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4 bg-[#ff006e] hover:bg-[#ff0095] border-0">Register</button>

        </form>
        <label className=''>
          Already have an Account?
            <span><Link className="text-[#ff006e]  ml-3" to={"/auth/login"}>Login</Link></span>
        </label>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Register;