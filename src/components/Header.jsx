"use client";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const servicesDropdown = [
    { href: "/training", label: "Training" },
    { href: "/audit", label: "Audit & Compliance" },
    { href: "/manpower", label: "Manpower" },
    { href: "/software", label: "Software" },
    { href: "/specialized", label: "Specialized Services" },
  ];

  const industriesDropdown = [
    { href: "/industries/automotive", label: "Automotive" },
    { href: "/industries/manufacturing", label: "Manufacturing" },
    { href: "/industries/healthcare", label: "Healthcare" },
    { href: "/industries/warehousing", label: "Warehousing & Logistics" },
    { href: "/industries/food-beverage", label: "Food & Beverage" },
  ];

  const navLinks = [
    { href: "/", label: "Home", hasDropdown: false },
    { href: "/about", label: "About Us", hasDropdown: false },
    { 
      href: "/services", 
      label: "Services", 
      hasDropdown: true,
      dropdown: servicesDropdown,
    },
    { 
      href: "/industries", 
      label: "Industries", 
      hasDropdown: false,
      
    },
    { href: "/contact", label: "Contact", hasDropdown: false },
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
          <a href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/logo_lean2.png"
                alt="Lean EHS Logo"
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#5B8C5A]/0 group-hover:bg-[#5B8C5A]/10 rounded-lg blur-xl transition-all duration-300" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group/dropdown">
                <div className="flex items-center">
                  {/* Main link */}
                  <a
                    href={link.href}
                    className={`px-3 py-2 text-gray-700 hover:text-[#5B8C5A] transition-all duration-300 font-medium text-sm ${
                      currentPath === link.href || currentPath.startsWith(link.href + '/') ? "text-[#5B8C5A]" : ""
                    }`}
                  >
                    {link.label}
                  </a>
                  
                  {/* Dropdown arrow (only for dropdown items) */}
                  {link.hasDropdown && (
                    <div className="px-1 py-2 text-gray-700 group-hover/dropdown:text-[#5B8C5A] transition-all duration-300">
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 group-hover/dropdown:rotate-180"
                      />
                    </div>
                  )}
                </div>

                {/* Dropdown Menu - Shows on hover */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#5B8C5A]/20 overflow-hidden opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible translate-y-2 group-hover/dropdown:translate-y-0 transition-all duration-300">
                    {link.dropdown.map((item, index) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-[#5B8C5A] transition-colors duration-200 text-sm font-medium border-b border-[#5B8C5A]/10 last:border-b-0"
                        style={{
                          animationDelay: `${index * 30}ms`,
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:shadow-[#5B8C5A]/25 transition-all duration-300 font-medium text-sm overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#4A7449] to-[#5B8C5A] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              
              <span className="relative flex items-center gap-2">
                <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                Get Started
              </span>
              
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
            mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-[#5B8C5A]/30 space-y-1">
            {navLinks.map((link, index) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <div>
                    {/* Main mobile link with dropdown toggle */}
                    <div className="flex items-center justify-between">
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex-1 py-3 px-4 text-gray-700 hover:text-[#3d6b3d] hover:bg-[#D4ECD4] transition-all duration-300 font-medium rounded-lg ${
                          currentPath === link.href || currentPath.startsWith(link.href + '/')
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
                        {link.label}
                      </a>
                      <button
                        onClick={() => {
                          if (link.label === "Services") {
                            setMobileServicesOpen(!mobileServicesOpen);
                          } else if (link.label === "Industries") {
                            setMobileIndustriesOpen(!mobileIndustriesOpen);
                          }
                        }}
                        className="px-4 py-3 text-gray-700 hover:text-[#3d6b3d] transition-all duration-300"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            (link.label === "Services" && mobileServicesOpen) ||
                            (link.label === "Industries" && mobileIndustriesOpen)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile dropdown menu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        (link.label === "Services" && mobileServicesOpen) ||
                        (link.label === "Industries" && mobileIndustriesOpen)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 space-y-1 mt-1">
                        {link.dropdown.map((item, subIndex) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-4 text-gray-600 hover:text-[#3d6b3d] hover:bg-[#D4ECD4]/50 transition-all duration-300 font-medium rounded-lg text-sm"
                            style={{
                              animationDelay: `${subIndex * 30}ms`,
                              animation:
                                (link.label === "Services" && mobileServicesOpen) ||
                                (link.label === "Industries" && mobileIndustriesOpen)
                                  ? "slideInFromRight 0.3s ease-out forwards"
                                  : "none",
                            }}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
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
                )}
              </div>
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