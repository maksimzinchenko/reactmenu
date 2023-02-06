import classes from "./Cart.module.css";

import Modal from "../UI/Modal";

const Cart = props => {
  const cartItems = (
    <ul >
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCartHandler}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
