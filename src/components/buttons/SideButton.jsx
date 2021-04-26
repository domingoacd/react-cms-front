import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const SideButton = ({ text, icon, activeIcon, route }) => {
  const location = useLocation();
  let isActive = location.pathname === route;

  return (
    <NavLink
      exact
      to={route}
      activeClassName="bg-primary-light font-bold"
      className="my-2 rounded-xl w-full flex items-center p-3 focus:outline-none"
    >
      {icon ? (
        <img alt="" className="w-5 mr-4" src={isActive ? activeIcon : icon} />
      ) : (
        ""
      )}
      <span className={isActive ? "text-primary-dark" : "text-base-text"}>{text}</span>
    </NavLink>
  );
};

export default SideButton;
