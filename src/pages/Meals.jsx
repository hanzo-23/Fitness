import React, { useState } from 'react';
import { MealForm } from '../components/MealForm';
import { MealList } from '../components/MealList';
import './Meals.css';

export const Meals = () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  let mealStorageKey = 'Meals_guest';

  if (user && user.email) {
    mealStorageKey = 'Meals_' + user.email.trim().toLowerCase();
  }

  const savedMeals = JSON.parse(localStorage.getItem(mealStorageKey) || '[]');
  const [meals, setMeals] = useState(savedMeals);

  const deleteMeal = (mealIndex) => {
    const updatedMeals = meals.filter((meal, index) => index !== mealIndex);
    localStorage.setItem(mealStorageKey, JSON.stringify(updatedMeals));
    setMeals(updatedMeals);
  };

  return (
    <div className="meals-page">
      <div className="meals-Header">
        <h1>
          Meal <span>Plan</span>
        </h1>
      </div>
      <div className="meals-intro">
        <p>Log your meals and keep track of what you eat.</p>
      </div>
      <MealForm onMealsChange={setMeals} storageKey={mealStorageKey} />
      <MealList meals={meals} onDeleteMeal={deleteMeal} />
    </div>
  );
};
