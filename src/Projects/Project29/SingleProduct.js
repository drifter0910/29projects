import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import CartContext from "../../context/CartContext";
import Navbar from "./Navbar";
import Modal from "./Modal";
import useTitle from "../../hooks/useTitle";
const SingleProduct = () => {
  const location = useLocation();
  const { addToCart } = useContext(CartContext);
  console.log(location);
  useTitle(location.state.fields.name);
  const [toggle, setToggle] = useState(true);
  const item = location.state;
  const color = "black";
  const handleCart = (item) => {
    addToCart(item);
    setToggle(false);
  };
  return (
    <div className="wrapper">
      <Navbar setToggle={setToggle} toggle={toggle} color={color} />
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb">
          <h2>Home / {item.fields.name}</h2>
        </div>
      </div>
      <div className="project22-detail">
        <Row gutter={[32, 32]}>
          <Col lg={12} md={12}>
            <img src={item.fields.image.map((image) => image.url)} alt="" />
          </Col>
          <Col className="project22-detail__item" lg={12} md={12}>
            <h1 style={{ textTransform: "capitalize" }}>{item.fields.name}</h1>
            <h2>{item.fields.company}</h2>
            <p>${item.fields.price}</p>
            <p>{item.fields.desc}</p>
            <button onClick={() => handleCart(item)}>Add To Cart</button>
          </Col>
        </Row>
        <Modal setToggle={setToggle} toggle={toggle} />
      </div>
    </div>
  );
};

export default SingleProduct;
