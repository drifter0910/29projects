import React, { useEffect } from "react";
import "./Project18.scss";
const Project18 = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".number");
    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = target / 200;
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target + "+";
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div className="project18-wrapper">
      <div className="project18">
        <div className="project18__item">
          <h1 className="number" data-target="500"></h1>
          <h2>Succeeded Projects</h2>
        </div>
        <div className="project18__item">
          <h1 className="number" data-target="17140"></h1>
          <h2>Working Hours Spent</h2>
        </div>
        <div className="project18__item">
          <h1 className="number" data-target="1500"></h1>
          <h2>Happy Clients</h2>
        </div>
      </div>
    </div>
  );
};

export default Project18;
