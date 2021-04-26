import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MainContainer = ({ children }) => {
    return (
        <div className="w-screen min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <div className="flex-1 flex">
                {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default MainContainer;