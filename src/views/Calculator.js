import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Calculatortool from "./compontents/Calculatortool";
import Tabs from "./compontents/Tabs";
import People from "./compontents/People";
const Calculator = () => {
  const [inputLuk, setInputluk] = useState(0);
  const [fell, setFell] = useState(1);
  const [equipment, setEquipment] = useState({
    head: "",
    headmid: "",
    headbottom: "",
    clothing: "",
    right: "",
    left: "",
    robe: "",
    shoes: "",
    acessaryRight: "",
    acessaryLeft: "",
    pet: "",
  });
  const handleInputLukChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInputluk(value);
  };

  const handleFellChange = () => {
    const newFell = inputLuk / 10 + 1;
    setFell(newFell);
  };

  const handlechecked = (e) => {
    const checked = e.target.checked;
    if (checked) {
      const newLuk = Number(inputLuk) + 10;
      setInputluk(newLuk);
    } else {
      const newLuk = Number(inputLuk) - 10;
      setInputluk(newLuk);
    }
  };

  useEffect(() => {
    handleFellChange();
  }, [inputLuk]);

  return (
    <>
      <Nav />
      <div className="content-area flex justify-between">
        <Calculatortool
          handleInputLukChange={handleInputLukChange}
          inputLuk={inputLuk}
          fell={fell}
          handlechecked={handlechecked}
        />
        <People />
        <Tabs equipment={equipment} />
      </div>
    </>
  );
};

export default Calculator;
