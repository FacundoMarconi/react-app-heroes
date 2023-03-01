import React from "react";
import { Navbar } from "../../ui";
import { Routes, Route, Navigate } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../../heroes";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-3 mb-3">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          {/* Search and HeroesID*/}
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
