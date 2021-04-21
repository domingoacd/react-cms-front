import React from "react";
import { useDispatch } from "react-redux";
import {  } from "react-router-dom";
import { is_admin } from "../store/actions";
import image from "../assets/security-bw.png";
const AdminLogin = (props) => {
  const dispatch = useDispatch();

  const logAdmin = (e) => {
    e.preventDefault();
    dispatch(is_admin());
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-gray-400 ">
      <div className="container mx-auto flex rounded overflow-hidden">
        <div className="w-11/12 sm:rounded-none rounded sm:w-3/6 bg-gray-700 sm:bg-gray-300 pt-8 sm:pt-4 p-4 flex flex-col justify-center items-center relative mx-auto sm:mx-0">
          <form
            action=""
            className="rounded bg-white p-4 shadow-md w-11/12 sm:w-9/12 relative mb-4"
          >
            <h2 className="uppercase text-gray-400 font-bold mb-4">
              Admin Zone
            </h2>

            <label htmlFor="user_email" className="w-full flex flex-col">
              Email
              <input
                type="email"
                className="bg-gray-100 border-gray-200 border rounded p-2 focus:outline-none"
                name="user_email"
                id="user_email"
              />
            </label>
            <label htmlFor="user_password" className="w-full flex flex-col">
              Enter yout password
              <input
                type="password"
                className="bg-gray-100 border-gray-200 border rounded p-2 focus:outline-none"
                name="user_password"
                id="user_password"
              />
            </label>
            <button
              className="uppercase w-full mt-4 flex justify-center items-center rounded bg-gray-900 text-white p-2"
              onClick={logAdmin}
            >
              Sign In
            </button>
          </form>
          <p className="relative text-white sm:text-gray-900 text-lg">
            <a href="/">Forgot password?</a>
          </p>
        </div>
        <div className="w-3/6 bg-gray-700 p-4 hidden sm:block">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
