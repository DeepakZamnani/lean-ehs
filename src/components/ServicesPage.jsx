"use client";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Shield,
  Leaf,
  Factory,
  Award,
  Utensils,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Target,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const serviceCategories = [
    {
      id: "regulatory",
      icon: Shield,
      title: "Regulatory EHS & Safety Audits",
      shortTitle: "Regulatory EHS",
      color: "#5B8C5A",
      bgColor: "#F0F7F0",
      description: "Statutory compliance assessment, gap analysis, and risk mitigation across electrical, fire, and life safety standards.",
      services: [
        "Regulatory EHS Audits",
        "Electrical Safety Audits",
        "Fire & Life Safety Audits",
        "Occupational Health & Safety Assessments",
      ],
    },
    {
      id: "ethical",
      icon: Leaf,
      title: "Ethical Trade & Sustainability",
      shortTitle: "Sustainability",
      color: "#4A6FA5",
      bgColor: "#E8F3F8",
      description: "Ethical trade compliance, sustainability assessments, and responsible business practices certification support.",
      services: [
        "SMETA / Sedex Audits",
        "Responsible Business Alliance (RBA)",
        "EcoVadis Assessment Support",
        "SA8000 Social Accountability",
        "WRAP (Worldwide Responsible Accredited Production)",
        "ISO 26000 Social Responsibility Guidance",
      ],
    },
    {
      id: "environmental",
      icon: FileCheck,
      title: "Environmental & Waste Compliance",
      shortTitle: "Environmental",
      color: "#6B8E23",
      bgColor: "#F5F8E8",
      description: "Environmental legal compliance, waste management rules, and pollution control monitoring solutions.",
      services: [
        "IS 14489 Implementation",
        "Environmental Legal Compliance Review",
        "Waste Management Rules Adherence",
        "Pollution Control & Monitoring",
        "Environmental Impact Assessments",
      ],
    },
    {
      id: "iso",
      icon: Award,
      title: "ISO Management Systems",
      shortTitle: "ISO Systems",
      color: "#8B7355",
      bgColor: "#F5F1ED",
      description: "Complete ISO implementation support across quality, environmental, safety, and specialized management systems.",
      services: [
        "ISO 9001 - Quality Management",
        "ISO 14001 - Environmental Management",
        "ISO 45001 - Occupational Health & Safety",
        "ISO 27001 - Information Security",
        "ISO 50001 - Energy Management",
        "ISO 22301 - Business Continuity",
        "ISO 13485 - Medical Devices Quality",
        "ISO 37001 - Anti-Bribery Management",
      ],
    },
    {
      id: "automotive",
      icon: Factory,
      title: "Automotive & Industry Standards",
      shortTitle: "Automotive",
      color: "#2C5F7C",
      bgColor: "#E8F1F5",
      description: "Specialized automotive quality standards including IATF and VDA process, product, and system audits.",
      services: [
        "IATF 16949 - Automotive Quality Management",
        "VDA 6.1 - Quality Management System Audit",
        "VDA 6.3 - Process Audit",
        "VDA 6.5 - Product Audit",
      ],
    },
    {
      id: "food",
      icon: Utensils,
      title: "Food Safety & Hygiene",
      shortTitle: "Food Safety",
      color: "#D97706",
      bgColor: "#FEF3C7",
      description: "Food safety management systems, HACCP implementation, and regulatory compliance for food industry.",
      services: [
        "ISO 22000 / FSSC 22000",
        "HACCP Implementation",
        "BRCGS Food Safety",
        "FSSAI Compliance Support",
      ],
    },
  ];

  const approach = [
    {
      icon: Target,
      step: "01",
      title: "Gap Assessment",
      description: "Comprehensive review of current state vs. requirements with detailed documentation",
    },
    {
      icon: Briefcase,
      step: "02",
      title: "Implementation Support",
      description: "Hands-on guidance for closing identified gaps with practical solutions",
    },
    {
      icon: CheckCircle2,
      step: "03",
      title: "Audit Readiness",
      description: "Preparation and facilitation for certification audits with complete support",
    },
    {
      icon: TrendingUp,
      step: "04",
      title: "Continuous Improvement",
      description: "Ongoing support and monitoring to maintain compliance excellence",
    },
  ];

  const filteredCategories = selectedCategory === "all" 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/services.jpg"
            alt="LEAN EHS Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A]/95 via-[#4A7449]/90 to-[#4A6FA5]/95" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-white" size={18} />
              <span className="text-white font-medium text-sm">
                Comprehensive EHS Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Comprehensive compliance solutions across regulatory, quality, safety, and sustainability standards. From gap assessment to certification readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-[#5B8C5A] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#5B8C5A] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#5B8C5A]/30 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card Header with Icon and Color */}
                  <div 
                    className="p-8 relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${category.color}15 0%, ${category.color}05 100%)`
                    }}
                  >
                    {/* Decorative Circle */}
                    <div 
                      className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
                      style={{ backgroundColor: category.color }}
                    />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: category.bgColor }}
                      >
                        <Icon style={{ color: category.color }} size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#5B8C5A] transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="p-8 pt-6">
                    <div className="space-y-3">
                      {category.services.map((service, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                        >
                          <CheckCircle2 
                            className="flex-shrink-0 mt-0.5 transition-colors"
                            style={{ color: category.color }}
                            size={18}
                          />
                          <span className="text-gray-700 text-sm font-medium leading-relaxed">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group/link"
                        style={{ color: category.color }}
                      >
                        Get Started
                        <ArrowRight 
                          className="group-hover/link:translate-x-1 transition-transform" 
                          size={16}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Deliver - Enhanced with Images */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#5B8C5A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A6FA5]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#5B8C5A] font-semibold text-sm tracking-wider uppercase">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our structured approach ensures practical, implementation-ready solutions that deliver real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  {/* Connecting Line */}
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#5B8C5A]/30 to-transparent -translate-x-4" />
                  )}
                  
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#5B8C5A]/30 hover:-translate-y-2 relative z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#5B8C5A] to-[#4A6FA5] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                    
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F0F7F0] to-[#E8F3F8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#5B8C5A]" size={32} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B8C5A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/services.jpg"
                  alt="LEAN EHS Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#5B8C5A]/20 to-transparent" />
              </div>
              
              {/* Right - Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="text-[#5B8C5A] font-semibold text-sm tracking-wider uppercase">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted Compliance Partner
                </h2>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Practical, site-focused assessments",
                    "Regulatory expertise across industries",
                    "End-to-end implementation support",
                    "No certification conflicts - pure consultancy",
                    "Proven track record with 150+ clients",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#5B8C5A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-[#5B8C5A]" size={16} />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group"
                >
                  Schedule a Consultation
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Background with services.jpg */}
        <div className="absolute inset-0">
          <img
            src="/services.jpg"
            alt="Contact LEAN EHS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A]/95 via-[#4A7449]/90 to-[#4A6FA5]/95" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-white" size={18} />
            <span className="text-white font-medium text-sm">
              Ready to Get Started?
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Need Help With Compliance?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Discuss your specific requirements with our compliance experts. We're here to help you achieve excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#5B8C5A] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Get In Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg hover:-translate-y-1"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}