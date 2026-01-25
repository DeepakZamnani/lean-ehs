"use client";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Shield,
  GraduationCap,
  Code,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Briefcase,
  TrendingUp,
  MessageCircle,
  ClipboardCheck
} from "lucide-react";

export default function ServicesPage() {
  const mainServices = [
    {
      id: "audit",
      icon: ClipboardCheck,
      title: "Audit & Compliance Services",
      description: "Comprehensive audit and compliance assessment services covering regulatory, quality, safety, and sustainability requirements across industries.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      link: "/audit",
      features: [
        "Regulatory EHS & Safety Audits",
        "ISO Management Systems",
        "Ethical Trade & Sustainability",
        "Environmental & Waste Compliance",
        "Automotive & Industry Standards",
        "Food Safety & Hygiene"
      ],
      color: "#5B8C5A"
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Training & Capability Development",
      description: "Comprehensive EHS training programs designed to build competency, ensure compliance, and strengthen workplace safety culture across all organizational levels.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      link: "/training",
      features: [
        "DISH-Approved Fire Fighting & First Aid",
        "Safety Leadership Development",
        "Permit to Work (PTW) Training",
        "Risk Assessment Training",
        "Electrical Safety & LOTO",
        "Emergency Response Planning"
      ],
      color: "#4A6FA5"
    },
    {
      id: "software",
      icon: Code,
      title: "EHS Software & Digital Solutions",
      description: "Comprehensive EHS software solutions to manage incidents, hazards, compliance, and safety performance with real-time tracking and data-driven insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      link: "/software",
      features: [
        "Incident Management Software",
        "Hazard Reporting Tools",
        "Process Safety Management (PSM)",
        "Behaviour Based Safety (BBS)",
        "Contractor Safety Management",
        "Job Hazard Analysis (JHA)"
      ],
      color: "#2C5F7C"
    },
    {
      id: "manpower",
      icon: Users,
      title: "Safety Manpower Recruitment",
      description: "End-to-end recruitment of qualified EHS professionals through domain-specific screening, compliance evaluation, and transparent hiring processes.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      link: "/manpower",
      features: [
        "EHS Manpower Recruitment (Client Payroll)",
        "Domain-Specific Talent Sourcing",
        "Technical & Compliance Screening",
        "Safety Leadership Hiring",
        "Multi-Industry Support",
        "End-to-End Recruitment Coordination"
      ],
      color: "#6B8E23"
    },
    {
      id: "specialized",
      icon: Target,
      title: "Specialized Services",
      description: "Diagnostic-led assessments and integrated retainer models combining Safety with Operational Excellence for sustainable performance improvement.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      link: "/specialized",
      features: [
        "SQDCIPE Diagnostic Framework",
        "Monthly Integrated Retainer Model",
        "Lean + EHS Integration",
        "Safety Culture Transformation",
        "Operational Excellence Programs",
        "Customized EHS Solutions"
      ],
      color: "#8B7355"
    }
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden pt-28 md:pt-28">
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
              End-to-end EHS solutions from compliance audits to training, software, manpower, and specialized consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Vertical Cards with Images */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete EHS solutions tailored to your industry needs and organizational goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#5B8C5A]/30 hover:-translate-y-2"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: "fadeInUp 0.6s ease-out forwards"
                  }}
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/10] relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Icon badge on image */}
                      <div className="absolute bottom-4 left-4">
                        <div 
                          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: service.color }}
                        >
                          <Icon className="text-white" size={28} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B8C5A] transition-colors leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Key Services</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: service.color }}
                              size={16}
                            />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <a 
                        href={service.link} 
                        className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300 group/link text-sm"
                        style={{ color: service.color }}
                      >
                        Explore Service
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
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
                  src="/logo_lean2.png"
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
                  Your Trusted EHS Partner
                </h2>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Practical, site-focused assessments",
                    "Comprehensive service portfolio",
                    "End-to-end implementation support",
                    "Industry-specific expertise",
                    "Proven track record across sectors"
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
        {/* Background */}
        <div className="absolute inset-0">
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
            Need Help With EHS Compliance?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Discuss your specific requirements with our EHS experts. We're here to help you achieve safety and compliance excellence.
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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919028360700"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Button */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <MessageCircle className="text-white" size={32} />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat with us on WhatsApp
            {/* Arrow */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </a>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}