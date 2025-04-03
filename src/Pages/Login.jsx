import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import SocialLogin from '../Component/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import LogInAnimation from '../assets/Login.json'

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || "/"
    const {signInUser}= useContext(AuthContext)
    const handleSignIn = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        signInUser(email, password)
        .then(result=>{
            console.log(result.user)
            navigate(from)
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
      <h1 className="text-5xl font-bold">Login now!</h1>
      <Lottie animationData={LogInAnimation}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral bg-[#ff006e] hover:bg-[#ff0095] border-0 mt-4">Login</button>

        </form>
        <label className=''>
            Don't have an Account? 
            <span><Link className="text-[#ff006e] ml-3" to={"/auth/register"}>Register</Link></span>
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

export default Login;