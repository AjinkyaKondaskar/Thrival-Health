import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to process checkout data
    console.log("Checkout submitted:", formData);
    navigate("/confirmation"); // Redirect to confirmation page
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Product Summary */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">NAD+ Injection - Tier 1</p>
            <p className="text-sm text-gray-500">1,000mg | 5mL</p>
          </div>
          <p className="text-lg font-bold">$149</p>
        </div>
      </div>

      {/* Contact & Shipping Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="w-full border p-2 rounded"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="Street Address"
          required
          className="w-full border p-2 rounded"
          value={formData.address}
          onChange={handleChange}
        />

        <div className="flex space-x-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            required
            className="w-1/2 border p-2 rounded"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            required
            className="w-1/4 border p-2 rounded"
            value={formData.state}
            onChange={handleChange}
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            required
            className="w-1/4 border p-2 rounded"
            value={formData.zip}
            onChange={handleChange}
          />
        </div>

        {/* Payment Section (placeholder) */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Payment</h2>
          <p className="text-gray-500 mb-2 text-sm">*Payment gateway integration coming soon*</p>
          <input
            type="text"
            disabled
            placeholder="Card Number (Demo)"
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold mt-4"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}