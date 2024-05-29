import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import burgerImage from "../../../public/images/burger.jpg";
import curryImage from "../../../public/images/curry.jpg";
import dumplingsImage from "../../../public/images/dumplings.jpg";
import macnCheeseImage from "../../../public/images/macncheese.jpg";
import pizzaImage from "../../../public/images/pizza.jpg";
import schnitzelImage from "../../../public/images/schnitzel.jpg";
import tomatoSaladImage from "../../../public/images/tomato-salad.jpg";

const mealDetailPage = ({ params }) => {
  const meal = getMeal(params.mealSlug);
  const imageSource =
    meal.image === "/images/burger.jpg"
      ? burgerImage
      : meal.image === "/images/curry.jpg"
        ? curryImage
        : meal.image === "/images/dumplings.jpg"
          ? dumplingsImage
          : meal.image === "/images/macncheese.jpg"
            ? macnCheeseImage
            : meal.image === "/images/pizza.jpg"
              ? pizzaImage
              : meal.image === "/images/schnitzel.jpg"
                ? schnitzelImage
                : meal.image === "/images/tomato-salad.jpg"
                  ? tomatoSaladImage
                  : null;

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.image}>
          {imageSource && (
            <Image
              src={imageSource}
              width={450}
              height={300}
              alt={meal.title}
            />
          )}
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </div>
  );
};

export default mealDetailPage;
