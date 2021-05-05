import React from 'react'; 
import Layout from '../layouts/mainLayout';
import Navbar from '../components/Navbar';
import CardBoxSmall from '../components/cardBoxes/CardBoxSmall';
import CardBoxRows from '../components/cardBoxes/CardBoxRows';
import CardBoxBig from '../components/cardBoxes/CardBoxBig';
import mockChannels from '../data/mockChannels.json';
import mockHeadlines from '../data/mockHeadlines.json';
import mockFeatured from '../data/mockFeatured.json';

const Dashboard = () => {
    
    return (
        <Layout>
            <div className="flex-1 w-full">
                <Navbar />
                <div className="container">
                    <CardBoxSmall title="Explore Channels" moreUrl="/" data={mockChannels.channels}/>
                    <CardBoxRows title="Today's Headlines" moreUrl="/" data={mockHeadlines.headlines}/>
                    <CardBoxBig  title="Featured News" moreUrl="/" data={mockFeatured.featured}/>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;