import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo-header.png";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  UserRound,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  const activeClass = ({ isActive }) =>
    `transition duration-200 ${
      isActive
        ? "text-green-600 font-semibold"
        : "text-gray-700 hover:text-green-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-18 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src={logo}
              alt="FreshMart Logo"
              className="w-10 h-10 object-contain"
            />

            <span className="text-xl sm:text-2xl font-bold text-green-600">
              FreshMart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={activeClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Search */}
            <button
              type="button"
              className="p-2.5 rounded-full text-gray-600 hover:text-green-600 hover:bg-green-50 transition"
              aria-label="Search"
            >
              <Search size={21} strokeWidth={2} />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2.5 rounded-full text-gray-600 hover:text-green-600 hover:bg-green-50 transition"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={21} strokeWidth={2} />

              {/* Cart Count */}
              <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-green-600 rounded-full">
                0
              </span>
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition"
            >
              <UserRound size={17} />
              Login
            </Link>

            {/* Register */}
            <Link
              to="/register"
              className="px-5 py-2.5 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition shadow-sm"
            >
              Register
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-1">

            <Link
              to="/cart"
              className="relative p-2 text-gray-600 hover:text-green-600"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={21} />

              <span className="absolute top-0 right-0 w-4 h-4 flex items-center justify-center rounded-full bg-green-600 text-white text-[9px] font-bold">
                0
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-green-600"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-1">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg ${
                      isActive
                        ? "bg-green-50 text-green-600 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Search */}
              <button
                type="button"
                className="flex items-center gap-3 px-3 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Search size={19} />
                Search
              </button>

              {/* Mobile Login */}
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <UserRound size={19} />
                Login
              </Link>

              {/* Mobile Register */}
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center px-4 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;