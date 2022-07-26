import React, { useState } from "react";
import "./Project16.scss";
const Form = ({ setCount, count, title }) => {
  const handleDes = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    return setCount(0);
  };
  const handleInc = () => {
    return setCount(count + 1);
  };
  return (
    <div className="project16__container">
      <h1>{title}</h1>
      <h2 className="count">{count}</h2>
      <div className="project16__buttongroup">
        <button onClick={handleDes}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleInc}>Increase</button>
      </div>
    </div>
  );
};
const Project16 = () => {
  const [count, setCount] = useState(100);
  const [count2, setCount2] = useState(200);
  return (
    <div className="project16">
      <Form setCount={setCount} count={count} title={"First Counter"} />
      <Form setCount={setCount2} count={count2} title={"Second Counter"} />
    </div>
  );
};

export default Project16;
