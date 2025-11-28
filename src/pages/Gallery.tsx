import React, { useState } from "react";
import { Link } from "react-router-dom";
import dress1 from "../assets/gallery/Dress/dress1.jpg";
import dress2 from "../assets/gallery/Dress/dress2.jpg";
import dress3 from "../assets/gallery/Dress/dress3.jpg";
import product2 from "../assets/img/prod2.jpeg";
import jacket2 from "../assets/gallery/Jacket/jackets2.jpg";
import jacket3 from "../assets/gallery/Jacket/jackets3.jpg";
const allProducts = [
  // --- DRESSES ---
  { id: 1, name: "Silk Evening Gown", category: "Dresses", image: dress1, price: "$120" },
  { id: 2, name: "Luxury Party Dress", category: "Dresses", image: dress2, price: "$99" },
  { id: 3, name: "Vintage Summer Dress", category: "Dresses", image: dress3, price: "$70" },

  // --- JACKETS ---
  { id: 4, name: "Leather Jacket", category: "Jackets", image: product2, price: "$180" },
  { id: 5, name: "Denim Jacket", category: "Jackets", image: jacket2, price: "$130" },
  { id: 6, name: "Winter Classic Jacket", category: "Jackets", image: jacket3, price: "$155" },

  // --- SHIRTS ---
  { id: 7, name: "Casual Shirt", category: "Shirts", image: "https://images.unsplash.com/photo-1520975698519-59e6c20815ff", price: "$45" },
  { id: 8, name: "Premium Polo Shirt", category: "Shirts", image: "https://images.unsplash.com/photo-1520974735194-65a5c3f23aec", price: "$60" },
  { id: 9, name: "Classic White Shirt", category: "Shirts", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb", price: "$55" },

  // --- ACCESSORIES ---
  { id: 10, name: "Leather Bag", category: "Accessories", image: "https://images.unsplash.com/photo-1620799139834-6a50e66e2a71", price: "$80" },
  { id: 11, name: "Fashion Sunglasses", category: "Accessories", image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f", price: "$30" },
  { id: 12, name: "Classic Wrist Watch", category: "Accessories", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49", price: "$210" },
];

const categories = ["All", "Dresses", "Jackets", "Shirts", "Accessories"];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Collection</h1>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              selectedCategory === cat
                ? "bg-[#D4B78F] text-black"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 flex justify-between items-center">
              <span className="font-semibold">{product.name}</span>
              <span className="font-bold">{product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;


  