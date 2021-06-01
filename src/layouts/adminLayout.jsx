import React from 'react';
import Overlay from '../components/Overlay';

const AdminLayout = ({ childrem }) => {
    return (
        <div className="min-h-screen flex">
            <Overlay />
        </div>
    );
}

export default AdminLayout;