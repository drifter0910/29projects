import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import axios from "axios";
const Project24Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
      .then((res) => {
        setData(res.data.drinks);
      });
  };
  let item = data?.find((item) => {
    return item.idDrink === id;
  });

  console.log(item);
  const list = item && [
    item.strIngredient1,
    item.strIngredient2,
    item.strIngredient3,
    item.strIngredient4,
    item.strIngredient5,
  ];

  return (
    <div className="wrapper">
      <div className="project22-detail">
        <Row gutter={[32, 32]}>
          <Col lg={12} xs={24}>
            <img src={item?.strDrinkThumb} alt="" />
          </Col>
          <Col className="project22-detail__item" lg={12} xs={24}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              {item?.strDrink}
            </h1>
            <p style={{ letterSpacing: "1px", fontSize: "1rem" }}>
              {item?.strInstructions}
            </p>
            {list?.map((item) => (
              <div>
                {item !== null ? (
                  <div>
                    <i
                      style={{ marginRight: "1rem" }}
                      class="far fa-check-square"
                    ></i>
                    {item}
                  </div>
                ) : undefined}
              </div>
            ))}
            <button
              style={{ backgroundColor: "#49a6e9", marginTop: "1rem" }}
              onClick={() => navigate(-1)}
            >
              ALL COCKTALS
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Project24Detail;
