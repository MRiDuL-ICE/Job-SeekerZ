import React, { useContext, useEffect, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { div } from "motion/react-client";

const NavBar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/jobs">All Jobs</Link>
      <Link to="/myApplications">My Applications</Link>
      <Link to="/addJob">Add Job</Link>
      <Link to="/myPostedJobs">Posted Jobs</Link>
      <Link>Contact</Link>
    </>
  );

  const handleLogout = () => {
    userLogout()
      .then((res) => {
        Swal.fire({
          title: "Successful!",
          text: "Logout successful!",
          icon: "success",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative w-full z-50 px-10 hover:absolute ">
      <div className="navbar px-40 bg-base-100 shadow-md min-h-[80px] fixed top-0 left-0 right-0 p-6 backdrop-blur-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#116D6E]"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">
            <FaBriefcase className="text-4xl text-[#116D6E]" />
            Job SeekerZ
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-bold text-[#116D6E] gap-6">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {user && user.email ? (
            <>
              <button className="px-6 py-2 rounded-md transition-all duration-200">
                {user.email}
              </button>{" "}
              <button
                className="btn px-6 py-2 bg-[#116D6E] text-white rounded-md hover:rounded-3xl hover:bg-[#116D6E]/90 transition-all duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>{" "}
            </>
          ) : (
            <>
              <button className="btn px-6 py-2 bg-[#116D6E] text-white rounded-md hover:rounded-3xl hover:bg-[#116D6E]/90 transition-all duration-200">
                <Link to="/register">Register</Link>
              </button>
              <button className="btn px-6 py-2 bg-[#116D6E] text-white rounded-md hover:rounded-3xl hover:bg-[#116D6E]/90 transition-all duration-200">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
