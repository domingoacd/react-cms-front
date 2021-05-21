import React, { useEffect, useState } from "react";
import Layout from "../layouts/mainLayout";
import Navbar from "../components/Navbar";
import CardBoxSmall from "../components/cardBoxes/CardBoxSmall";
import CardBoxRows from "../components/cardBoxes/CardBoxRows";
import CardBoxBig from "../components/cardBoxes/CardBoxBig";
import API_ROUTES from "../constants/api";
import mockHeadlines from "../data/mockHeadlines.json";
import mockFeatured from "../data/mockFeatured.json";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(API_ROUTES.FETCH_ALL_CATEGORIES)
      .then((resp) => resp.json())
      .then((data) => setCategories(data.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <div className="flex-1 w-full">
        <Navbar />
        <div className="container">
          <CardBoxSmall
            title="Explore Channels"
            moreUrl="/"
            data={categories}
          />
          <CardBoxRows
            title="Today's Headlines"
            moreUrl="/"
            data={mockHeadlines.headlines}
          />
          <CardBoxBig
            title="Featured News"
            moreUrl="/"
            data={mockFeatured.featured}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
