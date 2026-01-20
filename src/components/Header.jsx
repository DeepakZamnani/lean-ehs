"use client";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    // Set current path on mount and update it
    setCurrentPath(window.location.pathname);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#E8F5E8]/95 backdrop-blur-lg shadow-lg border-b border-[#5B8C5A]/30"
          : "bg-[#F0F7F0]/80 backdrop-blur-md shadow-sm border-b border-[#5B8C5A]/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <img
                src="/logo_lean2.png"
                alt="Lean EHS Logo"
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-[#5B8C5A]/0 group-hover:bg-[#5B8C5A]/10 rounded-lg blur-xl transition-all duration-300" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-gray-700 hover:text-[#3d6b3d] transition-all duration-300 font-medium text-sm group ${
                  currentPath === link.href ? "text-[#3d6b3d]" : ""
                }`}
              >
                {link.label}
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5B8C5A] to-[#4A6FA5] transition-all duration-300 ${
                    currentPath === link.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
                {/* Hover background */}
                <span className="absolute inset-0 bg-[#5B8C5A]/0 group-hover:bg-[#5B8C5A]/10 rounded-lg transition-colors duration-300 -z-10" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#5B8C5A]/25 transition-all duration-300 font-medium text-sm overflow-hidden"
            >
              {/* Animated background on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#4A7449] to-[#5B8C5A] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              
              <span className="relative flex items-center gap-2">
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                Get Started
              </span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#3d6b3d] transition-colors rounded-lg hover:bg-[#5B8C5A]/10"
          >
            {mobileMenuOpen ? (
              <X size={24} className="transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={24} className="transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-[#5B8C5A]/30 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 text-gray-700 hover:text-[#3d6b3d] hover:bg-[#D4ECD4] transition-all duration-300 font-medium rounded-lg ${
                  currentPath === link.href
                    ? "text-[#3d6b3d] bg-[#D4ECD4]"
                    : ""
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: mobileMenuOpen
                    ? "slideInFromRight 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  {link.label}
                  {currentPath === link.href && (
                    <div className="w-2 h-2 bg-[#5B8C5A] rounded-full" />
                  )}
                </div>
              </a>
            ))}
            
            {/* Mobile CTA */}
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-center group"
            >
              <div className="flex items-center justify-center gap-2">
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                Get Started
              </div>
            </a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}