import Header from './Header';
import Footer from './Footer'
import { Target, Eye, Award, CheckCircle2, AlertCircle } from "lucide-react";

export default function AboutPage() {
  const differentiators = [
    "Implementation-focused, not theoretical",
    "Strong audit facilitation experience",
    "Deep regulatory and industry knowledge",
    "Customized solutions per client operations",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F7F0] to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Lean EHS
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Your Compliance Partner
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Company Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Lean EHS is a professional consultancy delivering compliance
              assessment, audit facilitation, and implementation support for
              regulatory, customer, and international standards.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="leading-relaxed">
              We work with manufacturing companies, corporates, factories, and
              organizations across industries to help them achieve and maintain
              compliance with environmental, health, safety, quality, and
              sustainability standards.
            </p>
            <p className="leading-relaxed">
              Our team brings practical expertise from years of hands-on
              experience in compliance management, audit preparation, and
              regulatory implementation across diverse industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-[#F0F7F0] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-[#5B8C5A]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Enable organizations to meet statutory, ethical, and
                sustainability obligations through practical compliance
                solutions that are site-focused, risk-based, and
                implementation-ready.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-[#E8F3F8] w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-[#4A6FA5]" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a trusted compliance partner that bridges
                the gap between regulatory requirements and operational reality,
                helping businesses achieve sustainable compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring practical, implementation-focused expertise to every
              engagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-[#F9FAFB] p-6 rounded-lg border border-gray-200 flex items-start space-x-4"
              >
                <CheckCircle2
                  className="text-[#5B8C5A] flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-gray-700 font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 md:py-20 bg-[#FEF3C7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertCircle
              className="text-[#D97706] flex-shrink-0 mt-1"
              size={28}
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Important Disclaimer
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lean EHS provides consultancy and audit facilitation services
                only. We do not act as a certification body or third-party audit
                organization. Our role is to prepare your organization for
                compliance and support you through the audit process, ensuring
                you meet the required standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#5B8C5A] to-[#4A7449]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Compliance Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Connect with our team to discuss your specific requirements
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#5B8C5A] px-8 py-4 rounded-md hover:bg-gray-50 transition-colors font-semibold text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
