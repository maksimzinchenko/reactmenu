import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.actionType === "ADD_ITEM") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const itemIndexInCart = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItemInCart = state.items[itemIndexInCart];
    let updatedItems;

    if (existingItemInCart) {
      const updatedItem = {
        ...existingItemInCart,
        amount: existingItemInCart.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itemIndexInCart] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.actionType === "REMOVE_ITEM") {
    const itemIndexInCart = state.items.findIndex(
      (item) => item.id === action.id
    );

    if (itemIndexInCart === -1) {
      return { ...state };
    }

    const existingItem = state.items[itemIndexInCart];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      console.log(existingItem.amount);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[itemIndexInCart] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCardAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHamdler = (item) => {
    dispatchCardAction({
      actionType: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCardAction({
      actionType: "REMOVE_ITEM",
      id: id,
    });
  };

  const getItemCounter = (id) => {
    const itemIndexInCart = cartState.items.findIndex((item) => item.id === id);

    if (itemIndexInCart === -1) {
      return 0;
    } else {
      return cartState.items[itemIndexInCart].amount;
    }
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHamdler,
    removeItem: removeItemFromCartHandler,
    getItemCount: getItemCounter,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
