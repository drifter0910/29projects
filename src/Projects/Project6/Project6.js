import React, { useState } from "react";
import "./Project6.scss";
const Project6 = () => {
  const modalActive = {
    backgroundColor: "white",
  };
  const modalNonActive = {
    backgroundColor: "#a0cfef",
  };
  const [toggle, setToggle] = useState(true);
  return (
    <div className="project6">
      <div className={toggle ? "" : "project6__modal-overlay"}>
        <div
          className="project6__banner"
          style={toggle ? modalActive : modalNonActive}
        >
          <h1>Modal Project</h1>
          <button onClick={() => setToggle(!toggle)}>Open modal</button>
        </div>
        <div className={toggle ? "project6__modal" : "project6__modal active"}>
          <i
            onClick={() => setToggle(true)}
            className="project5__close fas fa-times"
            style={{
              marginRight: "1rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "red",
            }}
          ></i>
          <h2>Modal Content</h2>
        </div>
      </div>
    </div>
  );
};

export default Project6;
