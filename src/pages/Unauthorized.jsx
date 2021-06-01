import React from "react";
import { Link } from 'react-router-dom';
import image from "../assets/security-bw.png";
import ROUTES from '../constants/routes';

const Unauthorized = (props) => {
  return (
    <div className="bg-main-bg w-full min-h-screen">
      <div className="container mx-auto flex flex-col items-center py-4">
        <h2 className=" text-center text-3xl sm:text-5xl">403 - Unauthorized</h2>
        <img src={image} alt="" className=" w-11/12 max-w-lg relative left-4" />
        <p className=" text-base-text sm:text-lg text-center px-3">
          Oh, it seems you don't have permission to acces this place. <br />
          <Link to={ROUTES.ROOT} className=" underline text-primary">Go back home</Link>
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
