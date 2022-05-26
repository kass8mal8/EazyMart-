import React from "react";
import "./style.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './Header'
import Main from "./Main"
import ProductPage from './ProductPage'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/product" element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
