import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Project24.scss";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
const Project24 = () => {
  const [data, setData] = useState("");
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetchData(term);
  }, [term]);
  const fetchData = async (params) => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params}`)
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
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search Your Favorite Cocktails"
          />
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
            {data && data !== ""
              ? undefined
              : "Sorry,No Drinks Matched Your Search"}
          </div>
          {data &&
            data.map((item, index) => (
              <Col
                onClick={() => navigate(`${item.idDrink}`)}
                className="project24__item"
                key={index}
                lg={8}
                md={12}
                xs={24}
              >
                <h2>{item.strDrink}</h2>
                <img src={item.strDrinkThumb} alt="" />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};
export default Project24;
