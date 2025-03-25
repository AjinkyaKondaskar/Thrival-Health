import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import OrderDashboard from './pages/orderdashboard';
import ProductListing from './pages/productlisting';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import DrugDetails from './pages/DrugDetails';
import Questionaire from './Questionaire';
import Checkout from './pages/CheckOut';
import SupabaseLogin from './pages/supabaselogin';
import { supabase } from './supabaseClient'; // ✅ import supabase

function App() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/supabaselogin'; // or use useNavigate() to redirect without full reload
  };

  return (
    <Router>
            <nav className="bg-white p-4 shadow-md flex justify-between items-center">
        {/* Left section: Logo + nav links */}
        <div className="flex items-center space-x-8">
          <img src="/images/logo.png" alt="Logo" className="h-8" />
          <ul className="flex space-x-6">
            <li><Link to="/telehealth" className="text-black text-lg px-2 py-1 hover:text-teal-600">Telehealth</Link></li>
            <li><Link to="/productlisting" className="text-black text-lg px-2 py-1 hover:text-teal-600">Products</Link></li>
            <li><Link to="/ourstory" className="text-black text-lg px-2 py-1 hover:text-teal-600">Our Story</Link></li>
            <li><Link to="/partner" className="text-black text-lg px-2 py-1 hover:text-teal-600">Partner With Us</Link></li>
          </ul>
        </div>

        {/* Right section: Auth buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-black text-lg px-3 py-1 hover:text-teal-600">Sign In</Link>
          <Link to="/supabaselogin" className="text-black text-lg px-3 py-1 hover:text-teal-600">Sign Up</Link>
          {/* <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Log Out
          </button> */}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<SupabaseLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/supabaselogin" element={<SupabaseLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orderdashboard" element={<OrderDashboard />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route path="/drug/:drugName" element={<DrugDetails />} />
        <Route path="/questionaire" element={<Questionaire />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;