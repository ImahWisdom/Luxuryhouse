// src/pages/Cart.tsx
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Looks like you haven't added any products yet.</p>
        <Link
          to="/gallery"
          className="inline-block px-6 py-3 bg-[#D4B78F] text-black rounded-lg hover:bg-[#b99b6f] transition"
        >
          Browse Products
        </Link>
      </div>
    );

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center md:justify-between gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg"
              />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-[#D4B78F] font-bold text-lg">{item.price}</p>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-4 md:mt-0 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="mt-8 flex justify-between items-center text-xl font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            to="/gallery"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Continue Shopping
          </Link>
          <button className="px-6 py-3 bg-[#D4B78F] text-black rounded-lg hover:bg-[#b99b6f] transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;


