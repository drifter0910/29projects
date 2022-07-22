import React, { useState } from "react";
import "./Project5.scss";
const Project5 = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="project5">
      <div className={toggle ? "project5__navbar" : "project5__navbar active"}>
        <div className="project5__logo">
          <img
            style={{ padding: "1rem" }}
            src={
              "https://vanilla-js-basic-project-5-sidebar.netlify.app/logo.svg"
            }
            alt=""
          />
          <i
            onClick={() => setToggle(true)}
            className="project5__close"
            style={{
              marginRight: "1rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "red",
            }}
            class="fas fa-times"
          ></i>
        </div>
        <div className="project5__list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="project5__bars">
        <i
          style={{ cursor: "pointer" }}
          onClick={handleToggle}
          class="fa-solid fa-bars"
        ></i>
      </div>
    </div>
  );
};

export default Project5;
