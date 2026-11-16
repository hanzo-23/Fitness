import React, { useState } from "react";
import { ExercisesData } from "../components/ExercisesData";
import "./Exercises.css";

export const Exercises = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const muscles = [
    "chest",
    "back",
    "shoulders",
    "biceps",
    "triceps",
    "quads",
    "hamstrings",
    "glutes",
    "calves",
    "abs",
    "skills",
  ];

  if (selectedMuscle === null) {
    return (
      <div className="exercises-page">
        <div className="exercises-header">
          <h1>
            Choose a <span>muscle</span>
          </h1>
        </div>

        <div className="muscle-cards">
          {muscles.map((muscle) => {
            const count = ExercisesData.filter((e) => e.muscle === muscle).length; //to show he nb of muscle exercises
            return (

              <button
                className="muscle-card"
                key={muscle}
                onClick={() => setSelectedMuscle(muscle)}
                type="button"
              >
                <h2>{muscle}</h2>
                <p>{count} Exercises</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const filteredExercises = ExercisesData.filter(
    (exercise) => exercise.muscle === selectedMuscle
  );

  return (
    <div className="exercises-page">
      <div className="exercises-header">
        <h1>  Exercises for <span>{selectedMuscle}</span>  </h1>
      </div>

      <div className="page-actions">

        <button className="back-btn" onClick={() => setSelectedMuscle(null)}> Back </button>
      </div>

      <div className="exercise-cards">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((exercise) => (
            <div className="exercise-card" key={exercise.name}>
              <h3>{exercise.name}</h3>
              <p>
                <strong>Type:</strong> {exercise.type}
              </p>
              <p>
                <strong>Equipment:</strong> {exercise.equipment}
              </p>
              <p>
                <strong>Level:</strong> {exercise.level}
              </p>
              <p>
                <strong>Location:</strong> {exercise.location}
              </p>
            </div>
          ))
        ) : (
          <div className="exercise-card empty-state">
            <h3>No exercises found</h3>
            <p>Try another muscle group.</p>
          </div>
        )}
      </div>
    </div>
  );
};