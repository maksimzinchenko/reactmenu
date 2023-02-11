import React, { useRef } from "react";

import classes from "./AddMealForm.module.css";

const AddMealForm = (props) => {
  const mealName = useRef("");
  const mealPrice = useRef(0);

  const clearFields = () => {
    mealName.current.value = '';
    mealPrice.current.value = 0;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const newMeal = {
      name: mealName.current.value,
      price: mealPrice.current.value,
    };
    props.onAddMeal(newMeal);
    clearFields();
  };

  const onCancelHandler = event => {
    props.onCancelAddMeal();
  }

  return (
    <form onSubmit={submitHandler} className={classes.AddMealForm}>
      <div className={classes.control}>
        <label htmlFor="mealName"></label>
        <input type="text" id="mealName" ref={mealName} />
      </div>
      <div className={classes.control}>
        <label htmlFor="mealPrice"></label>
        <input type="number" id="mealPrice" ref={mealPrice} />
      </div>
      <div className={classes.actions}>
        <button onClick={onCancelHandler} className={classes.cancelButton}>Cancel</button>
        <button type="submit" className={classes.submitButton}>Add new</button>
      </div>
    </form>
  );
};

export default AddMealForm;
