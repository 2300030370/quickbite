import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">QuickBite</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/restaurants" className="text-gray-700 hover:text-orange-500">Restaurants</Link>
            <Link to="/orders" className="text-gray-700 hover:text-orange-500">Orders</Link>
            <Link to="/cart" className="text-gray-700 hover:text-orange-500">Cart</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/restaurants" className="block py-2 text-gray-700 hover:text-orange-500">Restaurants</Link>
            <Link to="/orders" className="block py-2 text-gray-700 hover:text-orange-500">Orders</Link>
            <Link to="/cart" className="block py-2 text-gray-700 hover:text-orange-500">Cart</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;