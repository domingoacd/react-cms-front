import React from 'react';
import { useSelector } from 'react-redux';

const Loader = (props) => {
    const showLoader = useSelector(state => state.show_loader);

    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50 justify-center ${showLoader ? 'flex' : 'hidden'} `}>
            <div className="loader animate-spin rounded-full w-16 h-16 border-4 mt-16"></div>
        </div>
    );
}

export default Loader;
