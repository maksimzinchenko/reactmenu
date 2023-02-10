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

  let content = 'Something went wrong...';

  if (mealsList.length > 0){
    content = <ul className={classes.mealList}>{mealsList}</ul>;
  }

  if (isError["result"]) {
    content = <p className={classes.loadingParagraph}>{isError["message"]}</p>;
  }

  if (isLoading){
    content = <p className={classes.loadingParagraph}>Loading...</p>;
  }

  return (
    <section className={classes.some}>
      <Card>
        {content}
      </Card>
    </section>
  );
};

export default AvailableMeals;
