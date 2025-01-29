import React, { useState } from "react";
import "./App.css";

const TicTac = () => {
  const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [count, setCount] = useState("X");
  const handleClick = (parCellNum) => {
    
    count === "X" ? setCount("O") : setCount("X");
    count === "O" ? setCount("X") : setCount("O");
    console.log(parCellNum);

    const getID = document.getElementById(`box` + parCellNum);
    getID.innerHTML = count;
    getID.disabled = true;

  };
  const newNumber = numberArr.map((cellNum, index) => {
    return (
      <li key={index} className="tickTac-list">
        <button onClick={()=>{handleClick(cellNum)}} id={`box` + cellNum} />
      </li>
    );
  });

  return (
    <div>
      <ul className="tickTac">{newNumber}</ul>
    </div>
  );
};

export default TicTac;
