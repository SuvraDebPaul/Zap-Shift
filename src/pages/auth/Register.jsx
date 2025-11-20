import React, { useRef } from "react";
import { Link } from "react-router";
import userImg from "../../assets/image-upload-icon.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    createNewUserWithEmail,
    updateUserProfile,
    getUserProfileFromFirebase,
  } = useAuth();
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegistration = async (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    const updatedInfo = {
      displayName: data.name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    };
    try {
      await createNewUserWithEmail(email, password);
      await updateUserProfile(updatedInfo);
      const updatedUser = getUserProfileFromFirebase();
      console.log(updatedUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-4xl font-extrabold -mb-2">Create an Account</h2>
          <p className="mb-2">Register with ZapShift</p>
          <form action="" onSubmit={handleSubmit(handelRegistration)}>
            <fieldset className="fieldset">
              <img
                src={userImg}
                alt="profile"
                className="w-12 h-12 rounded-full object-cover cursor-pointer shadow-md"
                onClick={handleImageClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="file-input hidden"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Name"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600">Name is Required</p>
              )}
            </fieldset>
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
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is Required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password Must Be 6 Character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password Must have 1 Uppercase, 1 Lowercase and 1 Special
                  Character
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary text-secondary mt-4">
                Register
              </button>
            </fieldset>
            <p>
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </p>
          </form>
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

export default Register;
