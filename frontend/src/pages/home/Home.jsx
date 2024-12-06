/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Home.css";
import Header from "../../componnent/Header/Header";
import ExploreMenu from "../../componnent/exploreMenu/ExploreMenu";
import FoodDisplay from "../../componnent/fooddisplay/FoodDisplay";
import Footer from "../../componnent/footer/Footer";
import AppDownload from "../../componnent/appdownload/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div className="home">
      <Header setCategory={setCategory} />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
      
     
    </div>
    
  );
};

export default Home;
