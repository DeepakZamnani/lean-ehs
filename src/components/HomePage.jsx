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

      {/* Hero Section - Industrial & Bold Design with Light Background */}
      <section className="relative h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden flex items-center">
        {/* Industrial Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(91, 140, 90, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91, 140, 90, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Diagonal Accent Stripes */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(91, 140, 90, 0.5) 50px, rgba(91, 140, 90, 0.5) 51px)',
          }} />
        </div>

        {/* Animated Glow Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#5B8C5A]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4A6FA5]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-left space-y-6">
              {/* Industrial Badge */}
              <div className="inline-flex items-center gap-3 bg-[#5B8C5A]/10 backdrop-blur-sm border-l-4 border-[#5B8C5A] px-6 py-3">
                <div className="w-2 h-2 bg-[#5B8C5A] rounded-full animate-pulse" />
                <span className="text-sm font-bold text-[#5B8C5A] tracking-wider uppercase">
                  EHS Compliance Experts
                </span>
              </div>
              
              {/* Main Headline - Bold & Industrial */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-none tracking-tight">
                  SAFETY
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5B8C5A] to-[#87C487] mt-2">
                    FIRST.
                  </span>
                  <span className="block text-gray-900 mt-2">
                    ALWAYS.
                  </span>
                </h1>
                
                {/* Industrial Divider */}
                <div className="flex items-center gap-4 py-3">
                  <div className="h-1 w-20 bg-gradient-to-r from-[#5B8C5A] to-transparent" />
                  <div className="h-1 w-12 bg-[#5B8C5A]/50" />
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-xl">
                Industrial-grade <span className="text-[#5B8C5A] font-semibold">EHS compliance</span> and <span className="text-[#5B8C5A] font-semibold">safety audits</span> that protect your people, operations, and reputation.
              </p>
              
              {/* Stats Bar - Industrial Style */}
              <div className="grid grid-cols-3 gap-4 py-4">
                {[
                  { number: "ISO", label: "Certified Standards" },
                  { number: "24/7", label: "Expert Support" },
                  { number: "100%", label: "Compliance Focus" }
                ].map((stat, index) => (
                  <div key={index} className="border-l-2 border-[#5B8C5A] pl-4">
                    <div className="text-xl font-black text-[#5B8C5A]">{stat.number}</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons - Industrial */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/contact"
                  className="group relative px-8 py-3 bg-[#5B8C5A] text-white font-bold text-base overflow-hidden transition-all duration-300 hover:bg-[#4A7449]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    GET STARTED
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </a>
                
                <a
                  href="/services"
                  className="group px-8 py-3 border-2 border-[#5B8C5A] text-[#5B8C5A] font-bold text-base hover:bg-[#5B8C5A]/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  OUR SERVICES
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </div>

            {/* Right Visual - Industrial Image with Data Overlay */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Main Image Container with Padding */}
                <div className="relative overflow-hidden border-4 border-[#5B8C5A]/30 p-4 bg-white shadow-2xl">
                  <img
                    src="/lean-img1.jpg"
                    alt="LEAN EHS Industrial Safety"
                    className="w-full h-[450px] object-cover"
                  />
                  
                  {/* Light Gradient Overlay */}
                  <div className="absolute inset-4 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Corner Brackets - Industrial Look */}
                  <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-[#5B8C5A]" />
                  <div className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 border-[#5B8C5A]" />
                  <div className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 border-[#5B8C5A]" />
                  <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-[#5B8C5A]" />
                  
                  {/* Data Cards Overlay */}
                  <div className="absolute bottom-10 left-10 right-10 space-y-2">
                    {/* ISO Standards Card */}
                    <div className="bg-white/95 backdrop-blur-md border-l-4 border-[#5B8C5A] p-3 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="text-[#5B8C5A]" size={20} />
                          <div>
                            <div className="text-gray-900 font-bold text-xs">ISO Compliance</div>
                            <div className="text-gray-600 text-[10px]">9001 | 14001 | 45001 | 27001</div>
                          </div>
                        </div>
                        <CheckCircle2 className="text-[#5B8C5A]" size={18} />
                      </div>
                    </div>
                    
                    {/* Status Card */}
                    <div className="bg-white/95 backdrop-blur-md border-l-4 border-[#4A6FA5] p-3 shadow-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="text-[#4A6FA5]" size={20} />
                          <div>
                            <div className="text-gray-900 font-bold text-xs">Expert Auditors</div>
                            <div className="text-gray-600 text-[10px]">Certified & Experienced</div>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-[#5B8C5A] rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Metric Card - Top Right */}
                <div className="absolute -top-4 -right-4 bg-[#5B8C5A] p-4 shadow-2xl border-4 border-white">
                  <div className="text-center">
                    <div className="text-3xl font-black text-white mb-1">100%</div>
                    <div className="text-[10px] text-white/90 uppercase tracking-wider">Compliance</div>
                    <div className="text-[10px] text-white/90 uppercase tracking-wider">Focused</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Industrial Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#5B8C5A] to-transparent" />
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

        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}