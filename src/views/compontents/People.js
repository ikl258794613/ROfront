import React, { useState } from "react";
import loli from "../../imges/loli.png";

const People = () => {
  return (
    <>
      <div className="flex">
        <div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2"></div>
        </div>
        <div className="w-40 h-80 mt-16">
          <img src={loli} alt="教皇" />
        </div>
        <div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2"></div>
          <div className="w-16 h-16 border-2 pet"></div>
        </div>
      </div>
    </>
  );
};

export default People;
