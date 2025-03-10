import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/Home/HomePage.jsx';
import Login from './pages/Login/Login.jsx';
import Registration from './pages/Registration/RegistrationForm.jsx';
import Destinos from  './pages/Destinos/Destinos.jsx';
import SobreNosotros from './pages/SobreNosotros/SobreNosotros.jsx';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/about" element={<SobreNosotros />} />
      </Routes>
    </Router>
  );
}


