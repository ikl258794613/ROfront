import React, { useState } from "react";
import sta from "../imges/sta.png";
import storm from "../imges/storm.png";

const Home = () => {
  return (
    <>
      <div className="flex justify-around bg-gray-300 content-area">
        <div className="flex justify-center items-center p-2">
          <div className="border-2 rounded-md bg-white w-full shadow-xl">
            <div className="flex justify-center mt-2">
              <img src={sta} alt="風魔飛標" />
            </div>
            <div className="flex flex-col p-5">
              <h1 className="text-2xl text-center">
                建立屬於自己的<span className="text-blue-500">配裝</span>{" "}
              </h1>
              <p className="mt-5">
                想知道裝備搭配效果，又不想花錢測試？
              </p>
              <p>那麼這個計算機非常適合您！</p>
              <button className="bg-yellow-500 p-3 mt-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-lg">
                <span>建立裝備</span>
              </button>
            </div>
          </div>
        </div>

        <div className=" flex justify-center items-center p-2">
          <div className="border-2 rounded-md bg-white  w-full shadow-xl">
            <div className="flex justify-center mt-2">
              <img src={storm} alt="影子鎧甲" />
            </div>
            <div className="flex flex-col p-5">
              <h1 className="text-2xl text-center ">
                參考其他玩家的<span className="text-blue-500 ">配裝</span>{" "}
              </h1>
              <p className="mt-5">
                想知道裝備搭配效果，又不想巴哈爬文？
              </p>
              <p>那麼這些文章非常適合您！</p>
              <button className="bg-yellow-500 p-3 rounded-md mt-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-lg">
                <span>參考配裝</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
