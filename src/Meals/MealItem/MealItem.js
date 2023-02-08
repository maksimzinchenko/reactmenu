import { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import MealImage from "../../media/bakery.jpg";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const itemCount = cartCtx.getItemCount(props.id);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amount,
      price: props.price,
    });
  };

  const removeFromCartHandler = (amount) => {
    cartCtx.removeItem(props.id);
  };

  return (
    <li className={classes.mealELement}>
      <img className={classes.mealImage} src={MealImage} alt="bakery" />
      <div>
        <h3 className={classes.mealTitle}>{props.title}</h3>
      </div>
      {/* <div className={classes.mealDescription}>{props.description}</div> */}
      <div className={classes.mealPrice}>{price}</div>
      <MealItemForm
        itemCount={itemCount}
        onAddToCart={addToCartHandler}
        onRemoveFromCart={removeFromCartHandler}
      />
    </li>
  );
};

export default MealItem;
