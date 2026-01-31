import { 
  Shield,
  Leaf,
  FileCheck,
  Award,
  Factory,
  Utensils,
  ChevronRight,
  CheckCircle2,
  ClipboardCheck,
  Target,
  BookOpen,
  TrendingUp,
  ArrowRight
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

export default function AuditPage() {
  const auditServices = [
    {
      id: 1,
      icon: Shield,
      title: "Regulatory EHS & Safety Audits",
      description: "Statutory compliance assessment, gap analysis, and risk mitigation across electrical, fire, and life safety standards.",
      highlights: [
        "Regulatory EHS Audits",
        "Electrical Safety Audits",
        "Fire & Life Safety Audits",
        "Occupational Health & Safety Assessments"
      ],
      color: "from-[#5B8C5A] to-[#4A7449]"
    },
    {
      id: 2,
      icon: Leaf,
      title: "Ethical Trade & Sustainability",
      description: "Ethical trade compliance, sustainability assessments, and responsible business practices certification support.",
      highlights: [
        "SMETA / Sedex Audits",
        "Responsible Business Alliance (RBA)",
        "EcoVadis Assessment Support",
        "SA8000 Social Accountability",
        "WRAP (Worldwide Responsible Accredited Production)",
        "ISO 26000 Social Responsibility Guidance"
      ],
      color: "from-[#4A6FA5] to-[#3d5a8f]"
    },
    {
      id: 3,
      icon: FileCheck,
      title: "Environmental & Waste Compliance",
      description: "Environmental legal compliance, waste management rules, and pollution control monitoring solutions.",
      highlights: [
        "IS 14489 Implementation",
        "Environmental Legal Compliance Review",
        "Waste Management Rules Adherence",
        "Pollution Control & Monitoring",
        "Environmental Impact Assessments"
      ],
      color: "from-[#6B8E23] to-[#556B2F]"
    },
    {
      id: 4,
      icon: Award,
      title: "ISO Management Systems",
      description: "Complete ISO implementation support across quality, environmental, safety, and specialized management systems.",
      highlights: [
        "ISO 9001 - Quality Management",
        "ISO 14001 - Environmental Management",
        "ISO 45001 - Occupational Health & Safety",
        "ISO 27001 - Information Security",
        "ISO 50001 - Energy Management",
        "ISO 22301 - Business Continuity",
        "ISO 13485 - Medical Devices Quality",
        "ISO 37001 - Anti-Bribery Management"
      ],
      color: "from-[#8B7355] to-[#6B5846]"
    },
    {
      id: 5,
      icon: Factory,
      title: "Automotive & Industry Standards",
      description: "Specialized automotive quality standards including IATF and VDA process, product, and system audits.",
      highlights: [
        "IATF 16949 - Automotive Quality Management",
        "VDA 6.1 - Quality Management System Audit",
        "VDA 6.3 - Process Audit",
        "VDA 6.5 - Product Audit"
      ],
      color: "from-[#2C5F7C] to-[#1e4a5f]"
    },
    {
      id: 6,
      icon: Utensils,
      title: "Food Safety & Hygiene",
      description: "Food safety management systems, HACCP implementation, and regulatory compliance for food industry.",
      highlights: [
        "ISO 22000 / FSSC 22000",
        "HACCP Implementation",
        "BRCGS Food Safety",
        "FSSAI Compliance Support"
      ],
      color: "from-[#D97706] to-[#B45309]"
    }
  ];

  const benefits = [
    {
      icon: ClipboardCheck,
      title: "Expert Auditors",
      description: "Experienced professionals with industry expertise"
    },
    {
      icon: Target,
      title: "Gap Analysis",
      description: "Comprehensive compliance assessment"
    },
    {
      icon: BookOpen,
      title: "Audit Readiness",
      description: "Complete preparation and facilitation support"
    },
    {
      icon: TrendingUp,
      title: "Continuous Support",
      description: "Ongoing guidance for sustained compliance"
    }
  ];

  const auditGallery = [
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      title: "On-Site Audit Assessments",
      description: "Comprehensive facility evaluations and compliance verification"
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
      title: "Documentation & Reporting",
      description: "Detailed audit reports with actionable recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F7F0] to-white">
        <Header />
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80" 
            alt="Audit Services Background"
            className="w-full h-full object-cover"
          />
<div className="absolute inset-0 bg-gradient-to-br from-[#F0F7F0]/80 via-[#F0F7F0]/70 to-[#E8F5E8]/60"></div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#5B8C5A]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#4A6FA5]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#5B8C5A]/30 shadow-sm">
              <ClipboardCheck className="text-[#5B8C5A]" size={20} />
              <span className="text-sm font-semibold text-gray-700">Audit & Compliance Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Achieve
              <span className="block bg-gradient-to-r from-[#5B8C5A] to-[#4A6FA5] bg-clip-text text-transparent">
                Compliance Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive audit and compliance services across regulatory, quality, safety, 
              and sustainability standards to ensure your operations meet all requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href="/contact" 
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-[#5B8C5A]/25 transition-all duration-300 font-semibold overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4A7449] to-[#5B8C5A] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Request Audit
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg border-2 border-[#5B8C5A]/30 hover:border-[#5B8C5A] hover:bg-[#F0F7F0] transition-all duration-300 font-semibold"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-[#F0F7F0] to-white border border-[#5B8C5A]/20 hover:border-[#5B8C5A] hover:shadow-lg transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards"
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5B8C5A] to-[#4A7449] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Audit Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive audit and compliance assessment services covering regulatory, 
              quality, safety, and sustainability requirements across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {auditServices.map((service, index) => {
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
                  {/* Card Header with Icon and Color */}
                  <div 
                    className="p-8 relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, rgba(91, 140, 90, 0.08) 0%, rgba(91, 140, 90, 0.03) 100%)`
                    }}
                  >
                    {/* Decorative Circle */}
                    <div 
                      className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 bg-gradient-to-br ${service.color}`}
                    />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${service.color}`}
                      >
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#5B8C5A] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="p-8 pt-6">
                    <div className="space-y-3">
                      {service.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                        >
                          <CheckCircle2 
                            className="flex-shrink-0 mt-0.5 transition-colors text-[#5B8C5A]"
                            size={18}
                          />
                          <span className="text-gray-700 text-sm font-medium leading-relaxed">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group/link text-[#5B8C5A]"
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

      {/* Our Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Audit Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical, site-focused assessments with actionable recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Gap Assessment",
                description: "Comprehensive review of current compliance status"
              },
              {
                title: "Risk Analysis",
                description: "Identify and prioritize compliance risks"
              },
              {
                title: "Action Planning",
                description: "Develop corrective and preventive actions"
              },
              {
                title: "Implementation Support",
                description: "Guidance through audit closure and certification"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#F0F7F0] to-white border border-[#5B8C5A]/20 hover:border-[#5B8C5A] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5B8C5A] to-[#4A7449] flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Audit Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert-led assessments and comprehensive reporting for complete compliance confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditGallery.map((item, index) => (
              <div 
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards"
                }}
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-4 border-[#5B8C5A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#5B8C5A] to-[#4A7449] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Compliance Audit?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with LEAN EHS for comprehensive audit services that ensure compliance, 
            identify gaps, and provide actionable recommendations for continuous improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-[#5B8C5A] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              Schedule an Audit
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-[#5B8C5A] transition-all duration-300 font-semibold"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> LEAN EHS provides consultancy, assessment, and audit facilitation 
            services only and does not act as a certification body or third-party auditor.
          </p>
        </div>
      </section>

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
      <Footer />
    </div>
  );
}