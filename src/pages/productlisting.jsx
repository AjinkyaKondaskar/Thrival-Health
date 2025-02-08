import { useState } from "react";

const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, category: "Audio", image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg" },
  { id: 2, name: "Smart Watch", price: 129.99, category: "Wearables", image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 39.99, category: "Audio", image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg" },
  { id: 4, name: "Gaming Mouse", price: 49.99, category: "Accessories", image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg" },
  { id: 5, name: "Mechanical Keyboard", price: 89.99, category: "Accessories", image: "https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg" },
];

export default function ProductListing() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto flex">
      {/* Sidebar Filter */}
      <div className="w-1/4 p-4 border-r border-gray-200">
        <h3 className="text-lg font-bold mb-2">Filter by Category</h3>
        <select
          className="w-full border p-2 rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Audio">Audio</option>
          <option value="Wearables">Wearables</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Product List */}
      <div className="w-3/4 p-4">
        {/* Search Bar */}
        <div className="mb-4 flex justify-between">
          <input
            type="text"
            placeholder="Search products..."
            className="border p-2 rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.name}
              price={`$${product.price.toFixed(2)}`}
              image={product.image}
              description="High-quality product"
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, price, image, description, onAddToCart }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm border border-gray-200">
      <img src={image} alt={title} className="w-full h-20 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="text-blue-600 font-bold text-md mt-2">{price}</p>
        <div className="mt-4 flex space-x-2 justify-center">
          <button
            className="bg-red-400 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
            onClick={onAddToCart}
          >
            Add to Cart
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-md text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};