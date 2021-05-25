import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../layouts/mainLayout";
import CardBoxRows from "../components/cardBoxes/CardBoxRows";
import CardBoxBig from "../components/cardBoxes/CardBoxBig";
import mockHeadlines from "../data/mockHeadlines.json";
import mockFeatured from "../data/mockFeatured.json";

const Explore = (props) => {
  return (
    <Layout>
      <div className="flex-1 w-full">
        <Navbar />
        <h2 className=" font-bold mb-8 ">Discover news</h2>
        <CardBoxRows
          title="Opinion"
          moreUrl="/"
          data={mockHeadlines.headlines}
        />
        <CardBoxBig
          title="Sports"
          moreUrl="/"
          data={mockFeatured.featured}
        />

        <CardBoxRows
          title="Politics"
          moreUrl="/"
          data={mockHeadlines.headlines}
        />
      </div>
    </Layout>
  );
};

export default Explore;
