import React, { useState } from "react";

export default function Checkout() {
  const [step, setStep] = useState(1);

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
    alert('Order placed successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      {/* LEFT: Form Steps */}
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        {/* Billing Section */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Billing Details</h3>
            {step > 1 && (
              <button onClick={() => setStep(1)} className="text-sm text-blue-600 underline">Edit</button>
            )}
          </div>
          {step === 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="fullName" onChange={handleBillingChange} value={billing.fullName} placeholder="Full Name" className="p-3 border rounded" required />
              <input name="email" onChange={handleBillingChange} value={billing.email} placeholder="Email Address" className="p-3 border rounded" required />
              <input name="address" onChange={handleBillingChange} value={billing.address} placeholder="Billing Address" className="p-3 border rounded col-span-2" required />
              <input name="city" onChange={handleBillingChange} value={billing.city} placeholder="City" className="p-3 border rounded" required />
              <input name="zip" onChange={handleBillingChange} value={billing.zip} placeholder="ZIP / Postal Code" className="p-3 border rounded" required />
              <button type="button" onClick={() => setStep(2)} className="col-span-2 mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Next: Shipping
              </button>
            </div>
          ) : (
            <p className="text-gray-600 text-sm">✓ {billing.fullName}, {billing.address}, {billing.city}</p>
          )}
        </div>

        {/* Shipping Section */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Shipping Details</h3>
            {step > 2 && (
              <button onClick={() => setStep(2)} className="text-sm text-blue-600 underline">Edit</button>
            )}
          </div>
          {step === 2 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="fullName" onChange={handleShippingChange} value={shipping.fullName} placeholder="Full Name" className="p-3 border rounded" required />
              <input name="address" onChange={handleShippingChange} value={shipping.address} placeholder="Shipping Address" className="p-3 border rounded col-span-2" required />
              <input name="city" onChange={handleShippingChange} value={shipping.city} placeholder="City" className="p-3 border rounded" required />
              <input name="zip" onChange={handleShippingChange} value={shipping.zip} placeholder="ZIP / Postal Code" className="p-3 border rounded" required />
              <button type="button" onClick={() => setStep(3)} className="col-span-2 mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Next: Payment
              </button>
            </div>
          ) : step > 2 ? (
            <p className="text-gray-600 text-sm">✓ {shipping.fullName}, {shipping.address}, {shipping.city}</p>
          ) : null}
        </div>

        {/* Payment Section */}
        <div className="bg-gray-100 rounded-2xl p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Payment Method</h3>
            {step > 3 && (
              <button onClick={() => setStep(3)} className="text-sm text-blue-600 underline">Edit</button>
            )}
          </div>
          {step === 3 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button type="submit" className="w-full mt-4 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">
                Complete Purchase
              </button>
            </form>
          ) : null}
        </div>
      </div>

      {/* RIGHT: Cart Summary */}
      <div className="w-full lg:w-1/3 bg-teal-400 rounded-[40px] p-6 text-white flex flex-col justify-between shadow-md">
        <div>
          <h3 className="text-xl font-bold mb-6">PRODUCTS IN CART</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="https://via.placeholder.com/50" alt="product" className="w-12 h-12 rounded" />
              <span>GLP-1 + B12 <span className="font-bold">Tier 1</span></span>
            </div>
            <span className="text-sm text-black">Payment Options Below</span>
          </div>
          <p className="underline mb-2 cursor-pointer">Got a promo code? <span className="text-red-300">▲</span></p>
          <input type="text" placeholder="Enter promo code" className="w-full p-3 rounded text-black" />
        </div>
      </div>
    </div>
  );
}

  
