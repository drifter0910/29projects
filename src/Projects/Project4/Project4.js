import React from "react";
import "./Project4.scss";
import { useNavigate, Link } from "react-router-dom";
const Project4 = () => {
  const navigate = useNavigate();

  return (
    <div className="project4">
      <div
        style={{
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="project4__navbar">
          <div className="project4__navbar-left">
            <img
              src={
                "https://vanilla-js-basic-project-4-navbar.netlify.app/logo.svg"
              }
              alt=""
            />
          </div>
          <div className="project4__ul">
            <ul>
              <li onClick={() => navigate("home")}>Home</li>
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
        </div>
      </div>
    </div>
  );
};

export default Project4;
