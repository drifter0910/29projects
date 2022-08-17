import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Project24.scss";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const Project24 = () => {
  const [data, setData] = useState("");
  const [term, setTerm] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData(term);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);
  const fetchData = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?`, {
        params: {
          s: term,
        },
      })
      .then((res) => {
        setData(res.data.drinks);
      });
  };
  const handleSearch = async (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="project24">
      <div className="container">
        <div className="project24__header">
          <h1>Cocktails API</h1>
          <input onChange={handleSearch} type="text" placeholder="Search Your Favorite Cocktails" />
        </div>
        <Row gutter={[50, 32]}>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            {data && data ? undefined : "Sorry,No Drinks Matched Your Search"}
          </div>
          {data &&
            data.map((item, index) => (
              <Col className="project24__item" key={index} lg={8} md={12} xs={24}>
                <Link to={`${item.idDrink}`} state={item}>
                  <h2>{item.strDrink}</h2>
                  <img src={item.strDrinkThumb} alt="" />
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};
export default Project24;
