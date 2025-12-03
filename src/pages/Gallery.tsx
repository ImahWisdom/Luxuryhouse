  import React, { useState } from "react";
  import { Link, useLocation } from "react-router-dom";
  import { products, categories, Product } from "../data/products";

  const Gallery: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const initialCategory = params.get("category") || "All";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);

    const filteredProducts =
      selectedCategory === "All"
        ? [...products].sort(() => Math.random() - 0.5)
        : products.filter((p: Product) => p.category === selectedCategory);

    return (
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Collection
        </h1>

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

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}?category=${selectedCategory}`}
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





  