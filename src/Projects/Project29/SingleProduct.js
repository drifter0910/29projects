import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import CartContext from "../../context/CartContext";
import Navbar from "./Navbar";
import Modal from "./Modal";

const SingleProduct = () => {
  const { products, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  const { id } = useParams();
  let item = products.find((item) => {
    return item.id === id;
  });
  const color = "black";
  console.log(item);
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
          <Col lg={12}>
            <img src={item.fields.image.map((image) => image.url)} alt="" />
          </Col>
          <Col className="project22-detail__item" lg={12}>
            <h1 style={{ textTransform: "capitalize" }}>{item.fields.name}</h1>
            <h2>{item.fields.company}</h2>
            <p>${item.fields.price}</p>
            <p>{item.fields.desc}</p>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </Col>
        </Row>
        <div
          className={
            toggle
              ? "project29__cart-modal-wrapper"
              : "project29__cart-modal-wrapper show"
          }
        >
          <Modal setToggle={setToggle} toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
