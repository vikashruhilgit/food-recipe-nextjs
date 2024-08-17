import React from "react";

import classes from "./meals.module.css";
import MealItem from "./meals-item";

export default function Meals({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
