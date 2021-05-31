import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { hideSidebar } from '../../store/actions';
const SideButton = ({ text, icon, activeIcon, route, className=""}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  let isActive = location.pathname === route;

  const closeSideBar = (e) => {
    dispatch(hideSidebar());
  }

  return (
    <NavLink
      exact
      to={route}
      activeClassName="bg-primary-light font-bold"
      className={`my-2 rounded-xl w-full flex items-center p-3 focus:outline-none ${className}`}
      onClick={closeSideBar}
    >
      {icon ? (
        <img alt="" className="w-5 mr-4" src={isActive && activeIcon ? activeIcon : icon} />
      ) : (
        ""
      )}
      <span className={isActive ? "text-primary-dark" : "text-base-text"}>{text}</span>
    </NavLink>
  );
};

export default SideButton;
