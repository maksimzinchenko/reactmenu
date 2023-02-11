import React, { useState } from "react";

import classes from "./AddMealForm.module.css";

const AddMealForm = (props) => {
  const [mealName, setMealName] = useState('');
  const [mealPrice, setMealPrice] = useState(0);

  // const {isLoading, isError, sendRequest: sendNewMealRequest} = useHttp();


  const clearFields = () => {
    setMealName('');
    setMealPrice(0);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const newMeal = {
      name: mealName,
      price: mealPrice,
    };
    clearFields();
    props.onAddMeal(newMeal);
    
  };

  const onCancelHandler = event => {
    props.onCancelAddMeal();
  }

  const mealNameChangeHandler = event => {
    setMealName(event.target.value);
  }

  const mealPriceChangeHandler = event => {
    setMealPrice(event.target.value);
  }

  return (
    <form onSubmit={submitHandler} className={classes.AddMealForm}>
      <div className={classes.control}>
        <label htmlFor="mealName"></label>
        <input type="text" id="mealName" value={mealName} onChange={mealNameChangeHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="mealPrice"></label>
        <input type="number" id="mealPrice" value={mealPrice} onChange={mealPriceChangeHandler}/>
      </div>
      <div className={classes.actions}>
        <button onClick={onCancelHandler} className={classes.cancelButton}>Cancel</button>
        <button type="submit" className={classes.submitButton}>Add new</button>
      </div>
    </form>
  );
};

export default AddMealForm;
