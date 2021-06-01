import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ROUTES from '../constants/routes';
import InputText from "../components/formElements/InputText";
import { authUser } from "../helpers";
import image from "../assets/login-bw.png";

const AdminLogin = (props) => {
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const userIsLogged = useSelector(state => state.is_logged);
  const dispatch = useDispatch();

  const logAdmin = (e) => {
    e.preventDefault();
    dispatch(authUser(userEmail, userPassword));
  };

  return (
    userIsLogged ? <Redirect to={ROUTES.DASHBOARD}/>  :
    <div className="w-screen min-h-screen flex justify-center items-center bg-main-bg">
      <div className="container mx-auto flex rounded overflow-hidden shadow-md border border-primary-light">
        <div className="w-11/12 sm:rounded-none rounded sm:w-3/6 bg-gray-700 sm:bg-white-tone pt-8 sm:pt-4 p-4 flex flex-col justify-center items-center relative mx-auto sm:mx-0">
          <form
            action=""
            className="p-4 w-11/12 sm:w-9/12 relative mb-4"
            onSubmit={logAdmin}
          >
            <h2 className="uppercase text-gray-400 font-bold mb-4 text-center">
              Admin Zone
            </h2>
            <InputText
              placeholder="Email"
              containerClasses="border border-primary-light mb-4 mx-auto"
              id="user_email"
              type="email"
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <InputText
              placeholder="Enter yout password"
              containerClasses="border border-primary-light mx-auto"
              id="user_password"
              type="password"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <button className="max-w-sm uppercase w-full mt-4 flex justify-center items-center rounded bg-primary text-white p-2 focus:outline-none mx-auto">
              Sign In
            </button>
          </form>
          <p className="relative text-white sm:text-gray-900 text-lg">
            <a href="/">Forgot password?</a>
          </p>
        </div>
        <div className="w-3/6 bg-primary-light p-4 hidden sm:block">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
