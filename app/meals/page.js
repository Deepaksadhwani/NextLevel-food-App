import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All Meals",
  description: "browse the delicious meals by our vibrant community.",
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
};

const MealPage = async () => {
  const meals = await getMeals();

  return (
    <div>
      <header className={classes.header}>
        <h1>
          Delicious meals,{" "}
          <span className={classes.highlight}>created by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<h1 className={classes.loading}>fetching meals...</h1>}
        >
          <Meals />
        </Suspense>
      </main>
    </div>
  );
};

export default MealPage;
