import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Project26.scss";
const Project26 = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="project26">
      <div className="project26__navbar">
        <div className="project26__navbar">
          <div className="project26__navbar-left">
            <img
              src="https://vannilla-js-basic-project-26-stripe-submenus.netlify.app/images/logo.svg"
              alt=""
            />
            <div className="project26__mobile">
              <i onClick={() => setToggle(!toggle)} class="fas fa-bars"></i>
            </div>
          </div>
          <div className="project26__link">
            <ul>
              <li>
                Products
                <div className="project26__submenu">
                  <h3>Products</h3>
                  <div className="project26__submenu-item">
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>Payment</h4>
                    </Link>
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>Terminal</h4>
                    </Link>
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>Connect</h4>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                Developers
                <div className="project26__submenu">
                  <h3>Developers</h3>

                  <div className="project26__submenu-item">
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>Plugin</h4>
                    </Link>
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>Libraries</h4>
                    </Link>
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>Plugin</h4>
                    </Link>
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>Billing</h4>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                Company
                <div
                  className="project26__submenu"
                  style={{ minWidth: "400px" }}
                >
                  <h3>Company</h3>
                  <div className="project26__submenu-item">
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>About</h4>
                    </Link>
                    <Link to="">
                      <i className="fas fa-book"></i>
                      <h4>Customer</h4>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="project26__navbar-right">
            <button>Sign in</button>
          </div>
        </div>
      </div>
      <div className={toggle ? "modal-wrapper" : "modal-wrapper show"}>
        <div className="project26__modal">
          <div className="project26__modal-list">
            <h3>Products</h3>
            <div className="project26__modal-item">
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>Payment</h4>
              </Link>
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>Terminal</h4>
              </Link>
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>Connect</h4>
              </Link>
            </div>
          </div>
          <div className="project26__modal-list">
            <h3>Company</h3>
            <div className="project26__modal-item">
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>About</h4>
              </Link>
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>Customer</h4>
              </Link>
            </div>
          </div>
          <div className="project26__modal-list">
            <h3>Developers</h3>
            <div className="project26__modal-item">
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>Plugins</h4>
              </Link>
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>Libraries</h4>
              </Link>
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>Plugins</h4>
              </Link>
              <Link to="">
                <i className="fas fa-book"></i>
                <h4>Plugins</h4>
              </Link>
            </div>
          </div>
          <i onClick={() => setToggle(true)} class="fas fa-times"></i>
        </div>
      </div>
      <div className="project26__hero">
        <div className="project26__hero-desc">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button>Start now</button>
        </div>
        <div className="project26__hero-img">
          <img
            src="https://vannilla-js-basic-project-26-stripe-submenus.netlify.app/images/phone.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Project26;
