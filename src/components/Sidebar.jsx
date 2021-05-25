import React from 'react';
import SideButton from './buttons/SideButton';
import ROUTES from '../constants/routes';
import logo from '../assets/world.svg';
import homeIcon from '../assets/home.png';
import exploreIcon from '../assets/feed.png';
import bookmarkIcon from '../assets/bookmark.png';
import subscriptionIcon from '../assets/document.png';
import messagesIcon from '../assets/messages.png';
import settingsIcon from '../assets/settings.png';
import logoutIcon from '../assets/logout.png';
import homeIconActive from '../assets/homeColor.png';
import exploreIconActive from '../assets/feedColor.png';
import bookmarkIconActive from '../assets/bookmarkColor.png';
import subscriptionIconActive from '../assets/documentColor.png';
import messagesIconActive from '../assets/messagesColor.png';
import settingsIconActive from '../assets/settingsColor.png';


const Sidebar =  (props) => {
    return (
    <nav className=" flex flex-col items-center bg-sidebar-bg w-60 rounded-tr-3xl rounded-br-3xl py-6 px-3 ">
        <img src={logo} alt="" className=" w-12 mb-8" />
        <SideButton text="Home" icon={homeIcon} activeIcon={homeIconActive} route="/"/>
        <SideButton text="Explore" icon={exploreIcon} activeIcon={exploreIconActive} route={ROUTES.EXPLORE}/>
        <SideButton text="Saved" icon={bookmarkIcon} activeIcon={bookmarkIconActive} route={ROUTES.BOOKMARKS}/>
        <SideButton text="Subscriptions" icon={subscriptionIcon} activeIcon={subscriptionIconActive} route="/a"/>
        <SideButton text="Messages" icon={messagesIcon} activeIcon={messagesIconActive} route="/a"/>
        <SideButton text="Settings" icon={settingsIcon} activeIcon={settingsIconActive} route="/a"/>
        <SideButton text="Logout" icon={logoutIcon} route="/a" className="mt-8"/>
    </nav>
    );
}

export default Sidebar;