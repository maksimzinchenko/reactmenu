import React, { useState } from "react";

import axios from "axios";

import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import AddMealForm from "./Meals/MealItem/AddMealForm";




import CartProvider from "./store/cartProvider";

import classes from './App.module.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showAddMealForm, setShowAddMealForm] = useState(false);

  const client = axios.create({
    baseURL: window.location.origin + "/menu_items",
  });

  const showCartHandler = event => {
    setCartIsShown(true);
  }


  const hideCartHandler = event => {
    setCartIsShown(false);
  }

  const onShowAddMealFormHandler = event => {
    setShowAddMealForm(true);
  }

  const onCancelAddMealHandler = event => {
    setShowAddMealForm(false);
  }



  const addMealItem = async (newMeal) =>  {
    
    try {
      console.log(window.location.origin + "/menu_items");
      console.log(newMeal);
      const response = await axios.post(window.location.origin + "/menu_items", newMeal);
      console.log(response);
      setShowAddMealForm(false);
      // setMealsList(response.data);
    } catch (error) {
      console.log(error);
      // setIsError({ result: true, message: error.message });
      // setMealsList([]);
    }

  };

  const addMealHandler = newMeal => {
    console.log(newMeal);
    addMealItem(newMeal);
  }




  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCartHandler={hideCartHandler} />}
      <Header onShowCartHandler={showCartHandler} onShowAddMealFormHandler={onShowAddMealFormHandler}/>
      <div className={classes.container}>
      <main className={classes.some}>
        {!showAddMealForm && <Meals />}
        {showAddMealForm && <AddMealForm onAddMeal={addMealHandler} onCancelAddMeal={onCancelAddMealHandler}/>}
      </main>
      </div>
    </CartProvider>
    
  );
}

export default App;
