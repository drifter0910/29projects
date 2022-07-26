import React, { useState } from "react";
import "./Project17.scss";
import nature1 from "./img/nature-1.jpeg";
import nature2 from "./img/nature-2.jpeg";
import nature3 from "./img/nature-3.jpeg";
import city1 from "./img/city-1.jpeg";
import city2 from "./img/city-2.jpeg";
import city3 from "./img/city-3.jpeg";
import city4 from "./img/city-4.jpeg";
import city5 from "./img/city-5.jpeg";
import { Row, Col } from "antd";
const Project17 = () => {
  const [toggle, setToggle] = useState(true);
  const nature = [
    {
      id: 1,
      name: "Nature-1",
      img: nature1,
    },
    {
      id: 2,
      name: "Nature-2",
      img: nature2,
    },
    {
      id: 3,
      name: "Nature-3",
      img: nature3,
    },
  ];
  const city = [
    {
      id: 1,
      name: "City-1",
      img: city1,
    },
    {
      id: 2,
      name: "City-2",
      img: city2,
    },
    {
      id: 3,
      name: "City-3",
      img: city3,
    },
    {
      id: 4,
      name: "City-4",
      img: city4,
    },
    {
      id: 5,
      name: "City-5",
      img: city5,
    },
  ];
  const [currentView, setCurrentView] = useState(0);
  const [modalArray, setModalArray] = useState();
  const [totalView, setTotalView] = useState();
  //   totalView = nature.length - 1;
  const handleNext = () => {
    if (currentView === totalView) {
      setCurrentView(0);
    } else if (currentView < totalView) {
      setCurrentView(currentView + 1);
    }
  };
  const handlePrev = () => {
    if (currentView === 0) {
      setCurrentView(totalView);
    } else if (currentView <= totalView) {
      setCurrentView(currentView - 1);
    }
  };
  const handleClick = (id, array) => {
    setCurrentView(id - 1);
    setToggle(!toggle);
    setModalArray(array);
    setTotalView(array.length - 1);
  };
  const handleMiniClick = (id) => {
    setCurrentView(id - 1);
    console.log(id);
  };
  return (
    <div className="project17-wrapper">
      <div className="project17">
        <Row gutter={[32, 24]} className="project7__container">
          {nature.map((item) => (
            <Col
              onClick={() => handleClick(item.id, nature)}
              lg={8}
              className="project17__img"
              key={item.id}
            >
              <img src={item.img} alt="" />
            </Col>
          ))}
        </Row>
        <Row gutter={[24, 24]} className="project7__container city">
          {city.map((item) => (
            <Col
              onClick={() => handleClick(item.id, city)}
              lg={8}
              className="project17__img"
              key={item.id}
            >
              <img src={item.img} alt="" />
            </Col>
          ))}
        </Row>
      </div>
      <div className={toggle ? "modal" : "modal open"}>
        <button onClick={() => setToggle(true)} className="closebtn">
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-content">
          <i onClick={handlePrev} className="fas fa-chevron-left"></i>
          <img src={modalArray && modalArray[currentView].img} alt="" />
          <i onClick={handleNext} className="fas fa-chevron-right"></i>
        </div>
        <h3>{modalArray && modalArray[currentView].name}</h3>
        <div className="modal-content-sub">
          {modalArray &&
            modalArray.map((item) => (
              // add ' open ' to opacity 1 (def =0.5)
              <div key={item.id} className="modal-img">
                <img
                  onClick={() => handleMiniClick(item.id)}
                  src={item.img}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project17;
