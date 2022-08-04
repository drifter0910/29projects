import React, { useContext, useEffect, useState } from "react";
import "./Project29.scss";
import { Row, Col } from "antd";
import CartContext from "../../context/CartContext";
import Navbar from "./Navbar";
import Modal from "./Modal";
import axios from "axios";
import { Link } from "react-router-dom";
const AllProduct = () => {
  const { products, addToCart, fetchProducts } = useContext(CartContext);
  const [filterData, setFilterData] = useState(products);
  const [toggle, setToggle] = useState(true);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios.get("https://course-api.com/javascript-store-products").then((res) => {
      fetchProducts(res.data);
      setFilterData(res.data);
    });
  };
  const mapCategory = products?.map((item) => {
    return item.fields.company;
  });
  let unique = [...new Set(mapCategory)];
  const handleFilter = (item) => {
    const fill = products.filter((data) => {
      return data.fields.company === item;
    });
    setFilterData(fill);
  };
  const handleAll = () => {
    setFilterData(products);
  };
  useEffect(() => {
    const result = products.filter((data) => {
      if (input === "") {
        return data;
      } else if (data.fields.name.toLowerCase().includes(input.toLowerCase())) {
        return data;
      }
    });
    setFilterData(result);
  }, [input]);
  const handleAddToCart = (item) => {
    addToCart(item);
    setToggle(false);
  };

  const handleFilterChange = () => {
    const priceInput = document.querySelector(".price-filter");
    const priceValue = document.querySelector(".price-value");
    let maxPrice = products.map((product) => product.fields.price);
    maxPrice = Math.max(...maxPrice);
    priceInput.max = maxPrice;
    priceInput.min = 0;
    priceValue.textContent = `Price: $ ${0}`;
    priceInput.addEventListener("input", () => {
      const value = parseInt(priceInput.value);
      priceInput.value = value;
      priceValue.textContent = `Price: $ ${value}`;
      const newProducts = products.filter((product) => product.fields.price <= value);
      setFilterData(newProducts);
    });
  };
  useEffect(() => {
    handleFilterChange();
  }, [products]);

  const color = "black";
  return (
    <div className="project20-wrapper">
      <Navbar setToggle={setToggle} toggle={toggle} color={color} />
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb">
          <h2>Home / Products</h2>
        </div>
      </div>
      <div className="project20">
        <Row gutter={[16, 16]}>
          <Col lg={6} md={6} xs={24}>
            <div className="project20__left">
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="search..."
                value={input}
              />
              <div>
                <h2>Company</h2>
                <h3 onClick={handleAll}>All</h3>
                {unique.map((item) => (
                  <h3 onClick={() => handleFilter(item)}>{item}</h3>
                ))}
              </div>
              <form className="price-form" action="">
                <input type="range" min="0" max="100" className="price-filter" />
                <p className="price-value"></p>
              </form>
            </div>
          </Col>
          <Col lg={18} md={18} xs={24}>
            <Row gutter={[16, 16]}>
              {filterData.length < 1 ? "Sorry, no products matched your search" : undefined}
              {filterData?.map((item) => (
                <Col key={item.id} className="project20__item-z" lg={8} md={12} xs={24}>
                  <img src={item.fields.image.map((image) => image.url)} alt="" />
                  <p>{item.fields.name}</p>
                  <h5>${item.fields.price}</h5>
                  <button className="features-btn1">
                    <Link to={`/project29/${item.id}`} state={item}>
                      <i className="fas fa-search"></i>
                    </Link>
                  </button>
                  <button className="features-btn2" onClick={() => handleAddToCart(item)}>
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <div
          className={
            toggle ? "project29__cart-modal-wrapper" : "project29__cart-modal-wrapper show"
          }
        >
          <Modal setToggle={setToggle} toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
