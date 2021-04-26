import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../store/actions";
import ROUTES from '../constants/routes';
import imageLogin from "../assets/login-bw.png";
import imageRegister from "../assets/blogging-bw.png";


const UserLogin = (props) => {
  const [showRegister, setShowRegister] = useState(false);
  const userIsLogged = useSelector(state => state.is_logged);
  const dispatch = useDispatch();

  const handleCreateAccountClick = (e) => {
    setShowRegister((prevShowRegister) => !prevShowRegister);
  };

  const logUser = (e) => {
    e.preventDefault();
    dispatch(login());
  };

  return (
    userIsLogged ? <Redirect to={ROUTES.DASHBOARD}/>  :
    <div className="w-screen min-h-screen flex justify-center items-center bg-gray-400 ">
      <div
        className={`container mx-auto rounded overflow-hidden ${
          showRegister ? "hidden" : "flex"
        }`}
      >
        <div className="w-3/6 bg-gray-700 p-4 justify-center items-center hidden sm:flex">
          <img src={imageLogin} alt="" />
        </div>
        <div className="w-11/12 sm:rounded-none rounded sm:w-3/6 bg-gray-700 sm:bg-gray-300 pt-8 p-4 flex flex-col justify-center items-center relative mx-auto sm:mx-0">
          <div className="hidden sm:block absolute bg-gray-300 h-full w-3/6 top-0 -left-9 transform -skew-y-12 rotate-12"></div>
          <form
            action=""
            className="rounded bg-white p-4 shadow-md w-11/12 sm:w-9/12 relative mb-4"
          >
            <h2 className="uppercase text-gray-400 font-bold mb-4">
              Already Members
            </h2>

            <label htmlFor="user_email" className="w-full flex flex-col">
              Email
              <input
                type="email"
                className="bg-gray-100 border-gray-200 border rounded p-2 focus:outline-none"
                name="user_email"
                id="user_email"
                required
              />
            </label>
            <label htmlFor="user_password" className="w-full flex flex-col">
              Enter yout password
              <input
                type="password"
                className="bg-gray-100 border-gray-200 border rounded p-2 focus:outline-none"
                name="user_password"
                id="user_password"
                autoComplete="off"
                required
              />
            </label>
            <p className="relative text-white sm:text-gray-900 text-sm text-center mt-2">
              <a href="/">Forgot password?</a>
            </p>
            <button
              className="uppercase w-full mt-4 flex justify-center items-center rounded bg-gray-900 text-white p-2"
              onClick={logUser}
            >
              Sign In
            </button>
          </form>
          <p className="relative text-gray-100 sm:text-gray-600 text-sm">
            Don't have an account yet?
          </p>
          <p
            className="relative text-white sm:text-gray-900 text-lg cursor-pointer"
            onClick={handleCreateAccountClick}
          >
            Create an account
          </p>
        </div>
      </div>

      <div
        className={`container mx-auto rounded overflow-hidden ${
          showRegister ? "flex" : "hidden"
        }`}
      >
        <div className="w-11/12 sm:rounded-none rounded sm:w-3/6 bg-gray-700 sm:bg-gray-300 pt-8 p-4 flex flex-col justify-center items-center relative mx-auto sm:mx-0">
          <div className="hidden sm:block absolute bg-gray-300 h-full w-3/6 top-0 -left-9 transform -skew-y-12 rotate-12"></div>
          <form
            action=""
            className="rounded bg-white p-4 shadow-md w-11/12 sm:w-9/12 relative mb-4"
          >
            <h2 className="uppercase text-gray-400 font-bold mb-4">
              Create Account
            </h2>

            <label htmlFor="user_email_register" className="w-full flex flex-col">
              Email
              <input
                type="email"
                className="bg-gray-100 border-gray-200 border rounded p-2 focus:outline-none"
                name="user_email_register"
                id="user_email_register"
                required
              />
            </label>
            <label htmlFor="user_password_register" className="w-full flex flex-col">
              Password
              <input
                type="password"
                className="bg-gray-100 border-gray-200 border rounded p-2 focus:outline-none"
                name="user_password_register"
                id="user_password_register"
                autoComplete="off"
                required
              />
            </label>

            <label
              htmlFor="user_repeat_password"
              className="w-full flex flex-col"
            >
              Repeat Password
              <input
                type="password"
                className="bg-gray-100 border-gray-200 border rounded p-2 focus:outline-none"
                name="user_repeat_password"
                id="user_repeat_password"
                autoComplete="off"
                required
              />
            </label>
            <p className="relative text-white sm:text-gray-900 text-sm text-center mt-2">
              <a href="/">Forgot password?</a>
            </p>
            <button className="uppercase w-full mt-4 flex justify-center items-center rounded bg-gray-900 text-white p-2">
              Register
            </button>
          </form>
          <p className="relative text-gray-100 sm:text-gray-600 text-sm">
            Already a member?
          </p>
          <p
            className="relative text-white sm:text-gray-900 text-lg cursor-pointer"
            onClick={handleCreateAccountClick}
          >
            Sign in
          </p>
        </div>

        <div className="w-3/6 bg-gray-700 p-4 justify-center items-center hidden sm:flex">
          <img src={imageRegister} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
