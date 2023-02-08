import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price}`;

  return (
    <li className={classes.cartItem}>
      <div className={classes.itemInfo}>
        <h2 className={classes.itemTitle}>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}> x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.removeButton} onClick={props.onRemove}>
          -
        </button>
        <button className={classes.addButton} onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
