import React from 'react';
import menuIcon from '../../assets/menu.png';

const MenuButton = (props) => {
    return(
    <button className=" bg-primary rounded-lg w-12 h-12 relative flex justify-center items-center focus:outline-none">
        <img src={menuIcon} alt="" className=" absolute w-3/6 h-3/6"/>
    </button>);
}

export default MenuButton;