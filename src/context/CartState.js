import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {
  const initialState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);
  const fetchProducts = (data) => {
    dispatch({ type: "FETCH_DATA", payload: data });
  };
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const incQty = (id) => {
    dispatch({ type: "INC_QTY", payload: id });
  };
  const descQty = (id) => {
    dispatch({ type: "DESC_QTY", payload: id });
  };
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        fetchProducts: fetchProducts,
        incQty: incQty,
        descQty: descQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartState;
