import React, {useEffect, useState} from "react";
import axios from "axios";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const client = axios.create({
  baseURL: window.location.origin + "/menu_items" 
});



const AvailableMeals = () => {
  const [meals, setMealsList] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await client.get("/");
      setMealsList(response.data);
    }
    getMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      title={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.some}>
      <Card>
        <ul className={classes.mealList}>
          
          {mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
