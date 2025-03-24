import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function Questionaire() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    hasHeartCondition: "",
    isPregnant: "",
    takesMedication: "",
    hasAllergies: "",
    notes: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: Log or send to backend
    console.log("Submitted:", formData);

    // ✅ Save completion status + answers
    localStorage.setItem("questionnaireCompleted", "true");
    localStorage.setItem("questionnaireResponses", JSON.stringify(formData));

    // ✅ Navigate to checkout
    navigate("/checkout");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Medical Questionnaire</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-semibold mb-1">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          />
        </div>

        {/* Heart Condition */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Do you have any heart conditions?
          </label>
          <select
            name="hasHeartCondition"
            value={formData.hasHeartCondition}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select one</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Pregnancy */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Are you currently pregnant or breastfeeding?
          </label>
          <select
            name="isPregnant"
            value={formData.isPregnant}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select one</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
            <option value="not_applicable">Not Applicable</option>
          </select>
        </div>

        {/* Medications */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Are you currently taking any medications?
          </label>
          <select
            name="takesMedication"
            value={formData.takesMedication}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select one</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Allergies */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Do you have any allergies to medications or supplements?
          </label>
          <select
            name="hasAllergies"
            value={formData.hasAllergies}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select one</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Any additional notes or medical conditions?
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2"
          ></textarea>
        </div>

        {/* ✅ Submit Button - no onClick needed! */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold"
        >
          Submit Questionnaire
        </button>
      </form>
    </div>
  );
}

export default Questionaire;
