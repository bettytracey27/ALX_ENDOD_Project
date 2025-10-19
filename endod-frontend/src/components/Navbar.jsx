import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#d4f6f2] shadow-md sticky top-0 z-50">
  <div className="mx-auto px-4 py-1" style={{ maxWidth: 3000 }}>
    <div className="flex items-center justify-between">
      {/* Logo + brand */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/assets/images/logo.png"
          alt="ENDOD"
          className="h-6 w-auto object-contain"  // smaller logo
        />
        <span className="text-[#0f6c75] font-semibold text-lg md:text-xl">
          ENDOD
        </span>
      </Link>
          {/* Links (always visible for now) */}
          <div>
            <ul className="flex items-center gap-6 text-[#0f6c75] font-medium">
              <li>
                <Link to="/" className="hover:text-[#42c2d1] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#42c2d1] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#42c2d1] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#42c2d1] transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="bg-[#42c2d1] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#2aa8b5] transition-all"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
