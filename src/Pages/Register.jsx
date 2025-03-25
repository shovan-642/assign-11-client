import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../Component/SocialLogin';

const Register = () => {

    const {createUser, updatedProfile, setUser}=useContext(AuthContext)
    const navigate = useNavigate()


    const handleRegister = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, photo, email, password)

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
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
          <label className="fieldset-label">Photo URL</label>
          <input type="url" name='photo' className="input" placeholder="Your Photo Url" />
          <label className="fieldset-label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
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