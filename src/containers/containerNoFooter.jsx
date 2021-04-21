import React from 'react';
import Navbar from '../components/Navbar';

const ContainerNoFooter = ({ children }) => {
    return(
        <div className="w-screen min-h-screen">
            <Navbar />
            {children}
        </div>
    );
}

export default ContainerNoFooter;