import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products, Product } from "../data/products";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Call hook at top level

  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link
          to="/gallery"
          className="text-[#D4B78F] hover:underline font-medium"
        >
          ← Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <Link
        to="/gallery"
        className="inline-flex items-center gap-2 mb-8 text-[#D4B78F] hover:underline font-medium"
      >
        ← Back to Gallery
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          <p className="text-2xl font-semibold text-[#D4B78F] mb-6">
            {product.price}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            {product.description
              ? product.description
              : "No description available for this product."}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="px-6 py-3 bg-[#D4B78F] text-black font-semibold rounded-lg hover:bg-[#b99b6f] transition w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



  