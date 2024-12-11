import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import registerAnimation from "../../assets/lottie/register.json";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { newUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("register");
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const role = form.get("role");
    const user = { name, email, password, role };
    console.log(user);

    newUser(email,password)
    .then(res => {
        Swal.fire({
            title: "Successful!",
            text: "Registration successfully done!",
            icon: "success"
          });
    })
    .catch(err => {
        Swal.fire({
            title: "Something went wrong!",
            text: err,
            icon: "error"
          });
    })

    const passwordRegex = "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$";
  };

  return (
    <div>
      <div className="bg-base-100 flex md:flex-row flex-col-reverse  justify-center py-12 sm:px-6 items-center">
        <div className="mt-2 sm:mx-auto sm:w-full w-full">
          <div className="bg-white py-10 shadow-xl sm:rounded-lg px-10  w-full md:w-[36rem] mx-auto">
            <form className="space-y-6 mx-auto" onSubmit={handleSubmit}>
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-bold text-[#116D6E]">
                  Create your account
                </h2>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#116D6E] focus:border-[#116D6E]"
                  />
                </div>
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
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
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

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#116D6E] hover:bg-[#0e5b5c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#116D6E]"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-[#116D6E] hover:text-[#0e5b5c]"
                    >
                      Login
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-[50%]">
          <Lottie animationData={registerAnimation}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Register;
