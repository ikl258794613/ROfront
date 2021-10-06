import React, { useState } from "react";
import loli from "../../imges/loli.png";

const People = () => {
  return (
    <>
      <div className="flex">
        <div>
          <div className="w-12 h-12 border-2"></div>
          <div className="w-12 h-12 border-2"></div>
          <div className="w-12 h-12 border-2"></div>
          <div className="w-12 h-12 border-2"></div>
        </div>
        <div className="w-40 h-80">
          <img src={loli} alt="教皇" />
        </div>
        <div>
          <div className="w-12 h-12 border-2"></div>
          <div className="w-12 h-12 border-2"></div>
          <div className="w-12 h-12 border-2"></div>
          <div className="w-12 h-12 border-2"></div>
          <div className="w-12 h-12 border-2 pet"></div>
        </div>
      </div>
    </>
  );
};

export default People;
