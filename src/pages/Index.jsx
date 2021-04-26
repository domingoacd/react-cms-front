import React from 'react'; 
import Layout from '../layouts/mainLayout';
import SearchBar from '../components/Searchbar';

const Dashboard = () => {
    return (
        <Layout>
            <div className="flex-1 w-full">
                <SearchBar />
            </div>
        </Layout>
    );
}

export default Dashboard;