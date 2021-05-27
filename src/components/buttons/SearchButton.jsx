import React from 'react';
import menuIcon from '../../assets/menu.png';

const MenuButton = (props) => {
    return(
    <button className="flex md:hidden bg-primary rounded-lg w-12 h-12 relative justify-center items-center focus:outline-none">
        <img src={menuIcon} alt="" className=" absolute w-3/6 h-3/6"/>
    </button>);
}

export default MenuButton;