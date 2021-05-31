import React from 'react';
import { useSelector } from 'react-redux';

const Overlay = () => {
    const show = useSelector(state => state.show_overlay);
    return(
        <div className={`fixed z-10 w-full h-full bg-black opacity-60 ${show ? 'block' : 'hidden'}`}>
            
        </div>
    );
}


export default Overlay;