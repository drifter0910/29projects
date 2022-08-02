import React, { useContext, useMemo } from "react";
import CartContext from "../../context/CartContext";

const Modal = ({ toggle, setToggle }) => {
  const { descQty, incQty, cart, removeFromCart } = useContext(CartContext);

  const total = cart
    .map((item) => item.fields.price * item.qty)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  console.log(total);
  return (
    <div className="project29__cart-modal">
      <div>
        <i onClick={() => setToggle(true)} className="fas fa-times"></i>
        <div className="yourbag">Your bag</div>
        <div style={{ padding: "1rem" }}>
          {cart?.map((item, index) => {
            return (
              <div className="project29__cart-item" key={item.id}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={item.fields.image.map((image) => image.url)}
                    alt=""
                  />
                  <div>
                    <p>{item.fields.name}</p>
                    <span>${item.fields.price}</span>
                    <br />
                    <h4 onClick={() => removeFromCart(item.id)}>remove</h4>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <i
                    style={{ fontSize: "1rem", margin: "0" }}
                    onClick={() => incQty(item.id)}
                    className="fas fa-chevron-up"
                  ></i>
                  {item.qty}
                  <i
                    style={{ fontSize: "1rem", margin: "0" }}
                    onClick={() => descQty(item.id)}
                    className="fas fa-chevron-down"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="project29__total">
        <h2>Total: ${total} </h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Modal;
