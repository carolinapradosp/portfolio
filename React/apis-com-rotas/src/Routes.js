import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Futebol from "./Futebol";
import Basquete from "./Basquete";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/futebol" element={<Futebol />} />
        <Route path="/basquete" element={<Basquete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
