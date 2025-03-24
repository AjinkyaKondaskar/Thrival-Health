import { useParams } from "react-router-dom";
import { drugs } from "../data";
import { useNavigate } from "react-router-dom";

export default function DrugDetails() {
  const { drugName } = useParams();
  const navigate = useNavigate();

  let selectedDrug = null;
  for (const category in drugs) {
    selectedDrug = drugs[category].find((drug) => drug.name === decodeURIComponent(drugName));
    if (selectedDrug) break;
  }

  if (!selectedDrug) return <p className="text-center text-red-500">Drug not found.</p>;

  return (
    <div className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-md">
      {/* LEFT - Product Image with Background */}
      <div className="w-full md:w-1/2 bg-[#d3e0e9] p-10 rounded-lg flex justify-center">
        <img
          src={'/' + selectedDrug.image}
          alt={selectedDrug.name}
          className="w-64 h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* RIGHT - Product Details */}
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold text-gray-800">{selectedDrug.name}</h1>

        {/* Full Description (More Details) */}
        <p className="text-gray-700 text-md leading-relaxed mt-4">{selectedDrug.description}</p>

        {/* Icons Section */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-1">
            <span className="text-2xl">📦</span>
            <p className="text-sm text-gray-600">Free Shipping</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-2xl">🩺</span>
            <p className="text-sm text-gray-600">Medical Consultation Included</p>
          </div>
        </div>

        {/* Select Plan Dropdown */}
        {selectedDrug.name === "NAD+ Injection" && (
          <div className="mt-6">
            <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700">
              <option>Tier 1: For First Time Users, 1,000mg (5 mL)</option>
              <option>Tier 2: For Existing Users, 1,600mg ( 10 mL)</option>
            </select>
          </div>
        )}

        {/* Pricing */}
        <div className="flex justify-center items-center space-x-6 mt-4">
          {/* Monthly Price */}
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{selectedDrug.pricePerMonth}</p>
            <p className="text-gray-500 text-sm">Per Month</p>
          </div>

          {/* Divider */}
          <div className="h-10 w-px bg-gray-300"></div>

          {/* Full Price */}
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{selectedDrug.fullPrice}</p>
            <p className="text-gray-500 text-sm">Full Price</p>
          </div>
        </div>

        {/* Purchase Button */}
        <button
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg font-semibold mt-6"
          onClick={() => {
            localStorage.setItem("selectedDrug", JSON.stringify(selectedDrug));
            navigate('/checkout');
          }}
        >
          PURCHASE
        </button>
      </div>
    </div>
  );
}
