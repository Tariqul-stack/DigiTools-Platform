import { ShoppingCart } from "lucide-react";
import React from "react";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center py-4 px-16 bg-white">
      <h2 className="text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-tight">
        DigiTools
      </h2>

      <ul className="hidden lg:flex gap-7 text-lg">
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
      </ul>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <ShoppingCart className="mr-10" />
          <span className="absolute -top-2 right-5 min-w-5 h-5 px-1 rounded-full bg-[#9514FA] text-white text-xs flex items-center justify-center">
            {cartCount}
          </span>
        </div>

        <button className="hidden lg:flex text-lg font-semibold">Login</button>

        <button className="px-3 py-2 rounded-full text-lg font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
