import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../constants/routes';
import image from '../assets/error.png';

const NotFound = (props) => {
    return (
        <div className="bg-main-bg w-full min-h-screen">
          <div className="container mx-auto flex flex-col items-center py-4">
            <h2 className=" text-center text-3xl sm:text-5xl">404 - Page not found</h2>
            <img src={image} alt="" className=" w-11/12 max-w-lg relative left-4" />
            <p className=" text-base-text sm:text-lg text-center px-3">
              Oops, there is nothing here. Maybe you have a typo in the url? <br />
              <Link to={ROUTES.ROOT} className=" underline text-primary">Back to home</Link>
            </p>
          </div>
        </div>
      );
}

export default NotFound;