import React, { useState } from "react";
import "./Project9.scss";
import video from "../../assets/video.mp4";
const Project9 = () => {
  const [toggle, setToggle] = useState(true);
  const handleAction = () => {
    const videoo = document.querySelector(".project9__video");
    const button = document.querySelector(".project9__button");
    setToggle(!toggle);
    if (!button.classList.contains("active")) {
      videoo.pause();
    } else {
      videoo.play();
    }
  };
  return (
    <div className="project9">
      <video
        muted
        autoPlay
        loop
        width="100%"
        height="100%"
        className="project9__video"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="project9__text">
        <h1>Video Project</h1>
      </div>
      <button
        onClick={handleAction}
        className={toggle ? "project9__button" : "project9__button active"}
      >
        <span style={{ paddingLeft: "10px" }}>Play </span>
        <span style={{ paddingRight: "10px" }}>Pause</span>
        <span className="switch"></span>
      </button>
    </div>
  );
};

export default Project9;
