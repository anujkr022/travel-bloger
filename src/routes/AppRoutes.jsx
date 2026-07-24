import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Destinations from "../pages/Destinations";
import Packages from "../pages/Packages";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}