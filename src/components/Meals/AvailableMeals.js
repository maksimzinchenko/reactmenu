import React, { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const baseURL = window.location.origin + "/menu_items";
  const [meals, setMealsList] = useState([]);

  const setMeals = (meals) => {
    setMealsList(meals);
  };

  const {
    isLoading,
    isError,
    sendRequest: fetchMeals,
  } = useHttp({ url: baseURL }, setMeals);

  useEffect(() => {
    fetchMeals();
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

  let content = "Something went wrong...";

  if (mealsList.length > 0) {
    content = <ul className={classes.mealList}>{mealsList}</ul>;
  }

  if (isError["result"]) {
    content = <p className={classes.loadingParagraph}>{isError["message"]}</p>;
  }

  if (isLoading) {
    content = <p className={classes.loadingParagraph}>Loading...</p>;
  }

  return (
    <section className={classes.some}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
