import React, { useState } from "react";

const Login = () => {
  return (
    <>
      <main className="h-screen flex justify-center items-center bg-gray-100">
        <div className="relative flex w-full flex-col m-7">
          <div className="bg-yellow-500 sm:rounded-md text-white p-5  shadow-xl mt-12">
            <h2 className="justify-content flex items-center text-4xl">
              Welcome
            </h2>
            <p className="text-xl">Login</p>
            <p className="sm:mt-32">For Your Equipment</p>
          </div>
          <div className="sm:absolute  bg-white sm:right-12  sm:rounded-md shadow-xl p-2 sm:w-60 flex justify-center items-center flex-col">
            <h2 className="text-blue-500 text-xl font-bold mb-2">Login</h2>
            <div className="bg-blue-500 rounded-full w-12 h-12 shadow-xl "></div>
            <input
              className="mt-5 text-xs w-full p-1 focus:outline-none border-b-2 border-grey-600 focus:border-blue-500 bg-transparent"
              type="text"
              placeholder="your account"
            />
            <input
              className="mt-5 text-xs w-full p-1 focus:outline-none border-b-2 border-grey-600 focus:border-blue-500 bg-transparent"
              type="text"
              placeholder="your password"
            />
            <button className="rounded-md bg-yellow-500 hover:bg-yellow-400 text-md text-white hover:text-white-500 w-full mt-5 mb-4 focus:outline-none p-2">
              <span className="">LOGIN</span>
            </button>
            <button className="rounded-md bg-blue-500 hover:bg-blue-400 text-md text-white hover:text-white-500 w-full mt-2 mb-4 focus:outline-none p-2">
              <span className="">Register</span>
            </button>
            <a className="text-xl text-center text-red-300 p-5" href="/">
              Forgot Password ?
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
