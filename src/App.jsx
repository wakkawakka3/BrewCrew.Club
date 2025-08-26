import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cafes from './pages/Cafes';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Join from './pages/Join';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafes" element={<Cafes />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}

export default App;