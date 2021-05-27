import React from 'react';
import SideButton from './buttons/SideButton';
import ROUTES from '../constants/routes';
import logo from '../assets/world.svg';
import homeIcon from '../assets/home.png';
import exploreIcon from '../assets/feed.png';
import bookmarkIcon from '../assets/bookmark.png';
import settingsIcon from '../assets/settings.png';
import logoutIcon from '../assets/logout.png';
import homeIconActive from '../assets/homeColor.png';
import exploreIconActive from '../assets/feedColor.png';
import bookmarkIconActive from '../assets/bookmarkColor.png';
import settingsIconActive from '../assets/settingsColor.png';


const Sidebar =  (props) => {
    return (
    <nav className="fixed transition-transform transform -translate-x-full md:translate-x-0 md:static z-10 min-h-full left-0 top-0 flex flex-col items-center bg-sidebar-bg w-60 rounded-tr-3xl rounded-br-3xl py-6 px-3 ">
        <img src={logo} alt="" className=" w-12 mb-8" />
        <SideButton text="Home" icon={homeIcon} activeIcon={homeIconActive} route="/"/>
        <SideButton text="Explore" icon={exploreIcon} activeIcon={exploreIconActive} route={ROUTES.EXPLORE}/>
        <SideButton text="Saved" icon={bookmarkIcon} activeIcon={bookmarkIconActive} route={ROUTES.BOOKMARKS}/>
        <SideButton text="Settings" icon={settingsIcon} activeIcon={settingsIconActive} route="/a"/>
        <SideButton text="Logout" icon={logoutIcon} route="/a" className="mt-8"/>
    </nav>
    );
}

export default Sidebar;