import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useState } from 'react'
import './App.css'
import Signup from "./pages/signup";
import Login from "./pages/login";
import Home from "./pages/home";
import Settings from "./pages/settings";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  
  return (
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
         </Routes>
      </BrowserRouter>
  );
}

export default App
