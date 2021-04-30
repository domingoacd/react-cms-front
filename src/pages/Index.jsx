import React from 'react'; 
import Layout from '../layouts/mainLayout';
import Navbar from '../components/Navbar';
import CardBoxSmall from '../components/cardBoxes/CardBoxSmall';
import fakeChannels from '../data/fakeChannels.json';
const Dashboard = () => {
    console.log(fakeChannels);
    return (
        <Layout>
            <div className="flex-1 w-full">
                <Navbar />
                <CardBoxSmall title="Explore Channels" moreUrl="/" data={fakeChannels.channels}/>
            </div>
        </Layout>
    );
}

export default Dashboard;