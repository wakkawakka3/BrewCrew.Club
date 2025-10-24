import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cafes from "./pages/Cafes";
import Forum from "./pages/Forum";
import ForumPost from "./pages/ForumPost";
import Guide from "./pages/Guide";
import AboutUs from "./pages/AboutUs";
import Join from "./pages/Join";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafes" element={<Cafes />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/forum-post" element={<ForumPost />} />
      <Route path="/blog" element={<Guide />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/join" element={<Join />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
