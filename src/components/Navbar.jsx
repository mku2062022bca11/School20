import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Learning Tracks", path: "/learning-tracks" },
    { name: "Admissions", path: "/admissions" },
    { name: "Campus Life", path: "/campus-life" },
    { name: "Innovation & Tech", path: "/innovation-tech" },
    { name: "Guidelines", path: "/guidelines" },
    { name: "Media Center", path: "/media-center" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Sidebar */}
      <nav
        className={`hidden lg:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex-col space-y-2 transition-all duration-300 ${
          scrolled ? "opacity-100" : "opacity-90"
        }`}
      >
        <div className="glass-effect rounded-full p-4 shadow-lg">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block w-3 h-3 rounded-full mb-3 transition-all duration-300 hover:scale-150 ${
                location.pathname === item.path
                  ? "bg-blue-500 neon-glow"
                  : "bg-gray-400 hover:bg-blue-400"
              }`}
              title={item.name}
            />
          ))}
        </div>
      </nav>

      {/* Mobile Header */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Globe className="w-8 h-8 text-blue-500 morphing-animation" />
              <Zap className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              OB365 School
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } glass-effect border-t border-gray-200 dark:border-gray-700`}
        >
          <nav className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-500 text-white neon-glow"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Desktop Top Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-effect shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <Globe className="w-10 h-10 text-blue-500 morphing-animation" />
              <Zap className="w-5 h-5 text-yellow-400 absolute -top-1 -right-1 floating-animation" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                OB365 School School
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Shaping Tomorrow's Leaders
              </p>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              📞 +91 98765 43210 | 📧 info@everrise.edu
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full neon-glow hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
