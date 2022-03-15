import React from "react";
import { Routes, Route } from "react-router-dom";
import Score from "../pages/score";
import Fielding from "../pages/fielding";
import Batting from "../pages/batting";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/score" element={<Score />} />
        <Route path="/fielding" element={<Fielding />} />
        <Route path="/batting" element={<Batting />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
