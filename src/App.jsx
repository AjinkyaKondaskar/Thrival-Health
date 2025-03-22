import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OrderDashboard from './pages/orderdashboard';
import ProductListing from './pages/productlisting';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import DrugDetails from './pages/DrugDetails';  // ✅ Import DrugDetails Page
import Questionaire from './Questionaire';
import Checkout from './pages/CheckOut';

function App() {
  return (
    <>
      <Router>
        <nav className="bg-gray-900 p-4 shadow-lg">
          <ul className="flex justify-center space-x-6">
            <li><Link to="/login" className="text-white text-lg px-4 py-2 hover:bg-gray-700">Login</Link></li>
            <li><Link to="/dashboard" className="text-white text-lg px-4 py-2 hover:bg-gray-700">Dashboard</Link></li>
            <li><Link to="/orderdashboard" className="text-white text-lg px-4 py-2 hover:bg-gray-700">Order Dashboard</Link></li>
            <li><Link to="/productlisting" className="text-white text-lg px-4 py-2 hover:bg-gray-700">Product Listing</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orderdashboard" element={<OrderDashboard />} />
          <Route path="/productlisting" element={<ProductListing />} />
          <Route path="/drug/:drugName" element={<DrugDetails />} />  {/* ✅ Drug Details Route */}
          <Route path="/questionaire" element={<Questionaire />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
