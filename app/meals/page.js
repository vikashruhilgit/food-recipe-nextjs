import React, { Suspense } from "react";

import classes from "./page.module.css";
import Link from "next/link";
import Meals from "@/components/meals/meals";
import { getMeals } from "@/lib/meals";

export const MealsGrid = async () => {
  const meals = await getMeals();
  return <Meals meals={meals} />;
};

export default function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meal, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose you favorite recipe anf cook it your self.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<div className={classes.loading}>loading...</div>}>
          <MealsGrid />
        </Suspense>
      </main>
    </>
  );
}
