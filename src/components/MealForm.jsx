import React, { useState } from "react";

export const MealForm = ({ onMealsChange, storageKey }) => {

  const [mealForm, setMeal] = useState({
    Breakfast: "",
    Lunch: "",
    Dinner: "",
    Snacks: "",
  });

  const handleLog = (mealType) => {
    if (!mealForm[mealType].trim()) {
      alert(`Please enter ${mealType.toLowerCase()} before logging it.`);
      return;
    }

    const savedMeals = JSON.parse(localStorage.getItem(storageKey) || "[]");
    savedMeals.push({
      mealType: mealType,
      food: mealForm[mealType],
    });
    localStorage.setItem(storageKey, JSON.stringify(savedMeals));
    onMealsChange(savedMeals);
    setMeal({ ...mealForm, [mealType]: "" });
    alert(`${mealType} logged!`);
  };

  return (

    <div className="meal-form">

      <div className="breakfast">
        <label htmlFor="breakfast">Breakfast</label>
        <input
          id="breakfast"
          type="text"
          value={mealForm.Breakfast}
          onChange={(e) => setMeal({ ...mealForm, Breakfast: e.target.value })}
        />
        <button type="button" onClick={() => handleLog("Breakfast")}>Log</button>
      </div>

      <div className="lunch">
        <label htmlFor="lunch">Lunch</label>
        <input
          id="lunch"
          type="text"
          value={mealForm.Lunch}
          onChange={(e) => setMeal({ ...mealForm, Lunch: e.target.value })}
        />
        <button type="button" onClick={() => handleLog("Lunch")}>Log</button>
      </div>

      <div className="dinner">
        <label htmlFor="dinner">Dinner</label>
        <input
          id="dinner"
          type="text"
          value={mealForm.Dinner}
          onChange={(e) => setMeal({ ...mealForm, Dinner: e.target.value })}
        />
        <button type="button" onClick={() => handleLog("Dinner")}>Log</button>
      </div>

      <div className="snacks">
        <label htmlFor="snacks">Snacks</label>
        <input
          id="snacks"
          type="text"
          value={mealForm.Snacks}
          onChange={(e) => setMeal({ ...mealForm, Snacks: e.target.value })}
        />
        <button type="button" onClick={() => handleLog("Snacks")}>Log</button>
      </div>
      
    </div>
  );
};
