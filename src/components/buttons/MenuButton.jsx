import React from 'react';
import menuIcon from '../../assets/menu.png';
import { useDispatch } from 'react-redux';
import {showSidebarAndOverlay } from '../../store/actions';

const MenuButton = (props) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(showSidebarAndOverlay());
    }

    return(
    <button className="flex md:hidden bg-primary rounded-lg w-12 h-12 relative justify-center items-center focus:outline-none" onClick={handleClick}>
        <img src={menuIcon} alt="" className=" absolute w-3/6 h-3/6"/>
    </button>);
}

export default MenuButton;