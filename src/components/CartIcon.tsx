import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon: React.FC<{ size?: number }> = ({ size = 24 }) => {
  return React.createElement(FaShoppingCart, { size });
};

export default CartIcon;

