import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // ✅ Import Link
import { drugs } from "../data";  // ✅ Import Drug Data
import {supabase} from "../supabaseClient"

// Category Data
const categories = [
  { name: "Longevity", image: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg" },
  { name: "Weight Loss", image: "https://images.pexels.com/photos/247587/pexels-photo-247587.jpeg" },
  { name: "Sexual Health", image: "https://images.pexels.com/photos/3768138/pexels-photo-3768138.jpeg" },
  { name: "Single Peptide", image: "https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg" },
  { name: "Peptide Blends", image: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg" },
];


// General Products (For other categories)
const products = [
  { id: 1, name: "Libido Enhancer", price: 39.99, category: "Sexual Health", image: "sexualhealth-image-url" },
  { id: 2, name: "Cholesterol Control", price: 49.99, category: "Peptide Blends", image: "peptideblends-image-url" },
];

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the logged-in user from the session
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error('Error getting user:', error.message);
      } else {
        setUser(user);
        console.log(user)
      }
    };

    getUser();
  }, []);

  const handleAddProduct = async () => {
    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          name: 'Liver Detox',
          category: 'Longevity',
        },
      ]);
  
    if (error) {
      console.error('Insert error:', error.message);
    } else {
      console.log('Inserted product:', data);
    }
  };

  return (
    <>
      <p>{user ? `Welcome, ${user.email}` : 'Loading user...'}</p>
      <button
        onClick={handleAddProduct}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200"
      >
        ➕ Add Test Product to Database
      </button>
   
      <div className="p-6 max-w-7xl mx-auto">
        {/* Show Categories if none is selected */}
        {!selectedCategory ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Browse Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer text-center p-4 border border-gray-200"
                  onClick={() => {
                    console.log("Selected Category:", category.name);  // Debugging output
                    setSelectedCategory(category.name);
                  }}
                >
                  <img src={category.image} alt={category.name} className="w-full h-32 object-cover" />
                  <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Show drugs for "Longevity" or "Weight Loss" OR normal products for other categories
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-4 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              ← Back to Categories
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">{selectedCategory} Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {drugs[selectedCategory] ? (
                drugs[selectedCategory].map((drug) => <DrugCard key={drug.name} drug={drug} />)
              ) : (
                products
                  .filter((product) => product.category === selectedCategory)
                  .map((product) => (
                    <Card key={product.id} title={product.name} price={`$${product.price.toFixed(2)}`} image={product.image} />
                  ))
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Drug Card Component

const DrugCard = ({ drug }) => (
  <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6">
    <img src={drug.image} alt={drug.name} className="w-full h-60 object-contain" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{drug.name}</h3>
      <p className="text-gray-500 text-sm">{drug.summary}</p>
      <div className="flex flex-wrap gap-2 my-2">
        {drug.benefits.map((benefit, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">{benefit}</span>
        ))}
      </div>
      <p className="mt-2 text-gray-700">
        <strong>{drug.pricePerMonth}</strong> Per Month | <strong>{drug.fullPrice}</strong> Full Price
      </p>

      {/* Learn More Button */}
      <Link to={`/drug/${encodeURIComponent(drug.name)}`}>
        <button className="mt-4 bg-red-400 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
          Learn More
        </button>
      </Link>
    </div>
  </div>
);

