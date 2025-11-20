import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { signUserWithEmail, signOutUser, getUserProfileFromFirebase } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
      await signUserWithEmail(email, password);
      const updatedUser = getUserProfileFromFirebase();
      console.log(updatedUser);
      navigate(`${location.state ? location.state : "/"}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignout = () => {
    signOutUser().then(console.log("User Signout"));
    const updatedUser = getUserProfileFromFirebase();
    console.log(updatedUser);
  };

  return (
    <div>
      <div className="card bg-base-100 w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-4xl font-extrabold -mb-2">Welcome Back</h2>
          <p className="mb-2">Login with ZapShift</p>
          <form action="" onSubmit={handleSubmit(handleSignIn)}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is Required</p>
              )}
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password Must Be 6 Character</p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary text-secondary mt-4">
                Login
              </button>
            </fieldset>
            <p>
              Don’t have any account?{" "}
              <Link className="text-primary" to="/register">
                Register
              </Link>
            </p>
          </form>
          <button
            onClick={handleSignout}
            className="btn btn-primary text-secondary mt-4"
          >
            Signout
          </button>
          {/* Google */}
          <button className="btn w-full mt-2">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
