import React from 'react';
import Select from './formElements/Select';
import InputText from './formElements/InputText';
import locationIcon from '../assets/location.png';
import pieIcon from '../assets/pie-chart.png';
import calendarIcon from '../assets/calendar.png';
import searchIcon from '../assets/search.png';

const Searchbar = (props) => {
    return (
        <form className="flex flex-wrap ">
            <Select icon={locationIcon}/>
            <Select icon={pieIcon}/>
            <Select icon={calendarIcon}/>
            <InputText placeholder="Search for anything..." icon={searchIcon}/>
        </form>
    );
}

export default Searchbar;