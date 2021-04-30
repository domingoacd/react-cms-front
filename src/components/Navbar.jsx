import React from 'react';
import SearchBar from './Searchbar';
import MenuButton from './buttons/MenuButton';
const Navbar = (props) => {
    return (
        <nav className=" flex-1 flex flex-wrap items-center justify-between mb-8">
            <SearchBar />
            <MenuButton />
        </nav>
    );
}

export default Navbar;