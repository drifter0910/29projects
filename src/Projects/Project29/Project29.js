import React, { useContext, useEffect, useState } from "react";
import "./Project29.scss";
import axios from "axios";
import CartContext from "../../context/CartContext";
import { Row, Col } from "antd";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
const Project29 = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const { products, fetchProducts, addToCart } = useContext(CartContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios.get("https://course-api.com/javascript-store-products").then((res) => {
      fetchProducts(res.data);
      console.log(res.data);
    });
  };
  const handleAddToCart = (item) => {
    addToCart(item);
    setToggle(false);
  };
  return (
    <div className="project29">
      <Navbar setToggle={setToggle} toggle={toggle} />
      <div className="project29__hero">
        <div className="project29__hero-desc">
          <h1>Rest, Relax, Unwind</h1>
          <h2>Embrace your choices - we do</h2>
          <div>
            <button onClick={() => navigate("allproduct")} className="project29__button">
              SHOW NOW
            </button>
          </div>
        </div>
      </div>
      <div className="project29__features">
        <h2>/ Featured</h2>
        <Row gutter={[32, 32]}>
          {products.slice(0, 3)?.map((item, index) => {
            return (
              <Col key={item.id} lg={8} md={24} xs={24}>
                <div className="project29__features-item">
                  <img src={item.fields.image.map((image) => image.url)} alt="" />
                  <p>{item.fields.name}</p>
                  <span>${item.fields.price}</span>
                  <button
                    onClick={() => navigate(`/project29/${item.id}`)}
                    className="features-btn1"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <button className="features-btn2" onClick={() => handleAddToCart(item)}>
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
        <button onClick={() => navigate("allproduct")}>ALL PRODUCTS</button>
      </div>
      <div
        className={toggle ? "project29__cart-modal-wrapper" : "project29__cart-modal-wrapper show"}
      >
        <Modal setToggle={setToggle} toggle={toggle} />
      </div>
    </div>
  );
};

export default Project29;
