import React, { useEffect, useState } from "react";
import "./Project23.scss";
import axios from "axios";
const Project23 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios.get("https://randomuser.me/api/").then((res) => {
      setData(res.data.results);
    });
  };
  const handleClick = () => {
    fetchData();
  };
  const buttons = document.querySelectorAll(".project23__btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e);
    });
  });
  const handleName = () => {};
  const handleEmail = () => {};
  const handleAge = () => {};
  const handleAddress = () => {};
  const handlePhone = () => {};
  const handlePassword = () => {};
  return (
    <div className="project23">
      <div className="project23__content">
        {data?.map((data, index) => (
          <div className="project23__card" key={index}>
            <div className="project23__img-wrap">
              <img src={data.picture.large} alt="" />
            </div>
            <div className="project23__desc">
              <p>My name is</p>
              <p>{`${data.name.first} ${data.name.last}`}</p>
            </div>
            <div className="project23__listbtn">
              <button onClick={handleName} className="project23__btn">
                <span className="far fa-user active"></span>
              </button>
              <button onClick={handleEmail} className="project23__btn">
                <span className="far fa-envelope-open"></span>
              </button>
              <button onClick={handleAge} className="project23__btn">
                <span className="far fa-calendar-times"></span>
              </button>
              <button onClick={handleAddress} className="project23__btn">
                <span className="far fa-map"></span>
              </button>
              <button onClick={handlePhone} className="project23__btn">
                <span className="fas fa-phone"></span>
              </button>
              <button onClick={handlePassword} className="project23__btn">
                <span className="fas fa-user-lock"></span>
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <button onClick={handleClick} className="random">
                Random User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project23;
