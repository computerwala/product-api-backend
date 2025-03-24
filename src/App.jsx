import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const ProductDetails = lazy(() => import('./pages/ProductDetails'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Suspense>
  );
};

export default App;