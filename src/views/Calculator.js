import React, { useState,useEffect } from "react";
import Nav from "./Nav";

import Tabs from "./compontents/Tabs";
import People from "./compontents/People";
const Calculator = () => {
  const [inputLuk, setInputluk] = useState(0)
  const [fell ,setFell] = useState(1)
  const [equipment, setEquipment] = useState({
    head:"",
    headmid:"",
    headbottom:"",
    clothing:"",
    right:"",
    left:"",
    robe:"",
    shoes:"",
    acessaryRight:"",
    acessaryLeft:"",
    pet:"",
  });
  const handleInputLukChange =(e)=>{
    e.preventDefault();
    const { value } = e.target;
    setInputluk(value);
  }

  const handleFellChange = () =>{
    const newFell = inputLuk/10 + 1
    setFell(newFell)
  }

  const handlechecked =(e)=>{
    const checked = e.target.checked;
    if (checked) {
      const newLuk = Number(inputLuk)+10
      setInputluk(newLuk);
    } else {
      const newLuk =  Number(inputLuk)-10
      setInputluk(newLuk);
    }
  }


  useEffect(() => {
    handleFellChange()
  }, [inputLuk]);

  return (
    <>
      <Nav />
      <div className="content-area flex justify-between">

        <div>
          <form>
            <label className="block bg-gray-300">
              職業：
              <select>
                <option value="盧恩騎士">盧恩騎士</option>
                <option value="基因學者">基因學者</option>
              </select>
            </label>
            <label className="block">
              <span>LUK:</span>
              <input type="number"  
              onChange={handleInputLukChange}
              value={inputLuk}
              min="0"/>
            </label>
            <label className="block bg-gray-300">
              <span>完全迴避:{fell}</span>
            </label>
            <label  className="block bg-gray-200">
              影子職業裝1.0
              <input className="ml-2" type="checkbox" onClick={(e)=>handlechecked(e)} />
            </label>
            <label  className="block bg-gray-200">
              料理
              <input className="ml-2" type="checkbox" value="" onClick={(e)=>handlechecked(e)}/>
            </label>
          </form>
        </div>
        <People />
        <Tabs equipment={equipment}/>
      </div>
    </>
  );
};

export default Calculator;
