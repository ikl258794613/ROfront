import React, { useState ,useEffect} from "react";
import axios from "axios";
import Nav from "./Nav";
const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus , setLogninStatus] = useState("")
  const handlelogin = () =>{
    axios({
      method: "post",
      url: "http://localhost:3001/login",
      data: { account: account, password: password },
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response);
      if(response.data.message){
        setLogninStatus(response.data.message)
      }else{
        setLogninStatus(response.data[0].account)
      }
    });
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/login",
      headers: { "Content-Type": "application/json" },
    }).then((response)=>{
      if(response.data.loggedIn === true){
        setLogninStatus(response.data.user[0].username)
      }
      console.log(loginStatus)
    })
  }, [loginStatus]);

  return (
    <>
    <Nav/>
      <main className="h-screen flex justify-center items-center bg-gray-100 content-area">
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
              onChange={(e)=>{
                setAccount(e.target.value)
              }}
            />
            <input
              className="mt-5 text-xs w-full p-1 focus:outline-none border-b-2 border-grey-600 focus:border-blue-500 bg-transparent"
              type="text"
              placeholder="your password"
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
            <button className="rounded-md bg-yellow-500 hover:bg-yellow-400 text-md text-white hover:text-white-500 w-full mt-5 mb-4 focus:outline-none p-2"
            onClick={handlelogin}>
              <span className="">LOGIN</span>
            </button>
            {/* <button className="rounded-md bg-blue-500 hover:bg-blue-400 text-md text-white hover:text-white-500 w-full mt-2 mb-4 focus:outline-none p-2">
              <span className="">Register</span>
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

export default Login;
