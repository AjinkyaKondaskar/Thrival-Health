import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Checkout() {
  const [billing, setBilling] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const [shipping, setShipping] = useState({
    fullName: '',
    address: '',
    city: '',
    zip: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('credit_card');

  const handleBillingChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Billing:', billing);
    console.log('Shipping:', shipping);
    console.log('Payment Method:', paymentMethod);
    alert('Order placed successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Billing Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="fullName" onChange={handleBillingChange} value={billing.fullName} placeholder="Full Name" className="p-3 border rounded" required />
            <input name="email" onChange={handleBillingChange} value={billing.email} placeholder="Email Address" className="p-3 border rounded" required />
            <input name="address" onChange={handleBillingChange} value={billing.address} placeholder="Billing Address" className="p-3 border rounded col-span-2" required />
            <input name="city" onChange={handleBillingChange} value={billing.city} placeholder="City" className="p-3 border rounded" required />
            <input name="zip" onChange={handleBillingChange} value={billing.zip} placeholder="ZIP / Postal Code" className="p-3 border rounded" required />
          </div>
        </div>

        {/* Shipping Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="fullName" onChange={handleShippingChange} value={shipping.fullName} placeholder="Full Name" className="p-3 border rounded" required />
            <input name="address" onChange={handleShippingChange} value={shipping.address} placeholder="Shipping Address" className="p-3 border rounded col-span-2" required />
            <input name="city" onChange={handleShippingChange} value={shipping.city} placeholder="City" className="p-3 border rounded" required />
            <input name="zip" onChange={handleShippingChange} value={shipping.zip} placeholder="ZIP / Postal Code" className="p-3 border rounded" required />
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" value="credit_card" checked={paymentMethod === 'credit_card'} onChange={(e) => setPaymentMethod(e.target.value)} />
              <span>Credit / Debit Card</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={(e) => setPaymentMethod(e.target.value)} />
              <span>PayPal</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="payment" value="apple_pay" checked={paymentMethod === 'apple_pay'} onChange={(e) => setPaymentMethod(e.target.value)} />
              <span>Apple Pay</span>
            </label>
          </div>
        </div>

        <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">
          Complete Purchase
        </button>
      </form>
    </div>
  );
}