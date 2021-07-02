import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, dishType, mealType }) => {
  return(
    <div className={style.recipe}>
      <div className={style.header}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.subtitle}>
          <p>{Math.round(calories)} cal</p>
          <p>{dishType}</p>
          <p>{mealType}</p>
        </div>
      </div>
      <div className={style.body}>
        <p>Ingredients:</p>
        <ul className={style.ingredients}>
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
      </div>
      <img className={style.image} src={image} alt={title}/>
    </div>
  )
}

export default Recipe;