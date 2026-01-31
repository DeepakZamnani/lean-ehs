import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img
                src="/logo_lean2.png"
                alt="Lean EHS Logo"
                className="h-36 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              Professional EHS compliance consultancy delivering practical audit
              facilitation and implementation support for regulatory, customer,
              and international standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-[#5B8C5A] transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-600 hover:text-[#5B8C5A] transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/industries"
                  className="text-gray-600 hover:text-[#5B8C5A] transition-colors text-sm"
                >
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-[#5B8C5A] transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-600 text-sm">
                <Mail
                  size={18}
                  className="mt-0.5 text-[#5B8C5A] flex-shrink-0"
                />
                {/* <span>info@leanehs.in</span> */}
                <span>leanehs@outlook.com </span>
              </li>
              <li className="flex items-start space-x-2 text-gray-600 text-sm">
                <Phone
                  size={18}
                  className="mt-0.5 text-[#5B8C5A] flex-shrink-0"
                />
                <span>9028360700</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Lean EHS. All rights reserved. |
            Consultancy services only - not a certification body.
          </p>
        </div>
      </div>
    </footer>
  );
}
