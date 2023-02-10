import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const client = axios.create({
  baseURL: window.location.origin + "/menu_items",
});

const AvailableMeals = () => {
  const [meals, setMealsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    result: false,
    message: "Something went wrong...",
  });

  useEffect(() => {
    async function getMeals() {
      setIsLoading(true);
      try {
        const response = await client.get("/");
        setMealsList(response.data);
      } catch (error) {
        setIsLoading(false);
        setIsError({ result: true, message: error.message });
        setMealsList([]);
      }
      setIsLoading(false);
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
        {!isLoading && mealsList.length > 0 && (
          <ul className={classes.mealList}>{mealsList}</ul>
        )}
        {!isLoading && !isError["result"] && mealsList.length === 0 && (
          <p className={classes.loadingParagraph}>No meals in menu</p>
        )}
        {isError["result"] && (
          <p className={classes.loadingParagraph}>{isError["message"]}</p>
        )}
        {isLoading && <p className={classes.loadingParagraph}>Loading...</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
