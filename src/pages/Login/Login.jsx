import React, { useContext, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import loginAnimation from "../../assets/lottie/login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin, setUser, userGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/'

  const handleGooglelogin = () => {
    userGoogleLogin()
      .then((res) => {
        const user = res.user;
        setUser(user);
        Swal.fire({
          title: "Successful!",
          text: "Login successfully done!",
          icon: "success",
        });
        navigate(from)
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Something went wrong!",
          text: err,
          icon: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    userLogin(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        Swal.fire({
          title: "Successful!",
          text: "Login successfully done!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Something went wrong!",
          text: err,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div className="bg-base-100 flex md:flex-row flex-col-reverse  justify-center py-12 sm:px-6 items-center">
        <div className="mt-2 sm:mx-auto sm:w-full w-full">
          <div className="bg-white py-10 shadow-xl sm:rounded-lg px-10  w-full md:w-[36rem] mx-auto">
                <h2 className="mt-6 text-center text-3xl font-bold text-[#116D6E]">
                  Login To Your Account
                </h2>
                <div>
                  <button
                    onClick={handleGooglelogin}
                    className="btn bg-white border-1 border-base-300 flex my-6 mx-auto justify-center items-center"
                  >
                    <FcGoogle className="text-lg" />
                    Login with Google
                  </button>
                </div>
            <form className="space-y-6 mx-auto" onSubmit={handleSubmit}>
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <p className="flex mx-auto justify-center items-center">Or</p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <BsEye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  I am a
                </label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
                >
                  <option className="" value="jobseeker">
                    Job Seeker
                  </option>
                  <option className="" value="employer">
                    Employer
                  </option>
                </select>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn bg-[#116D6E] hover:bg-[#0e5a5a] text-white px-6 py-2 rounded-md hover:rounded-3xl shadow-lg transition-all duration-200"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white">
                    Dont't have any account?{" "}
                    <Link
                      to="/register"
                      className="font-medium text-[#116D6E] hover:text-[#0e5b5c]"
                    >
                      Register
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 w-[50%]">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
