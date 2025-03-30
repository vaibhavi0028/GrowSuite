import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "Feature", path: "/feature" },
    { name: "Product", path: "/product" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      <nav className="bg-[#E7F5FF] px-4 md:px-6 py-4 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center md:space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="GrowSuite Logo" className="h-10 w-auto" />
              <span className="text-2xl font-['Futura_Md_BT']">
                <span className="text-[#000000]">Grow</span>
                <span className="text-[#0F1054]">Suite</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-1 md:space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-['Futura_Md_BT'] ${
                    location.pathname === item.path
                      ? "border-b-2 border-[#0F1054] text-[#0F1054]"
                      : "text-[#000000] hover:text-[#0F1054]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="font-['Futura_Md_BT'] bg-[#FFFFFD] px-4 py-2 text-[#0F1054] rounded-md hover:text-[#0F1054]/80"
            >
              Login
            </Link>
            <Link
              to="/"
              className="font-['Futura_Md_BT'] px-4 py-2 bg-[#0F1054] text-white rounded-md hover:bg-[#0F1054]/90 md:block hidden"
            >
              Try for free →
            </Link>
            <Link
              to="/"
              className="font-['Futura_Md_BT'] px-4 py-2 bg-[#0F1054] text-white rounded-md hover:bg-[#0F1054]/90 md:hidden block"
            >
              Try
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-[#0F1054]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0F1054]" />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#E7F5FF] shadow-md md:hidden z-50">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-['Futura_Md_BT'] px-4 py-2 ${
                  location.pathname === item.path
                    ? "bg-[#0F1054]/10 text-[#0F1054]"
                    : "text-[#000000]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/"
              className="font-['Futura_Md_BT'] px-4 py-2 text-[#0F1054] bg-[#FFFFFD] rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/"
              className="font-['Futura_Md_BT'] px-4 py-2 bg-[#0F1054] text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Try for free →
            </Link>
          </div>
        </div>
      )}

      <div className="bg-[#0F1054] py-4 text-center text-white">
        <p className="font-['Futura_Md_BT']">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </>
  );
};

export default Navbar;
