
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Login from './Pages/Login/Login';
import Welcoming from './Pages/Welcoming/Welcoming';
import Lessons from './Pages/Lessons/Lessons';
import Course from './Pages/Course/Course';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/home" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/welcoming" element={<Welcoming/>} exact />
        <Route path="/pickAlesson" element={<Lessons />} exact />
        <Route path="/course" element={<Course />} exact />





       
      </Routes>
    </Router>
  );
}

export default App;
