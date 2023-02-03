import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import MealImage from "../../media/bakery.jpg"

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.mealELement}>

            <img className={classes.mealImage} src={MealImage} alt="bakery"/>

      <div>
        <h3 className={classes.mealTitle}>{props.title}</h3>
      </div>
      {/* <div className={classes.mealDescription}>{props.description}</div> */}
      <div className={classes.mealPrice}>{price}</div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
