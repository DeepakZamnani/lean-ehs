import Header from './Header';
import Footer from './Footer'
import {
  Factory,
  Car,
  UtensilsCrossed,
  Shirt,
  Heart,
  Warehouse,
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Comprehensive EHS compliance for general manufacturing, process industries, and production facilities.",
      services: "ISO management systems, regulatory audits, safety compliance",
    },
    {
      icon: Car,
      title: "Automotive",
      description:
        "Specialized support for automotive component manufacturers and tier suppliers.",
      services: "IATF 16949, VDA standards, ISO 14001, ISO 45001",
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Beverage",
      description:
        "Food safety management and regulatory compliance for processors and manufacturers.",
      services: "ISO 22000, HACCP, BRCGS, FSSAI compliance",
    },
    {
      icon: Shirt,
      title: "Apparel & Textiles",
      description:
        "Ethical trade, sustainability, and compliance solutions for garment and textile manufacturers.",
      services: "SMETA, WRAP, SA8000, EcoVadis, environmental compliance",
    },
    {
      icon: Heart,
      title: "Healthcare & Medical Devices",
      description:
        "Quality and regulatory compliance for medical device manufacturers and healthcare facilities.",
      services: "ISO 13485, regulatory EHS, occupational health & safety",
    },
    {
      icon: Warehouse,
      title: "Warehousing & Logistics",
      description:
        "Safety, environmental, and quality management for warehouse operations and logistics providers.",
      services: "Fire safety, electrical safety, ISO 9001, ISO 45001",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F7F0] to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Tailored compliance solutions across diverse industrial sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#F0F7F0] w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="text-[#5B8C5A]" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 font-medium mb-2">
                      Key Services:
                    </p>
                    <p className="text-sm text-gray-600">{industry.services}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Expertise */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cross-Industry Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our consultants bring deep knowledge of regulatory frameworks and
              industry-specific requirements
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Statutory EHS regulations across states",
                "Customer-specific audit protocols",
                "International sustainability standards",
                "Industry best practices and benchmarks",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-[#5B8C5A] mt-2 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#5B8C5A] to-[#4A7449]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Industry, Our Expertise
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Connect with us to discuss compliance solutions for your specific
            sector
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#5B8C5A] px-8 py-4 rounded-md hover:bg-gray-50 transition-colors font-semibold text-lg"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
