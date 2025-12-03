import React from "react";
import heroImg from "../assets/img/hero.jpg"; // hero image
import dress1 from "../assets/gallery/Dress/dress1.jpg";
import product2 from "../assets/img/prod2.jpeg";
import shirt8 from "../assets/gallery/Shirt/shirt8.jpg";
import acc1 from "../assets/gallery/Accessories/acc1.jpg";
import { Link } from "react-router-dom";

const featuredProducts = [
  { id: 1, name: "Silk Evening Gown", image: dress1, price: "$120" },
  { id: 13, name: "Leather Jacket", image: product2, price: "$60" },
  { id: 32, name: "Cotton Shirt", image: shirt8, price: "$150" },
  { id: 37, name: "Leather Bag", image: acc1, price: "$40" },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Elevate Your Style
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-md">
            Discover exclusive fashion collections that define elegance and luxury.
          </p>
          <button className="bg-[#D4B78F] text-black px-6 py-3 font-semibold rounded-lg hover:bg-opacity-90 transition">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {featuredProducts.map((product) => (
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
      </section>
      {/* View Products */}
      <section>
      <div className="text-center mt-8 ">
       <Link
    to="/gallery"
    className="bg-[#D4B78F] text-black px-6 py-3 font-semibold rounded-lg hover:bg-opacity-90 transition"
      >
    View All Products
     </Link>
     </div>
     </section>
    </div>
  );
};

export default Home;



  