import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './Home.js';
import Portfolio from "./Portfolio.js";
import ScrollToTop from "./components/scrollToTop/index.js";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
