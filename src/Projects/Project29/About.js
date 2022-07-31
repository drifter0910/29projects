import React, { useState } from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";
import "./Project29.scss";
const About = () => {
  const [toggle, setToggle] = useState(true);
  const color = "black";
  return (
    <div style={{ background: "white" }} className="project29">
      <Navbar color={color} setToggle={setToggle} toggle={toggle} />
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb">
          <h2>Home / About</h2>
        </div>
      </div>
      <div className="project29__about">
        <h1>/ Our History</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          accusantium sapiente tempora sed dolore esse deserunt eaque excepturi,
          delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta.
          Eos quod quisquam esse recusandae vitae neque dolore, obcaecati
          incidunt sequi blanditiis est exercitationem molestiae delectus saepe
          odio eligendi modi porro eaque in libero minus unde sapiente
          consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis
          nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate
          accusamus nesciunt totam vitae esse iste.
        </p>
      </div>
      <div
        className={
          toggle
            ? "project29__cart-modal-wrapper"
            : "project29__cart-modal-wrapper show"
        }
      >
        <Modal setToggle={setToggle} toggle={toggle} />
      </div>
    </div>
  );
};

export default About;
