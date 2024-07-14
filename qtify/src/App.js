import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/Hero';
import { Route, Routes } from "react-router-dom";

function App() {
  const handleSearch = (query) => {
    console.log(query); // Implement search functionality
  };

  return (
    <div className="App">
      <Navbar searchData={handleSearch} />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Define additional routes here */}
      </Routes>
    </div>
  );
}

export default App;
