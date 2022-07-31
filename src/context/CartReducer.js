const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      //Check the items data from the products array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //Check if item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((cartItem) =>
              item.id === action.payload.id
                ? {
                    ...cartItem,
                    qty: cartItem.qty + 1,
                  }
                : cartItem
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    }
    case "FETCH_DATA": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "INC_QTY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: (item.qty += 1) } : item
        ),
      };
    }
    case "DESC_QTY": {
      const zeroQty = state.cart.find((item) =>
        item.qty === 1 ? true : false
      );
      console.log(zeroQty);
      return {
        ...state,
        cart: zeroQty
          ? state.cart.filter((item) => {
              return item.id !== action.payload;
            })
          : state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, qty: (item.qty -= 1) }
                : item
            ),
      };
    }
    default:
      return state;
  }
};
export default CartReducer;
