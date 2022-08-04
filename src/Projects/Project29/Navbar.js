import React, { useContext } from "react";
import "./Project29.scss";
import logo from "./logo.svg";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setToggle, toggle, color }) => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  return (
    <div className="project29__navbar">
      <div className="project29__link">
        <ul>
          <li style={{ color: `${color}` }} onClick={() => navigate("/project29")}>
            Home
          </li>
          <li style={{ color: `${color}` }} onClick={() => navigate("/project29/allproduct")}>
            Products
          </li>
          <li onClick={() => navigate("/project29/about")} style={{ color: `${color}` }}>
            About
          </li>
        </ul>
      </div>
      <div className="project29__navbar-left">
        <img style={{ color: `${color}` }} src={logo} alt="" />
      </div>
      <div className="project29__navbar-cart">
        <button onClick={() => setToggle(!toggle)}>
          <i style={{ color: `${color}` }} className="fas fa-shopping-cart"></i>
          <span className="project29__navbar-qty">{cart.length}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
