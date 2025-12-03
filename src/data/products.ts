// src/data/products.ts
// Centralized product data (48 items) — import this in Gallery.tsx



// DRESSES
import dress1 from "../assets/gallery/Dress/dress1.jpg";
import dress2 from "../assets/gallery/Dress/dress2.jpg";
import dress3 from "../assets/gallery/Dress/dress3.jpg";
import dress4 from "../assets/gallery/Dress/dress4.jpg";
import dress5 from "../assets/gallery/Dress/dress5.jpg";
import dress6 from "../assets/gallery/Dress/dress6.jpg";
import dress7 from "../assets/gallery/Dress/dress7.jpg";
import dress8 from "../assets/gallery/Dress/dress8.jpg";
import dress9 from "../assets/gallery/Dress/dress9.jpg";
import dress10 from "../assets/gallery/Dress/dress10.jpg";
import dress11 from "../assets/gallery/Dress/dress11.jpg";
import dress12 from "../assets/gallery/Dress/dress12.jpg";


// JACKETS
import product2 from "../assets/img/prod2.jpeg";
import jacket2 from "../assets/gallery/Jacket/jacket2.jpg";
import jacket3 from "../assets/gallery/Jacket/jacket3.jpg";
import jacket4 from "../assets/gallery/Jacket/jacket4.jpg";
import jacket5 from "../assets/gallery/Jacket/jacket5.jpg";
import jacket6 from "../assets/gallery/Jacket/jacket6.jpg";
import jacket7 from "../assets/gallery/Jacket/jacket7.jpg";
import jacket8 from "../assets/gallery/Jacket/jacket8.jpg";
import jacket9 from "../assets/gallery/Jacket/jacket9.jpg";
import jacket10 from "../assets/gallery/Jacket/jacket10.jpg";
import jacket11 from "../assets/gallery/Jacket/jacket11.jpg";
import jacket12 from "../assets/gallery/Jacket/jacket12.jpg";

// SHIRTS
import shirt1 from "../assets/gallery/Shirt/shirt1.jpg";
import shirt2 from "../assets/gallery/Shirt/shirt2.jpg";
import shirt3 from "../assets/gallery/Shirt/shirt3.jpg";
import shirt4 from "../assets/gallery/Shirt/shirt4.jpg";
import shirt5 from "../assets/gallery/Shirt/shirt5.jpg";
import shirt6 from "../assets/gallery/Shirt/shirt6.jpg";
import shirt7 from "../assets/gallery/Shirt/shirt7.jpg";
import shirt8 from "../assets/gallery/Shirt/shirt8.jpg";
import shirt9 from "../assets/gallery/Shirt/shirt9.jpg";
import shirt10 from "../assets/gallery/Shirt/shirt10.jpg";
import shirt11 from "../assets/gallery/Shirt/shirt11.jpg";
import shirt12 from "../assets/gallery/Shirt/shirt12.jpg";


// ACCESSORIES
import acc1 from "../assets/gallery/Accessories/acc1.jpg";
import acc2 from "../assets/gallery/Accessories/acc2.jpg";
import acc3 from "../assets/gallery/Accessories/acc3.jpg";
import acc4 from "../assets/gallery/Accessories/acc4.jpg";
import acc5 from "../assets/gallery/Accessories/acc5.jpg";
import acc6 from "../assets/gallery/Accessories/acc6.jpg";
import acc7 from "../assets/gallery/Accessories/acc7.jpg";
import acc8 from "../assets/gallery/Accessories/acc8.jpg";
import acc9 from "../assets/gallery/Accessories/acc9.jpg";
import acc10 from "../assets/gallery/Accessories/acc10.jpg";
import acc11 from "../assets/gallery/Accessories/acc11.jpg";
import acc12 from "../assets/gallery/Accessories/acc12.jpg";

export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
};

