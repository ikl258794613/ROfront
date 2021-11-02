import React, { useState } from "react";
import Nav from "./Nav";
import ArticleListCard from "./compontents/ArticleListCard";
import CalculatorCard from "./compontents/CalculatorCard";


const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-around bg-gray-300 content-area">
        <ArticleListCard />
        <CalculatorCard />
      </div>
    </>
  );
};

export default Home;
