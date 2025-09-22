import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cafes from "./pages/Cafes";
import Forum from "./pages/Forum";
import Guide from "./pages/Guide";
import AboutUs from "./pages/AboutUs";
import Join from "./pages/Join";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafes" element={<Cafes />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/blog" element={<Guide />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/join" element={<Join />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
