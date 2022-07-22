import React, { useEffect, useState } from "react";
import "./Project2.scss";
const Project2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const h2 = document.querySelector(".count");
    if (count < 0) {
      h2.style.color = "red";
    }
    if (count === 0) {
      h2.style.color = "#222";
    }
    if (count > 0) {
      h2.style.color = "green";
    }
  }, [count]);

  const handleDes = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    return setCount(0);
  };
  const handleInc = () => {
    return setCount(count + 1);
  };

  console.log(count);
  return (
    <div className="project2">
      <h1>Counter</h1>
      <h2 className="count">{count}</h2>
      <div className="project2__buttongroup">
        <button onClick={handleDes}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleInc}>Increase</button>
      </div>
    </div>
  );
};

export default Project2;
