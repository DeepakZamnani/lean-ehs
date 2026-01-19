import Header from './Header';
import Footer from './Footer'
import {
  Shield,
  FileCheck,
  Leaf,
  Factory,
  Award,
  TrendingUp,
  CheckCircle2,
  Users,
  Target,
  Briefcase,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: Shield,
      title: "Regulatory EHS & Safety Audits",
      description:
        "Comprehensive compliance audits covering electrical safety, fire safety, and regulatory EHS requirements.",
    },
    {
      icon: Award,
      title: "ISO Management Systems",
      description:
        "Implementation support for ISO 9001, 14001, 45001, 27001, 50001, and industry-specific standards.",
    },
    {
      icon: Leaf,
      title: "Ethical Trade & Sustainability",
      description:
        "SMETA, RBA, EcoVadis, SA8000, WRAP assessments and sustainability compliance solutions.",
    },
    {
      icon: FileCheck,
      title: "Environmental & Waste Compliance",
      description:
        "IS 14489, environmental legal compliance, and waste management rule adherence.",
    },
    {
      icon: Factory,
      title: "Industry-Specific Standards",
      description:
        "IATF 16949, VDA 6.x, ISO 22000, HACCP, BRCGS, and medical device compliance.",
    },
    {
      icon: TrendingUp,
      title: "Audit Readiness & Support",
      description:
        "End-to-end support from gap assessment to corrective action closure and audit facilitation.",
    },
  ];

  const approach = [
    {
      icon: Target,
      title: "Site-Focused & Practical",
      description: "On-ground assessments tailored to your operations",
    },
    {
      icon: CheckCircle2,
      title: "Compliance Gap Identification",
      description: "Clear identification of regulatory and standard gaps",
    },
    {
      icon: Briefcase,
      title: "Actionable Recommendations",
      description: "Implementation-ready solutions, not theoretical advice",
    },
    {
      icon: Users,
      title: "End-to-End Support",
      description: "From assessment to closure, we support every step",
    },
  ];


  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section - Enhanced with overlapping elements and gradient */}
      <section className="relative bg-gradient-to-br from-[#F0F7F0] via-white to-[#E8F3F8] py-20 md:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#5B8C5A]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A6FA5]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left animate-fadeIn">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#5B8C5A]/20 mb-6 shadow-sm">
                <Sparkles className="text-[#5B8C5A]" size={18} />
                <span className="text-sm font-medium text-gray-700">
                  Minimizing Risk, Maximizing Results
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building a Strong
                <span className="block text-[#5B8C5A] mt-2">Safety Culture</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                End-to-end EHS & compliance solutions for modern businesses. We deliver practical, site-focused compliance, audit readiness, and implementation support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/services"
                  className="group inline-flex items-center justify-center gap-2 bg-[#5B8C5A] text-white px-8 py-4 rounded-lg hover:bg-[#4A7449] transition-all duration-300 font-medium text-lg shadow-lg shadow-[#5B8C5A]/25 hover:shadow-xl hover:shadow-[#5B8C5A]/30 hover:-translate-y-0.5"
                >
                  Explore Services
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#5B8C5A] border-2 border-[#5B8C5A] px-8 py-4 rounded-lg hover:bg-[#F0F7F0] transition-all duration-300 font-medium text-lg shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Get Started
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>

            {/* Right Image/Visual Element */}
            <div className="relative lg:block hidden">
              <div className="relative z-10">
                {/* Hero Image */}
                <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white/50 backdrop-blur-sm">
                  <img
                    src="/services.jpg"
                    alt="LEAN EHS - Safety & Compliance Excellence"
                    className="w-full h-auto object-cover"
                  />
                  {/* Image Overlay with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B8C5A]/20 to-transparent" />
                  
                  {/* Floating Badges on Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#5B8C5A]/10 rounded-full flex items-center justify-center">
                          <Shield className="text-[#5B8C5A]" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Expert Compliance Solutions</p>
                          <p className="text-sm text-gray-600">ISO & EHS Standards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge - Top Right */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-xl border-4 border-[#F0F7F0] animate-float">
                  <div className="text-center">
                    <Award className="text-[#5B8C5A] mx-auto mb-1" size={28} />
                    <p className="text-xs font-bold text-gray-900">Certified</p>
                    <p className="text-xs text-gray-600">Experts</p>
                  </div>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-[#5B8C5A]/10 to-transparent rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Lean EHS */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#5B8C5A] via-[#4A7449] to-[#4A6FA5]">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-white" size={18} />
              <span className="text-white font-medium text-sm">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Lean EHS
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Your trusted partner for compliance clarity and audit confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                text: "Practical, risk-based assessments",
                icon: Target,
              },
              {
                text: "Regulatory expertise across industries",
                icon: Award,
              },
              {
                text: "Audit readiness to corrective action closure",
                icon: CheckCircle2,
              },
              {
                text: "No certification conflict (consultancy only)",
                icon: Shield,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md p-6 rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors mx-auto">
                  <item.icon className="text-white" size={24} />
                </div>
                <p className="text-white font-medium leading-relaxed text-center">
                  {item.text}
                </p>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services - Enhanced cards with icons and better layout */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-[#F9FAFB] to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#5B8C5A] rounded-lg rotate-12" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-[#4A6FA5] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#5B8C5A] font-semibold text-sm tracking-wider uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Core Service Highlights
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive compliance solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#5B8C5A]/30 hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#F0F7F0] to-[#E8F3F8] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="text-[#5B8C5A]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B8C5A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#5B8C5A] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[#5B8C5A] font-semibold text-lg hover:text-[#4A7449] transition-colors group"
            >
              View All Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach - Enhanced with timeline-style layout */}
      <section className="py-5 md:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#4A6FA5] font-semibold text-sm tracking-wider uppercase">
                Our Methodology
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Implementation-focused methodology that delivers real results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#4A6FA5]/20 to-transparent" />
            
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="text-center group">
                    {/* Step Number */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#4A6FA5] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#E8F3F8] to-[#F0F7F0] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                      <Icon className="text-[#4A6FA5]" size={32} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 px-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed px-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with better gradient and layout */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#5B8C5A] via-[#4A7449] to-[#4A6FA5] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-white" size={18} />
            <span className="text-white/90 text-sm font-medium">
              Ready to Get Started?
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Talk to Our Compliance Experts
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Get practical guidance on your compliance journey. Connect with our team for a consultation.
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
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg hover:-translate-y-1"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(3deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}