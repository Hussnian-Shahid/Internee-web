import React from 'react'
import Home from './Home'
import { Route, Routes } from "react-router-dom";  
import Internship from './Component/Internship';
import Program from './Component/Program';
import Student from './Component/Student';
import Design from './Component/Design';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/graduate program" element={<Program />} />
        <Route path="/student ambassador" element={<Student />} />
        <Route path="/apply" element={<Design />} />
      </Routes>
    </>
  );
}

export default App