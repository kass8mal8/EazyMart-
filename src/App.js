import React from "react";
import "./style.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Mainproducts from "./Mainproducts"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<Mainproducts/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
