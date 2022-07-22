import React from "react";
import "./Project1.scss";
import { useNavigate } from "react-router-dom";

const Projects1 = () => {
  const navigate = useNavigate();

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const randomNumbers = () => {
    return Math.floor(Math.random() * hex.length);
  };
  const randomColors = () => {
    const getBg = document.querySelector(".project1__body");
    const showColor = document.querySelector(".bg-color");
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumbers()];
    }
    getBg.style.backgroundColor = hexColor;
    showColor.innerHTML = `<h1 style="background-color: black; color:white; padding: 1rem; margin-bottom: 1rem; border-radius: 10px" >Background Color : ${hexColor}</h1>`;
  };
  return (
    <div className="project1">
      <div className="project1__navbar">
        <div className="project1__navbar-left">
          <h2>Color Flipper</h2>
        </div>
        <div className="project1__navbar-right">
          <h3 onClick={() => navigate("/project1")}>Simple</h3>
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
