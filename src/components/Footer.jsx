import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {/* Theme Mode Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex space-x-2">
        {Object.entries(themes).map(([key, { name, icon }]) => (
          <button
            key={key}
            onClick={() => setTheme(key)}
            className={`w-12 h-12 rounded-full glass-effect flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 ${
              theme === key ? "neon-glow" : ""
            }`}
            title={`${name} Mode`}
          >
            {icon}
          </button>
        ))}
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Globe className="w-8 h-8 text-blue-500 morphing-animation" />
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  OB365 School
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Excellence in Education
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Pioneering the future of education with innovative learning
              methodologies, cutting-edge technology, and a global perspective
              that prepares students for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "About Us",
                "Academics",
                "Admissions",
                "Campus Life",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Programs */}
          <div className="space-y-4">
            <h4
              className="text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Programs
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Pre-Primary",
                "Primary School",
                "Middle School",
                "Secondary",
                "Senior Secondary",
              ].map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4
              className="text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-500" />
                <div style={{ color: "var(--text-secondary)" }}>
                  <p>Main Campus:</p>
                  <p>123 Education Avenue</p>
                  <p>New Delhi, India 110001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span style={{ color: "var(--text-secondary)" }}>
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span style={{ color: "var(--text-secondary)" }}>
                  info@everrise.edu
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="mt-12 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="space-y-2">
            <div className="text-2xl font-bold text-blue-500">10+</div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Countries
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-green-500">3</div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Campuses
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-purple-500">5000+</div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Alumni
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-orange-500">25+</div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Years
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-8 pt-6 border-t text-center text-sm"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          <p>
            &copy; 2025 OB365 School School. All rights reserved. | Designed for
            the Future of Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
