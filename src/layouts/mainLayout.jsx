import React from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <div className="flex-1 flex p-4">
                {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;