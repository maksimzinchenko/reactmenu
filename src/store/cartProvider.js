import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {

    if (action.actionType === 'ADD_ITEM'){
        const newStateItems = state.items.concat(action.item);
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: newStateItems,
            totalAmount: newTotalAmount
        }
    }

    return defaultCartState;
}


const CartProvider = (props) => {

    const [cartState, dispatchCardAction] = useReducer(cartReducer, defaultCartState);


  const addItemToCartHamdler = (item) => {
    dispatchCardAction({
        actionType: 'ADD_ITEM',
        item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCardAction({
        actionType: 'REMOVE_ITEM',
        id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHamdler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
