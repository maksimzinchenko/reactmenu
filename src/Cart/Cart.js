import { useContext } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

import CartContext from "../store/cart-context";

import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    console.log(id);
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes.mealsCartList}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCartHandler}>
      <h2 className={classes.cartHeader}>Your order</h2>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes.closeCartButton}
          onClick={props.onHideCartHandler}
        >
          Close
        </button>
        {hasItems && <button className={classes.orderButton}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
