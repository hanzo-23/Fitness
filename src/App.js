import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {Shop} from './pages/Shop';
import {Exercises} from './pages/Exercises';
import {Meals} from './pages/Meals';
import {Gear} from './pages/Gear';
import {Apparel} from './pages/Apparel';
import {Contact} from './pages/Contact';
import {Login} from './pages/authentication/Login';
import { Register } from './pages/authentication/Register';
import { ForgotPass } from './pages/authentication/ForgotPass';
import { Profile } from './pages/Profile';
import { Supplements } from './pages/Supplements';
import { ThemeContext } from './context/ThemContext';
import './App.css';


function App() {

const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("isLoggedIn") === "true");
const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")) || null);

const [theme, setTheme] = useState('dark');


const OnLogout=()=>{
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
  setIsLoggedIn(false)
};



  return (
    <Router>
      <div className="App">
        <div className={`app-container ${theme}`}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <Navbar isLoggedIn={isLoggedIn} setTheme={setTheme} />
            <Routes>
              <Route path="/" element={user ? <Exercises /> : <Navigate to="/Login" replace />} />
              <Route path="/Exercises" element={user ? <Exercises /> : <Navigate to="/Login" replace />} />
              <Route path="/Meals" element={user ? <Meals /> : <Navigate to="/Login" replace />} />
              <Route path="/Shop" element={<Shop/>}></Route>
              <Route path="/Gear" element={<Gear/>} />
              <Route path="/Apparel" element={<Apparel/>} />
              <Route path="/Supplements" element={<Supplements />} />
              <Route path="/Contact" element={<Contact/>} />
              <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>} />
              <Route path="/Register" element={<Register  setUser={setUser} />}/>
              <Route path="/ForgotPass" element={<ForgotPass/>}/>
              <Route path="/Profile" element={<Profile setIsLoggedIn={setIsLoggedIn} OnLogout={OnLogout} user={user} setUser={setUser}/>}/>
            </Routes>
          </ThemeContext.Provider>
        </div>
      </div>
    </Router>
  );
}

export default App;
