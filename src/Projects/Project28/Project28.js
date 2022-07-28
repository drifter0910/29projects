import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Project28.scss";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const Project28 = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    fetchData(search);
  };
  //   const mess = document.querySelector(".project28__message");
  //   if (search === "") {
  //     mess.innerHTML = `<p class="project28__noti ">Please enter value</p>`;
  //   } else if (data.length === 0) {
  //     mess.innerHTML = `<p class="project28__noti ">No Matching Results. Please Try Again.</p>`;
  //   } else if (data.length > 0) {
  //     mess.removeChild(mess.firstElementChild);
  //   };

  const fetchData = async (params) => {
    await axios
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${params}`
      )
      .then((res) => {
        const json = res.data.query.search;
        setData(json);
      });
  };
  console.log(data);
  return (
    <div className="project28">
      <div className="container">
        <img
          src="https://vannilla-js-basic-project-28-wikipedia.netlify.app/wiki-logo.png"
          alt=""
        />
        <h1>Search Wikipedia</h1>
        <div className="project28__form">
          <input onChange={(e) => setSearch(e.target.value)} type="text" />
          <button onClick={() => handleSubmit(search)}>Search</button>
        </div>

        <Row gutter={[16, 16]}>
          <div className="project28__message"></div>
          {data?.map((item, index) => {
            return (
              <Col key={index} lg={8}>
                <div className="project28__card">
                  <a
                    target="_blank"
                    href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                  >
                    <h1>{item.title}</h1>
                    <p>{item.snippet}</p>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Project28;
