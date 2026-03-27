import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { payWithPaystack } from "../utils/paystack";

const Cart: React.FC = () => {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

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

  const handleCheckout = () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address to proceed.");
      return;
    }
    setEmailError("");
    setIsProcessing(true);

    const reference = `naijastyle_${Date.now()}`;

    payWithPaystack({
      email,
      amount: total,
      reference,
      onSuccess: (ref) => {
        setIsProcessing(false);
        alert(`Payment successful! Reference: ${ref.reference}`);
      },
      onClose: () => {
        setIsProcessing(false);
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition"
          >
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

            <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
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

        <div className="mt-8 flex justify-between items-center text-xl font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

        {/* Email input for Paystack */}
        <div className="mt-4 flex flex-col gap-2 max-w-md ml-auto w-full">
          <label className="text-sm font-semibold text-gray-700">
            Email for payment receipt
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            className="border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4B78F]"
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>

        <div className="mt-6 flex justify-end gap-4 flex-wrap">
          <Link
            to="/gallery"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Continue Shopping
          </Link>

          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="px-6 py-3 bg-[#D4B78F] text-black rounded-lg hover:bg-[#b99b6f] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? "Processing..." : "Checkout with Paystack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;








