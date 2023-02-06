import { useContext } from "react";

import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

import CartContext from "../store/cart-context";

import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes.mealsCartList}>
      {cartCtx.items.map((item) => (
        <CartItem name={item.name} price={item.price} amount={item.amount} onAdd={cartCtx.addItem} onRemove={cartCtx.removeItem}/>
      ))}
    </ul>
  );


  return (
    <Modal onClick={props.onHideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideCartHandler}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
