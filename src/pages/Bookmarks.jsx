import React from "react";
import Navbar from "../components/Navbar";
import Layout from "../layouts/mainLayout";
import CardBoxBig from "../components/cardBoxes/CardBoxBig";
import mockFeatured from "../data/mockFeatured.json";
import bookmarkIcon from "../assets/bookmark.png";

const Explore = (props) => {
  return (
    <Layout>
      <div className="flex-1 w-full">
        <Navbar />
        <h2 className=" font-bold mb-8 ">My bookmarks</h2>
        {mockFeatured.featured.length > 0 ? (
          <CardBoxBig data={mockFeatured.featured} />
        ) : (
          <h3 className="flex justify-center items-center text-base-text opacity-70">
            {" "}
            <img src={bookmarkIcon} alt="" /> Bookmarks are empty
          </h3>
        )}
      </div>
    </Layout>
  );
};

export default Explore;
