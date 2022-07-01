import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<Dashboard />} />

          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
