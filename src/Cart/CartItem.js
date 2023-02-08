import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price * props.amount}`;
  const amount = `$${props.price * props.amount}`;

  return (
    <li className={classes.cartItem}>
      <div className={classes.itemInfo}>
        <h2 className={classes.itemTitle}>{props.name}</h2>
        {/* <div className={classes.summary}> */}
        {/* <span className={classes.price}>{amount}</span> */}
        {/* </div> */}
      </div>
      <div className={classes.actions}>
        <button className={classes.removeButton} onClick={props.onRemove}>
          <span>-</span>
        </button>
        <span className={classes.amount}>{props.amount}</span>
        <button className={classes.addButton} onClick={props.onAdd}>
          <span>+</span>
        </button>
      </div>
      <div className={classes.itemSubtotal}>
        <span className={classes.subsum}>{amount}</span>
      </div>
    </li>
  );
};

export default CartItem;
