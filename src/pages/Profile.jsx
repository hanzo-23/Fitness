import React from "react";
import { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Profile.css";
import man from "../pictures/man.jpeg";
import woman from "../pictures/women.jpeg";
import {Calculator} from "../components/Calculator.jsx";

export const Profile = ({ OnLogout, user }) => {

const profileStorageKey = user?.email
  ? `profile-${user.email.toLowerCase().trim()}`
  : null;

const [saved, setSaved] = useState(() => {
  if (!profileStorageKey) return null;

  const savedProfile = localStorage.getItem(profileStorageKey);
  return savedProfile ? JSON.parse(savedProfile) : null;
});
const [showList,setshowList]=useState(saved !== null);

useEffect(() => {
  if (saved && profileStorageKey) {
    localStorage.setItem(profileStorageKey, JSON.stringify(saved));
  }
}, [saved, profileStorageKey]);


  const ActivityLevels = [
    { id: 1, label: "Sedentary (little or no exercise)", value: 1.2 },
    { id: 2,label: "Lightly active (light exercise/sports 1-3 days/week)", value: 1.375 },
    { id: 3,label: "Moderately active (moderate exercise/sports 3-5 days/week)", value: 1.55 },
    {id: 4,label: "Very active (hard exercise/sports 6-7 days a week)",value: 1.725},
    {id: 5,label:"Extra active (very hard exercise/sports & physical job or 2x training)",value: 1.9},
  ];

  const [loggedOut, SetLoggedOut] = useState(false);
  const [metric, setMetric] = useState(true);

  const imperial = [
    { id: 1, label: "4ft 7in", inches: 55 },
    { id: 2, label: "4ft 8in", inches: 56 },
    { id: 3, label: "4ft 9in", inches: 57 },
    { id: 4, label: "4ft 10in", inches: 58 },
    { id: 5, label: "4ft 11in", inches: 59 },
    { id: 6, label: "5ft 0in", inches: 60 },
    { id: 7, label: "5ft 1in", inches: 61 },
    { id: 8, label: "5ft 2in", inches: 62 },
  ];

  const [profileForm, setProfileForm] = useState({
    profilePic: null,
    userName: user?.name || "",
    number:"",
    gender: "",
    unit: "",
    height: "",
    weight: "",
    ActivityLevel: "Select Activity Level",
    age: "",
    location: ""
   
  });

  const handelLogout = () => {
    OnLogout();
    SetLoggedOut(true);
  };
  if (loggedOut) return <Navigate to="/Login" />;
  if (!user) return <Navigate to="/Login" replace />;

 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    
     const errors = [];
     if (!profileForm.userName.trim()) errors.push("Full name is required.");
     if (!profileForm.gender.trim()) errors.push("Gender is required.");
     if (!profileForm.unit.trim()) errors.push("Unit is required.");
     if (!profileForm.number.trim()) errors.push("Phone is required.");
     if (!profileForm.height.trim()) errors.push("Height is required.");
     if (!profileForm.weight.trim()) errors.push("Weight is required."); 
     if (!profileForm.age.trim()) errors.push("Age is required.");
     if (isNaN(Number(profileForm.age)) || Number(profileForm.age) <= 0 || Number(profileForm.age) >=90) errors.push("Age must be a valid number");

     if (errors.length > 0) {
        alert(errors.join("\n"));}

      
        else {
      setSaved(profileForm); 
       setshowList(true);
       setProfileForm({
       profilePic: null, userName: user?.name || "", number: "", gender: "",
    unit: "", height: "", weight: "", ActivityLevel: ActivityLevels[0].value,
    age: "", location: ""
     });
      setMetric(true);
      
}};


const handleEdit = () => {
  setProfileForm(saved);
  setMetric(saved.unit === "metric");
  setshowList(false);
};

const handlePhotoChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () =>
    setProfileForm({ ...profileForm, profilePic: reader.result });
  reader.readAsDataURL(file);
};

  return (
    
 

      <div className="profile">

        <div className="profile-header">
          <h1>
            Personal<span> Details</span>
            <button id="logout-button" onClick={handelLogout}>
              Logout
            </button>
          </h1>
        </div>
{!showList && (
        <div className="profile-content">
          <form className="personal-form" onSubmit={handleSubmit}>

            <div className="form-group photo-group">
              <label>Profile Photo</label>
              <input id="profile-photo" type="file" accept="image/*" 
                onChange={handlePhotoChange}/>
              
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                id="name"
                value={profileForm.userName}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, userName: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <div className="gender">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={profileForm.gender === "female"}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, gender: e.target.value })
                    }
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={profileForm.gender === "male"}
                    onChange={(e) =>
                      setProfileForm({ ...profileForm, gender: e.target.value })
                    }
                  />
                  Male
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Unit</label>
              <select
                id="unit"
                value={profileForm.unit}
                onChange={(e) => {
                  setProfileForm({
                    ...profileForm,
                    unit: e.target.value,
                    height: "",
                    weight: "",
                  });
                  setMetric(e.target.value === "metric");
                }}
              >
                <option value="">Select Unit</option>
                <option value="metric">Metric</option>
                <option value="imperial">Imperial</option>
              </select>
            </div>

            <div className="form-group">
              <label>Height</label>
              {metric ? (
                <input
                  type="number"
                  id="height"
                  placeholder="cm"
                  value={profileForm.height}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, height: e.target.value })
                  }
                />
              ) : (
                <select
                  id="height"
                  value={profileForm.height}
                  onChange={(e) =>
                    setProfileForm({ ...profileForm, height: e.target.value })
                  }
                >
                  <option value="">Select height</option>
                  {imperial.map((height) => (
                    <option key={height.id} value={height.inches}>
                      {height.label}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="form-group">
              <label>Weight</label>
              <input
                type="number"
                id="weight"
                placeholder={metric ? "kg" : "lbs"}
                value={profileForm.weight}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, weight: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Activity Level</label>
              <select
                id="ActivityLevel"
                value={profileForm.ActivityLevel}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, ActivityLevel: e.target.value })
                }
              >
                <option value="">Select Activity Level</option>
                {ActivityLevels.map((level) => (
                  <option key={level.id} value={level.value}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                id="age"
                value={profileForm.age}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, age: e.target.value })
                }
              />
            </div>

            

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                id="location"
                value={profileForm.location}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, location: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input
                type="text"
                id="number"
                value={profileForm.number}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, number: e.target.value })
                }
              />
            </div>

            <button id="save-button" type="submit">  Save Profile </button>
          </form>

          <div className="fitness-pic">
            <img
              src={profileForm.profilePic || (profileForm.gender === "male" ? man : woman)}
              alt="Profile"
            />
          </div>
        </div>
)}

{ showList && saved && (
        <div className="list">
        
        <div className="user-list">

            <img
              src={saved.profilePic || (saved.gender === "male" ? man : woman)}
              alt={`${saved.userName}'s profile`}
            />

            <h3>Name&nbsp;:&nbsp;{saved.userName}</h3>
            <p>Gender&nbsp;:&nbsp;{saved.gender}</p>
            <p>Unit&nbsp;:&nbsp;{saved.unit}</p>
            <p>Height&nbsp;:&nbsp;{saved.height} {saved.unit === "metric" ? "cm" : "in"}</p>
             <p>Weight&nbsp;:&nbsp;{saved.weight}</p>
             <p>Activity Level&nbsp;:&nbsp;{saved.ActivityLevel}</p>
             <p>Age&nbsp;:&nbsp;{saved.age}</p>
             <p>location&nbsp;:&nbsp;{saved.location}</p>
             <p>Number&nbsp;:&nbsp;{saved.number}</p>

             <button id="edit-btn" onClick={handleEdit}>Edit</button>

          </div>
          <Calculator profile={saved} />
     </div>
      )}

      </div>
    
  );
};
