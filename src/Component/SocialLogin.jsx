import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
        <div className="divider">OR</div>
      <button
        className="flex border-r-2 border-[#ff006e] w-full mx-auto gap-3 items-center btn btn-wide bg-white"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle></FcGoogle> <span>Login With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
