import React from "react";
import style from "./recipe.module.css";

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>

      <h4>Ingredients:</h4>

      <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>

      <p>Calories: {Math.floor(calories * 100) / 100}</p>

      <img className={style.image} src={image} alt="" />
    </div>
  );
}

export default Recipe;
