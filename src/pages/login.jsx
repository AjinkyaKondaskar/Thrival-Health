import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaUserMd, FaBox } from "react-icons/fa"; // Icons for steps

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const [selectedStep, setSelectedStep] = useState(1); // Track selected step
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);

    if (formData.email === "admin@example.com" && formData.password === "password") {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 pb-20">
      {/* Thrival Health Statement */}
      <div className="text-center mb-8">
        <h3 className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
          Empowering Health and Longevity
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-teal-700 mt-2">
          Thrival Health: Elevate Your Well-Being
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          At Thrival Health, we go beyond healthcare. We are a community dedicated to making 
          wellness accessible, affordable, and empowering individuals to take charge of their health.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="text-center mb-12">
        <h3 className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
          Three Easy Steps
        </h3>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">How It Works</h2>
      </div>

      {/* Step Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mb-12">
        {/* Step 1 */}
        <div
          onClick={() => setSelectedStep(1)}
          className={`cursor-pointer ${
            selectedStep === 1 ? "bg-white ring-2 ring-teal-500" : "bg-gray-100"
          } shadow-lg rounded-lg p-6 text-center w-64 transition`}
        >
          <FaClipboardList className="text-teal-700 text-4xl mx-auto mb-3" />
          <h4 className="text-lg font-bold text-teal-700">STEP 1</h4>
          <p className="text-gray-700 text-sm">Questionnaire</p>
        </div>

        {/* Step 2 */}
        <div
          onClick={() => setSelectedStep(2)}
          className={`cursor-pointer ${
            selectedStep === 2 ? "bg-white ring-2 ring-teal-500" : "bg-gray-100"
          } shadow-lg rounded-lg p-6 text-center w-64 transition`}
        >
          <FaUserMd className="text-teal-700 text-4xl mx-auto mb-3" />
          <h4 className="text-lg font-bold text-teal-700">STEP 2</h4>
          <p className="text-gray-700 text-sm">Medical Review</p>
        </div>

        {/* Step 3 */}
        <div
          onClick={() => setSelectedStep(3)}
          className={`cursor-pointer ${
            selectedStep === 3 ? "bg-white ring-2 ring-teal-500" : "bg-gray-100"
          } shadow-lg rounded-lg p-6 text-center w-64 transition`}
        >
          <FaBox className="text-teal-700 text-4xl mx-auto mb-3" />
          <h4 className="text-lg font-bold text-teal-700">STEP 3</h4>
          <p className="text-gray-700 text-sm">Pharmacy Fulfillment</p>
        </div>
      </div>

      {/* Step Content Section */}
      {selectedStep === 1 && (
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-4 gap-10 px-4 mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-red-600">
              Complete Health Questionnaire
            </h2>
            <p className="text-gray-600 mt-2">
              You have already taken the first step to improving your health and we appreciate 
              you visiting our site. Please browse our products to learn more about the 
              treatments available to you.
            </p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Create a profile with your name, contact information, and address.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Complete a short health questionnaire.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Select payment option and complete payment.
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              If your medical provider does not prescribe the product selected, your payment will be refunded.
            </p>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition">
              SIGN UP
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/health.jpg"
              alt="Smiling Woman on Laptop"
              className="rounded-lg shadow-md max-w-full"
            />
          </div>
        </div>
      )}

      {selectedStep === 2 && (
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-4 gap-10 px-4 mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-red-600">Medical Review</h2>
            <p className="text-gray-600 mt-2">
              A medical provider reviews your health history to prescribe the best possible solution and dosage for you. A phone call may be required.
            </p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Create a profile with your name, contact information, and address.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Complete a short health questionnaire.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Select payment option and complete payment.
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              If your medical provider does not prescribe the product selected, your payment will be refunded.
            </p>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition">
              SIGN UP
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/doctor-review.jpg"
              alt="Doctor reviewing on laptop"
              className="rounded-lg shadow-md max-w-full"
            />
          </div>
        </div>
      )}
      {selectedStep === 3 && (
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-4 gap-10 px-4 mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-red-600">Pharmacy Fulfillment</h2>
            <p className="text-gray-600 mt-2">
              Receive your medication directly to your home within 7–10 business days.
            </p>
            <ul className="mt-4 text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Create a profile with your name, contact information, and address.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Complete a short health questionnaire.
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">•</span>
                Select payment option and complete payment.
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              If your medical provider does not prescribe the product selected, your payment will be refunded.
            </p>
            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition">
              SIGN UP
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/doctor-review.jpg"
              alt="Doctor reviewing on laptop"
              className="rounded-lg shadow-md max-w-full"
            />
          </div>
        </div>
      )}



      {/* Login Box */}
      <div className="bg-white shadow-lg rounded-lg px-8 py-6 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Login</h2>

        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                name="rememberMe"
                className="mr-2"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember Me
            </label>
            <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
