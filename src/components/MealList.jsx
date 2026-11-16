import React from "react";

export const MealList = ({ meals, onDeleteMeal }) => {
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  return (
    <div className="meal-list">
      {mealTypes.map((mealType) => (
        <div className="meal-card" key={mealType}>
          <h2>{mealType}</h2>
          <ul>
            {meals
              .map((meal, index) =>
                meal.mealType === mealType ? (
                  <li key={index}>
                    {meal.food}{" "}
                    <button type="button" onClick={() => onDeleteMeal(index)}>
                      Delete
                    </button>
                  </li>
                ) : null
              )}
          </ul>
        </div>
      ))}
    </div>
  );
};
