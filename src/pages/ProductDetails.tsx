import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products, Product } from "../data/products";
import Toast from "../components/Toast";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const location = useLocation(); // access URL info
  const { addToCart } = useCart();

  const [toast, setToast] = React.useState("");

  // Read category from query string
  const params = new URLSearchParams(location.search);
  const categoryFromGallery = params.get("category") || "All";

  const product: Product | undefined = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link
          to={`/gallery?category=${categoryFromGallery}`}
          className="text-[#D4B78F] hover:underline font-medium"
        >
          ← Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      {/* Back Button */}
      <Link
        to={`/gallery?category=${categoryFromGallery}`}
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

        {/* Product Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          <p className="text-2xl font-semibold text-[#D4B78F] mb-6">
            {product.price}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            {product.description || "No description available for this product."}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              addToCart(product);
              setToast("Added to cart!");
              setTimeout(() => setToast(""), 2000);
            }}
            className="px-6 py-3 bg-[#D4B78F] text-black font-semibold rounded-lg hover:bg-[#b99b6f] transition w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && <Toast message={toast} />}
    </div>
  );
};

export default ProductDetails;






  