// import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MEALS_START = [
  { id: 1, name: "Meal 1", description: "Meal 1 description. ", price: 15 },
  { id: 2, name: "Meal 2", description: "Meal 2 description", price: 10 },
  { id: 3, name: "Meal 3", description: "Meal 3 description", price: 8 },
  { id: 4, name: "Meal 4", description: "Meal 4 description", price: 2 },
  { id: 5, name: "Meal 5", description: "Meal 5 description", price: 5 },
  { id: 6, name: "Meal 6", description: "Meal 6 description", price: 25 },
  { id: 7, name: "Meal 7", description: "Meal 7 description", price: 25 },
  { id: 8, name: "Meal 8", description: "Meal 8 description", price: 25 },
  { id: 9, name: "Meal 9", description: "Meal 9 description", price: 25 },
];

const AvailableMeals = () => {
  const mealsList = MEALS_START.map((meal) => (
    <MealItem
        key={meal.id}
      title={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
