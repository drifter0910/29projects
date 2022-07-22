import React from "react";
import "./Project1.scss";

const Projects1 = () => {
  const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
  const randomNumbers = (colors) => {
    return Math.floor(colors.length * Math.random());
  };
  const randomColors = () => {
    const getBg = document.querySelector(".project1__body");
    const showColor = document.querySelector(".bg-color");
    const randomValue = colors[randomNumbers(colors)];
    getBg.style.backgroundColor = randomValue;
    showColor.innerHTML = `<h1 style="background-color: black; color:white; padding: 1rem; margin-bottom: 1rem; border-radius: 10px" >Background Color : ${randomValue}</h1>`;
  };
  return (
    <div className="project1">
      <div className="project1__navbar">
        <div className="project1__navbar-left">
          <h2>Color Flipper</h2>
        </div>
        <div className="project1__navbar-right">
          <h3>Simple</h3>
          <h3>Hex</h3>
        </div>
      </div>
      <div className="project1__body">
        <div className="project__body-container">
          <div className="bg-color" style={{ textAlign: "center" }}></div>
          <button onClick={randomColors}>Click me</button>
        </div>
      </div>
    </div>
  );
};

export default Projects1;
