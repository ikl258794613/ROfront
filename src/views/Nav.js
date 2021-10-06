import React, { useState } from "react";

const Nav = () => {
  return (
    <>
      <div className="nav w-full bg-blue-500 h-12 flex justify-end items-center">
        <div className="login">
          <button className="bg-blue-300 p-2 m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent shadow-lg">登入</button>
          <button className="bg-red-300 p-2 m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent shadow-lg">註冊</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
