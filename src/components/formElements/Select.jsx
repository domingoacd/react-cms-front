import React from 'react';
import arrow from '../../assets/select-arrow.png';

const Select = ({ icon, label="" }) => {
    return (
        <label className="flex items-center cursor-pointer m-4" htmlFor="test">
            {label}
            {icon ? <img src={icon} alt="" className="w-5 h-auto mr-4"/> : ""}
            <select name="test" id="test" className="bg-transparent font-bold focus:outline-none cursor-pointer appearance-none">
                <option className="font-bold" value="">Global</option>
                <option className=" font-bold" value="">Venezuela</option>
            </select>
            <img src={arrow} alt="Arrow" className="w-3"/>
        </label>
    );
}

export default Select;