export const products = [
  // --- 12 DRESSES ---
  { id: 1, name: "Silk Evening Gown", category: "Dresses", image: dress1, price: "$120",  description: "Silk Evening Gown" },
  { id: 2, name: "Luxury Party Dress", category: "Dresses", image: dress2, price: "$95", description:"Luxury Party Dress" },
  { id: 3, name: "Vintage Summer Dress", category: "Dresses", image: dress3, price: "$70", description: "Vintage Summer Dress" },
  { id: 4, name: "Floral Luxe Dress", category: "Dresses", image: dress4, price: "$140", description: "Floral Luxe Dress" },
  { id: 5, name: "Royal Satin Dress", category: "Dresses", image: dress5, price: "$160", description: "Royal Satin Dress" },
  { id: 6, name: "Classic Long Gown", category: "Dresses", image: dress6, price: "$130", description: "Classic Long Gown" },
  { id: 7, name: "Evening Luxury Dress", category: "Dresses", image: dress7, price: "$210", description: "Evening Luxury Dress" },
  { id: 8, name: "Modern Flow Dress", category: "Dresses", image: dress8, price: "$115", description: "Modern Flow Dress" },
  { id: 9, name: "Luxury Bodycon Dress", category: "Dresses", image: dress9, price: "$145", description: "Luxury Bodycon Dress" },
  { id: 10, name: "Glam Party Dress", category: "Dresses", image: dress10, price: "$99", description: "Glam Party Dress" },
  { id: 11, name: "Chic Linen Dress", category: "Dresses", image: dress11, price: "$85", description: "Chic Linen Dress" },
  { id: 12, name: "Designer Luxury Gown", category: "Dresses", image: dress12, price: "$240", description: "Designer Luxury Gown" },
  

  // --- 12 JACKETS ---
  { id: 13, name: "Fashion Leather Jacket", category: "Jackets", image: product2, price: "$170", description: "Fashion Leather Jacket" },
  { id: 14, name: "Luxury Denim Jacket", category: "Jackets", image: jacket2, price: "$150", description: "Luxury Denim Jacket" },
  { id: 15, name: "Winter Classic Jacket", category: "Jackets", image: jacket3, price: "$155", description: "Winter Classic Jacket" },
  { id: 16, name: "Premium Black Jacket", category: "Jackets", image: jacket4, price: "$180", description: "Premium Black Jacket" },
  { id: 17, name: "Streetwear Bomber", category: "Jackets", image: jacket5, price: "$200", description: "Streetwear Bomber" },
  { id: 18, name: "Wool Designer Jacket", category: "Jackets", image: jacket6, price: "$230", description: "Wool Designer Jacket" },
  { id: 19, name: "Full Zip Hoodie Jacket", category: "Jackets", image: jacket7, price: "$130", description: "Full Zip Hoodie Jacket" },
  { id: 20, name: "Windproof Outdoor Jacket", category: "Jackets", image: jacket8, price: "$190", description: "Windproof Outdoor Jacket" },
  { id: 21, name: "Luxury Military Jacket", category: "Jackets", image: jacket9, price: "$175", description: "Luxury Military Jacket" },
  { id: 22, name: "Vintage Leather Jacket", category: "Jackets", image: jacket10, price: "$220", description: "Vintage Leather Jacket" },
  { id: 23, name: "Slim Fit Jacket", category: "Jackets", image: jacket11, price: "$160", description: "Slim Fit Jacket" },
  { id: 24, name: "Designer Winter Jacket", category: "Jackets", image: jacket12, price: "$260", description: "Designer Winter Jacket" },
 

  // --- 12 SHIRTS ---
  { id: 25, name: "Casual Shirt", category: "Shirts", image: shirt1, price: "$45", description: "Casual Shirt" },
  { id: 26, name: "Premium Polo Shirt", category: "Shirts", image: shirt2, price: "$60", description: "Premium Polo Shirt" },
  { id: 27, name: "Classic Black Shirt", category: "Shirts", image: shirt3, price: "$55", description: "Classic Black Shirt" },
  { id: 28, name: "Linen Summer Shirt", category: "Shirts", image: shirt4, price: "$70", description: "Linen Summer Shirt" },
  { id: 29, name: "Luxury Print Shirt", category: "Shirts", image: shirt5, price: "$85", description: "Luxury Print Shirt" },
  { id: 30, name: "Formal Dress Shirt", category: "Shirts", image: shirt6, price: "$75", description: "Formal Dress Shirt" },
  { id: 31, name: "Designer Oversize Shirt", category: "Shirts", image: shirt7, price: "$95", description: "Designer Oversize Shirt" },
  { id: 32, name: "Premium Cotton Shirt", category: "Shirts", image: shirt8, price: "$65", description: "Premium Cotton Shirt" },
  { id: 33, name: "Fashion Short Sleeve", category: "Shirts", image: shirt9, price: "$50", description: "Fashion Short Sleeve" },
  { id: 34, name: "Premium Long Sleeve", category: "Shirts", image: shirt10, price: "$80", description: "Premium Long Sleeve" },
  { id: 35, name: "Slim Fit Shirt", category: "Shirts", image: shirt11, price: "$90", description: "Slim Fit Shirt" },
  { id: 36, name: "Designer Luxury Shirt", category: "Shirts", image: shirt12, price: "$120", description: "Designer Luxury Shirt" },


  // --- 12 ACCESSORIES ---
  { id: 37, name: "Leather Bag", category: "Accessories", image: acc1, price: "$80", description: "Leather Bag" },
  { id: 38, name: "Fashion Sunglasses", category: "Accessories", image: acc2, price: "$35", description: "Fashion Sunglasses" },
  { id: 39, name: "Classic Wrist Watch", category: "Accessories", image: acc3, price: "$210", description: "Classic Wrist Watch" },
  { id: 40, name: "Premium Belt", category: "Accessories", image: acc4, price: "$50", description: "Premium Belt" },
  { id: 41, name: "Luxury Wallet", category: "Accessories", image: acc5, price: "$70", description: "Luxury Wallet" },
  { id: 42, name: "Handmade Bracelet", category: "Accessories", image: acc6, price: "$25", description: "Handmade Bracelet" },
  { id: 43, name: "Premium Backpack", category: "Accessories", image: acc7, price: "$110", description: "Premium Backpack" },
  { id: 44, name: "Designer Ring", category: "Accessories", image: acc8, price: "$90", description: "Designer Ring" },
  { id: 45, name: "Luxury Tie", category: "Accessories", image: acc9, price: "$60", description: "Luxury Tie" },
  { id: 46, name: "Leather Hat", category: "Accessories", image: acc10, price: "$75", description: "Leather Hat" },
  { id: 47, name: "Designer Earrings", category: "Accessories", image: acc11, price: "$120", description: "Designer Earrings" },
  { id: 48, name: "Gold Bracelet", category: "Accessories", image: acc12, price: "$180", description: "Gold Bracelet" },
];

export const categories = ["All", "Dresses", "Jackets", "Shirts", "Accessories"];
