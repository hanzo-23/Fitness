import "./Calculator.css";
import { Flame, BicepsFlexed, Wheat, Droplet } from "lucide-react";


export const Calculator = ({ profile }) => {
    
  if (!profile) return null;

  let height = Number(profile.height);
  let weight = Number(profile.weight);
  const age = Number(profile.age);
  const gender = profile.gender;
  const activityLevel = Number(profile.ActivityLevel ?? profile.activityLevel);

  if (profile.unit === "imperial") {
    height *= 2.54;
    weight *= 0.453592;
  }

  let bmr = 10 * weight + 6.25 * height - 5 * age;

  if (gender === "male") {
    bmr += 5;
  } else {
    bmr -= 161;
  }

  const calories = Math.round(bmr * activityLevel);

    const protein = Math.round((calories * 0.30) / 4);
  const carbs = Math.round((calories * 0.40) / 4);
  const fats = Math.round((calories * 0.30) / 9);
  
  return (
    <div className="calculator">
        <div className="calculator-header">
      <h2> <Flame/>Daily Calorie & Macro Plan</h2>
 </div>
      <div className="calorie-box">
        <p>Daily Calorie Intake</p>
        <h3>{calories} kcal</h3>
      </div>

      <div className="macros">
        <div className="macro protein">
            <div className="macro-icon">
                <BicepsFlexed />
            </div>
          <h4>Protein</h4>
          <h3>{protein} g</h3>
          <span>≈ 30%</span>
        </div>

        <div className="macro carbs">
            <div className="macro-icon">
                <Wheat />
            </div>
          <h4>Carbs</h4>
          <h3>{carbs} g</h3>
          <span>≈ 40%</span>
        </div>

        <div className="macro fats">
            <div className="macro-icon">
                <Droplet/>
            </div>
          <h4>Fats</h4>
          <h3>{fats} g</h3>
          <span>≈ 30%</span>
        </div>
      </div>
      </div>
  );

}