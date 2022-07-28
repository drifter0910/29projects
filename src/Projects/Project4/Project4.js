import React, { useState } from "react";
import "./Project4.scss";
import { useNavigate, Link } from "react-router-dom";
import logo from "./logo.svg";
const Project4 = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  return (
    <div className="project4">
      <div
        style={{
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <nav style={{ backgroundColor: "white" }}>
          <div className="project4__navbar">
            <div className="project4__navbar-left">
              <img src={logo} alt="" />
            </div>
            <div className={toggle ? "project4__link" : "project4__link show"}>
              <ul>
                <li onClick={() => navigate("#")}>Home</li>
                <li onClick={() => navigate("about")}>About</li>
                <li onClick={() => navigate("project")}>Project</li>
                <li onClick={() => navigate("contact")}>Contact</li>
              </ul>
            </div>
            <div className="project4__navbar-right">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="https://www.twitter.com/">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a href="https://www.facebook.com/">
                <i className="fa-solid fa-gem" />
              </a>
            </div>
            <i onClick={() => setToggle(!toggle)} className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Project4;
