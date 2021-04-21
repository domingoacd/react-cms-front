import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainContainer = ({ children }) => {
    return (
        <div className="w-screen min-h-screen bg-gray-800 flex flex-col justify-between">
            <Navbar />
                {children}
            <Footer />
        </div>
    );
}

export default MainContainer;