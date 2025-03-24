import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  useEffect(() => {
    const completed = localStorage.getItem("questionnaireCompleted");
    if (!completed) {
      navigate("/questionaire");
    }
  }, []);

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

  const storedDrug = localStorage.getItem("selectedDrug");
  const cartItem = storedDrug ? JSON.parse(storedDrug) : null;

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
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

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

      <div className="w-full lg:w-1/3 bg-teal-400 rounded-[40px] p-6 text-white flex flex-col shadow-md">
        <h3 className="text-xl font-bold mb-6 text-center">PRODUCTS IN CART</h3>

        {cartItem ? (
          <div className="flex flex-col items-center text-center mb-4">
            <img
              src={`/${cartItem.image}`}
              alt={cartItem.name}
              className="w-28 h-28 rounded-xl mb-4 object-contain shadow-lg"
            />
            <div className="text-xl font-bold leading-snug">
              {cartItem.name}
              <div className="text-lg font-semibold">Tier 1</div>
            </div>
          </div>
        ) : (
          <div className="text-center text-red-200">
            No product selected.
          </div>
        )}

        <div className="mt-6 w-full">
          <p className="text-white underline cursor-pointer text-center mb-2">
            Got a promo code? <span className="text-red-300">▲</span>
          </p>
          <input
            type="text"
            placeholder="Enter promo code"
            className="w-full p-3 text-base rounded-lg text-black bg-white focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
    </div>
  );
}
