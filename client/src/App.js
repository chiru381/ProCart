import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
import OrderHistory from "./pages/OrderHistory";
import SignOut from "./pages/SignOut";
import MobilesPage from "./pages/MobilesPage";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Support from "./pages/Support";
import LaptopsPage from "./pages/LaptopsPage";
import WatchesPage from "./pages/WatchesPage";
import Pay from './pages/Pay'
import Success from "./pages/Success"

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

          <Route exact path="/userprofile" element={<UserProfile />} />
          <Route exact path="/orderHistory" element={<OrderHistory />} />
          <Route exact path="/signout" element={<SignOut />} />

          <Route exact path="/mobiles" element={<MobilesPage />} />
          <Route exact path="/laptops" element={<LaptopsPage />} />
          <Route exact path="/watches" element={<WatchesPage />} />

          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/support" element={<Support />} />

          <Route exact path="/pay" element={<Pay />} />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
