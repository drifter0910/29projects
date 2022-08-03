import React, { useEffect, useState } from "react";
import "./Project10.scss";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
const Project10 = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const fixedNav = document.querySelector("#nav");
    const onscroll = (window.onscroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        fixedNav.classList.add("scrolled");
      } else {
        fixedNav.classList.remove("scrolled");
      }
    });
    onscroll();
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <div className="project10">
      <div id="header" className="project10__header">
        <nav id="nav" className="">
          <div
            className={
              toggle ? "project10__navbar show " : "project10__navbar "
            }
          >
            <div className="project10__navbar-left">
              <img
                src={
                  "https://vannilla-js-basic-project-10-scroll.netlify.app/logo.svg"
                }
                alt=""
              />
            </div>
            <div className="project10__ul">
              <ul>
                <Link spy={true} smooth={true} to={"header"}>
                  <li>Home</li>
                </Link>
                <Link offset={-70} spy={true} smooth={true} to={"about-us"}>
                  <li>About</li>
                </Link>
                <Link offset={-70} spy={true} smooth={true} to={"our-services"}>
                  <li>Services</li>
                </Link>
                <Link offset={-70} spy={true} smooth={true} to={"tour"}>
                  <li>Tour</li>
                </Link>
              </ul>
            </div>
            <i onClick={() => setToggle(!toggle)} className="fas fa-bars"></i>
          </div>
        </nav>
        <div className="project10__hero">
          <div className="project10__hero-content">
            <h1>scroll project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eos
              neque sunt in? Id, necessitatibus quos quisquam distinctio
              laudantium fugiat?
            </p>
            <button>explore tours</button>
          </div>
        </div>
      </div>
      <div id="about-us" className="project10__about-us">
        <p>
          ABOUT <span>US</span>
        </p>
      </div>
      <div id="our-services" className="project10__our-services">
        <p>
          OUR <span>SERVICES</span>
        </p>
      </div>
      <div id="tour" className="project10__tour">
        <p>
          FEATURED <span>TOURS</span>
        </p>
      </div>
      <div className="project10__footer">
        <p>
          Copyright © Backroads Travel Tours Company 2022. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Project10;
