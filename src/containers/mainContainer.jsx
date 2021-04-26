import React from 'react';

const MainContainer = ({ children }) => {
    return (
        <div className="w-full flex-1 p-4">
            {children}
        </div>
    );
}

export default MainContainer;