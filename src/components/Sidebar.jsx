import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideSidebarAndOverlay } from '../store/actions';
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
import closeIcon from '../assets/close.png';

const Sidebar =  (props) => {
    const show = useSelector(state => state.show_sidebar); 
    const dispatch = useDispatch();

    const closeSideBar = (e) => {
        dispatch(hideSidebarAndOverlay());
    }

    return (
    <nav className={`fixed transition-transform transform md:translate-x-0 md:static z-20 min-h-full left-0 top-0 flex flex-col items-center bg-sidebar-bg w-60 rounded-tr-3xl rounded-br-3xl py-6 px-3  ${show ? 'translate-x-0' : '-translate-x-full'}`}>
        <img src={closeIcon} alt="" className="block md:hidden absolute right-6 top-4 rounded-full bg-primary p-1 cursor-pointer w-6" onClick={closeSideBar}/>
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