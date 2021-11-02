import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";

const Register = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios({
      method: "post",
      url: "http://localhost:3001/register",
      data: { account: account, password: password },
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response);
    });
    // .catch((err)=>{
    //   console.log(err)
    // })
  };

  return (
    <>
      <Nav />
      <main className="h-screen flex justify-center items-center bg-gray-100 content-area">
        <div className="relative flex w-full flex-col m-7">
          <div className="bg-blue-500 sm:rounded-md text-white p-5  shadow-xl mt-12">
            <h2 className="justify-content flex items-center text-4xl">
              Welcome
            </h2>
            <p className="text-xl">Register</p>
            <p className="sm:mt-32">For Your Ｅquipment</p>
          </div>
          <div className="sm:absolute  bg-white sm:right-12  sm:rounded-md shadow-xl p-2 sm:w-60 flex justify-center items-center flex-col">
            <h2 className="text-yellow-500 text-xl font-bold mb-2">Register</h2>
            <div className="bg-yellow-500 rounded-full w-12 h-12 shadow-xl "></div>
            {/* <input
              className="mt-5 text-xs w-full p-1 focus:outline-none border-b-2 border-grey-600 focus:border-yellow-500 bg-transparent"
              type="text"
              placeholder="your name"
            /> */}
            <input
              className="mt-5 text-xs w-full p-1 focus:outline-none border-b-2 border-grey-600 focus:border-yellow-500 bg-transparent"
              type="text"
              placeholder="your account"
              onChange={(e) => {
                setAccount(e.target.value);
              }}
            />
            <input
              className="mt-5 text-xs w-full p-1 focus:outline-none border-b-2 border-grey-600 focus:border-yellow-500 bg-transparent"
              type="text"
              placeholder="your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="rounded-md bg-blue-500 hover:bg-blue-600 text-md text-white hover:text-white-500 w-full mt-5 mb-4 focus:outline-none p-2"
              onClick={register}
            >
              <span className="">Register</span>
            </button>
            {/* <button className="rounded-md bg-yellow-500 hover:bg-yellow-400 text-md text-white hover:text-white-500 w-full mt-2 mb-4 focus:outline-none p-2">
              <span className="">LOGIN</span>
            </button> */}
            <a className="text-xl text-center text-red-300 p-5" href="/">
              Forgot Password ?
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
