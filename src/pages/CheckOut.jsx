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

  const CheckIcon = () => (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#3EB489] text-white text-xs font-bold">
      ✓
    </span>
  );

  const validateBilling = () => {
    return Object.values(billing).every((val) => val.trim() !== "");
  };

  const validateShipping = () => {
    return Object.values(shipping).every((val) => val.trim() !== "");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8 bg-[#f5f9f8]">
      {/* LEFT COLUMN: FORM */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold mb-4 text-[#3EB489]">Checkout</h2>

        {/* Billing Section */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[#3EB489]">Billing Details</h3>
            {step > 1 && (
              <button onClick={() => setStep(1)} className="text-sm text-[#2C3E50] font-medium hover:opacity-80">Edit</button>
            )}
          </div>
          {step === 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "fullName", label: "Full Name" },
                { name: "email", label: "Email Address" },
                { name: "address", label: "Billing Address", colSpan: true },
                { name: "city", label: "City" },
                { name: "zip", label: "ZIP / Postal Code" },
              ].map(({ name, label, colSpan }) => (
                <div className={`${colSpan ? "md:col-span-2" : ""} flex flex-col`} key={name}>
                  <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1 text-left">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id={name}
                    name={name}
                    onChange={handleBillingChange}
                    value={billing[name]}
                    className="p-3 border rounded border-[#2C3E50]"
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => validateBilling() ? setStep(2) : alert("Please fill out all required billing fields.")}
                className="col-span-2 mt-4 bg-[#2C3E50] text-white py-2 rounded hover:bg-[#3EB489]"
              >
                Next: Shipping
              </button>
            </div>
          ) : (
            <div className="flex justify-center"><CheckIcon /></div>
          )}
        </div>

        {/* Shipping Section */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-[#3EB489]">Shipping Details</h3>
            {step > 2 && (
              <button onClick={() => setStep(2)} className="text-sm text-[#2C3E50] font-medium hover:opacity-80">Edit</button>
            )}
          </div>

          {step === 2 ? (
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setShipping({ ...billing });
                    } else {
                      setShipping({ fullName: '', address: '', city: '', zip: '' });
                    }
                  }}
                  className="w-5 h-5 text-[#3EB489] accent-[#3EB489] rounded border-gray-300"
                />
                <span className="text-sm text-gray-700">Ship to Billing Address</span>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "fullName", label: "Full Name" },
                  { name: "address", label: "Shipping Address", colSpan: true },
                  { name: "city", label: "City" },
                  { name: "zip", label: "ZIP / Postal Code" },
                ].map(({ name, label, colSpan }) => (
                  <div className={`${colSpan ? "md:col-span-2" : ""} flex flex-col`} key={name}>
                    <label htmlFor={name} className="text-sm font-medium text-gray-700 mb-1 text-left">
                      {label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={name}
                      name={name}
                      onChange={handleShippingChange}
                      value={shipping[name]}
                      className="p-3 border rounded border-[#2C3E50]"
                      required
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => validateShipping() ? setStep(3) : alert("Please fill out all required shipping fields.")}
                  className="col-span-2 mt-4 bg-[#2C3E50] text-white py-2 rounded hover:bg-[#3EB489]"
                >
                  Next: Payment
                </button>
              </div>
            </div>
          ) : step > 2 ? (
            <div className="flex justify-center"><CheckIcon /></div>
          ) : null}
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-2xl p-6 shadow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-[#3EB489]">Payment Method</h3>
            {step > 3 && (
              <button onClick={() => setStep(3)} className="text-sm text-[#2C3E50] font-medium hover:opacity-80">Edit</button>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-4">Please choose a payment option below:</p>
          {step === 3 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { value: "credit_card", label: "Credit / Debit Card", icon: "/credit-card-icon.png" },
                { value: "paypal", label: "PayPal", icon: "/paypal-icon.png" },
                { value: "apple_pay", label: "Apple Pay", icon: "/apple-pay-icon.png" },
              ].map(({ value, label, icon }) => (
                <label key={value} className="flex items-center space-x-3 border p-3 rounded hover:border-[#3EB489] cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value={value}
                    checked={paymentMethod === value}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-[#3EB489]"
                  />
                  <img src={icon} alt={label} className="w-6 h-6" />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
              <button type="submit" className="w-full mt-4 bg-[#2C3E50] text-white py-3 rounded-lg font-semibold hover:bg-[#3EB489]">
                Complete Purchase
              </button>
            </form>
          ) : null}
        </div>
      </div>

      {/* RIGHT COLUMN: CART */}
      <div className="w-full lg:w-1/3 bg-[#D3EDE6] rounded-[40px] p-6 text-gray-900 flex flex-col justify-between shadow-md">
        <div>
          <h3 className="text-xl font-bold mb-6 text-[#3EB489]">PRODUCTS IN CART</h3>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="https://via.placeholder.com/50" alt="product" className="w-12 h-12 rounded" />
              <span className="font-semibold">GLP-1 + B12 <span className="text-[#2C3E50]">Tier 1</span></span>
            </div>
            <span className="text-sm text-gray-600">Payment Options Below</span>
          </div>
          <p className="underline mb-2 cursor-pointer text-[#3EB489]">Got a promo code? <span className="text-[#2C3E50]">▲</span></p>
          <input type="text" className="w-full p-3 rounded text-black border border-[#2C3E50]" />
        </div>
      </div>
    </div>
  );
}