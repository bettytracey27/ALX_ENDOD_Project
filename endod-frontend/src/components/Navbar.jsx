import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#d4f6f2] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="ENDOD" className="h-12" />
          <span className="text-[#0f6c75] font-bold text-xl">ENDOD</span>
        </Link>

        <button
          className="md:hidden text-[#0f6c75]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>

        <ul
          className={`md:flex md:gap-6 font-medium text-[#0f6c75] ${
            isOpen ? "block mt-4 space-y-2" : "hidden md:flex"
          }`}
        >
          <li><Link to="/" className="hover:text-[#42c2d1]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#42c2d1]">About Us</Link></li>
          <li><Link to="/services" className="hover:text-[#42c2d1]">Services</Link></li>
          <li><Link to="/work" className="hover:text-[#42c2d1]">Our Work</Link></li>
          <li>
            <Link
              to="/contact"
              className="bg-[#42c2d1] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#2aa8b5]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
