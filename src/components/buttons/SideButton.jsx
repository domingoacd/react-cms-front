import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const SideButton = ({ text, icon, activeIcon, route }) => {
  const location = useLocation();
  let isActive = false;
  console.log(location.pathname);

  return (
    <NavLink
      exact
      to={route}
      activeClassName="bg-primary-light font-bold text-primary-dark"
      className="text-base-text my-2 rounded-xl w-full flex items-center p-3 focus:outline-none"
    >
      {icon ? (
        <img alt="" className="w-5 mr-4" src={isActive ? activeIcon : icon} />
      ) : (
        ""
      )}
      {text}
    </NavLink>
  );
};

export default SideButton;
