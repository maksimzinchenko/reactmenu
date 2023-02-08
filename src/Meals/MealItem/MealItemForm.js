import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const onAddHandler = (event) => {
    props.onAddToCart(1);
  };

  const onRemoveHandler = (event) => {
    props.onRemoveFromCart(1);
  };

  return (
    <div className={classes.cardControls}>
      <button className={classes.addButton} onClick={onAddHandler}>
        ADD
      </button>
      <input className={classes.itemCounter} value={props.itemCount} />
      <button className={classes.removeButton} onClick={onRemoveHandler}>
        REMOVE
      </button>
    </div>
  );
};

export default MealItemForm;
