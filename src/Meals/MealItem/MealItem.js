import { useContext } from "react";

import CartContext from "../../store/cart-context";

import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import MealImage from "../../media/bakery.jpg";

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

const addToCartHandler = amount => {
  console.log(props);
  cartCtx.addItem({
    id: props.id,
    name: props.title,
    amount: amount,
    price: props.price
  });
}

  return (
    <li className={classes.mealELement}>
      <img className={classes.mealImage} src={MealImage} alt="bakery" />
      <div>
        <h3 className={classes.mealTitle}>{props.title}</h3>
      </div>
      {/* <div className={classes.mealDescription}>{props.description}</div> */}
      <div className={classes.mealPrice}>{price}</div>
      <MealItemForm onAddToCart={addToCartHandler}/>
    </li>
  );
};

export default MealItem;
