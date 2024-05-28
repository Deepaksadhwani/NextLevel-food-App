import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const MealPage = async () => {
  const meals = await getMeals();

  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals, <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealGrid meals={meals} />
      </main>
    </div>
  );
};

export default MealPage;
