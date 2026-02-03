import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const Cart: React.FC = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added any products yet.
        </p>
        <Link
          to="/gallery"
          className="inline-block px-6 py-3 bg-[#D4B78F] text-black rounded-lg hover:bg-[#b99b6f] transition"
        >
          Browse Products
        </Link>
      </div>
    );

  const total = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Left: Image + Info */}
            <div className="flex items-start md:items-center gap-4 flex-1">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-[#D4B78F] font-bold text-lg">{item.price}</p>
              </div>
            </div>

            {/* Quantity Controls + Trash */}
            <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
              {/* Quantity controls */}
              <div className="flex items-center gap-3 border rounded-lg px-3 py-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-gray-600 hover:text-black transition"
                  aria-label="Decrease quantity"
                >
                  <FaMinus />
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => addToCart(item)}
                  className="text-gray-600 hover:text-black transition"
                  aria-label="Increase quantity"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Trash */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition text-xl"
                aria-label={`Remove ${item.name} from cart`}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="mt-8 flex justify-between items-center text-xl font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-4 flex-wrap">
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







