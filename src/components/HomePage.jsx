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
import { useEffect, useState } from "react";

import { MessageCircle } from "lucide-react";



export default function HomePage() {

  const images = [
  "/lean-img1.jpg",
  "/lean-img2.jpg",
  "/services.jpg",
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 3000); // 3 seconds

  return () => clearInterval(interval);
}, []);

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

<section className="relative min-h-screen overflow-hidden flex items-center bg-[#F8FBF8]">
  {/* Soft organic background shapes */}
  <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#5B8C5A]/10 rounded-full blur-3xl" />
  <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-[#4A6FA5]/10 rounded-full blur-3xl" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
    
    {/* LEFT CONTENT */}
    <div className="lg:col-span-6 space-y-8">
      {/* Badge */}
      <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-gray-200">
  {/* Logo */}
  <img
    src="/logo_lean2.png"
    alt="Lean EHS Logo"
    className="h-6 w-auto object-contain"
  />

  {/* Dot */}
  <span className="w-2 h-2 bg-[#5B8C5A] rounded-full" />

  {/* Text */}
  <span className="text-sm font-semibold text-[#5B8C5A] tracking-wide">
    EHS COMPLIANCE EXPERTS
  </span>
</div>


      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Safety isn’t a feature.
        <span className="block text-[#5B8C5A] mt-2">
          It’s a commitment.
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
        Industrial-grade <span className="font-semibold text-[#5B8C5A]">EHS compliance</span> and 
        <span className="font-semibold text-[#5B8C5A]"> safety audits</span> that protect people,
        operations, and reputation.
      </p>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#5B8C5A] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
        >
          Get Started
          <ArrowRight size={18} />
        </a>

        <a
          href="/services"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5B8C5A] font-semibold rounded-xl border border-[#5B8C5A]/30 hover:bg-[#5B8C5A]/5 transition"
        >
          Our Services
        </a>
      </div>

      {/* Stats */}
      <div className="flex gap-8 pt-6">
        {[
          { value: "ISO", label: "Standards" },
          { value: "10+", label: "Years" },
          { value: "100%", label: "Audit Focus" },
        ].map((s, i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-[#5B8C5A]">{s.value}</div>
            <div className="text-sm text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="lg:col-span-6 relative">
  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="Lean EHS Safety"
        className={`absolute inset-0 w-full h-full object-cover brightness-110 transition-opacity duration-1000 ${
          index === currentImage ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}
  </div>

  {/* Floating trust card */}
  <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-200">
    <div className="flex items-center gap-3">
      <Shield className="text-[#5B8C5A]" />
      <div>
        <div className="text-sm font-bold text-gray-900">
          ISO-Aligned Audits
        </div>
        <div className="text-xs text-gray-600">
          9001 · 14001 · 45001
        </div>
      </div>
    </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {services.map((service, index) => {
    const Icon = service.icon;
    return (
      <div
        key={index}
        className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      >
        {/* Left Accent Bar */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5B8C5A] to-[#4A6FA5] opacity-80" />

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F0F7F0] to-[#E8F3F8] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Icon className="text-[#5B8C5A]" size={30} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-[#5B8C5A] transition-colors">
              {service.title}
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed text-sm">
            {service.description}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-8 h-px bg-gray-100" />

        {/* Footer CTA */}
        <div className="px-8 py-5 flex items-center justify-between">
          <span className="text-sm font-semibold text-[#5B8C5A] tracking-wide">
            Explore Service
          </span>
          <ArrowRight
            size={18}
            className="text-[#5B8C5A] group-hover:translate-x-1 transition-transform"
          />
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
{/* Our Process - Step by Step (Zig-Zag Layout) */}
<section className="py-20 md:py-28 bg-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="text-center mb-20">
      <span className="text-[#4A6FA5] font-semibold text-sm tracking-wider uppercase">
        Our Process
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
        Our EHS Implementation Process
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        A structured, practical approach that ensures compliance, safety, and long-term sustainability
      </p>
    </div>

    {/* Steps */}
    <div className="relative">
      {/* Center Line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4A6FA5]/30 to-transparent" />

      <div className="space-y-20">
        {approach.map((item, index) => {
          const Icon = item.icon;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center ${
                isLeft ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              {/* Step Card */}
              <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8 w-full lg:w-[45%] relative group hover:shadow-2xl transition-all duration-300">
                
                {/* Step Number */}
                <div className="absolute -top-6 left-6 bg-[#4A6FA5] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                   {String(index + 1).padStart(2, "0")}
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E8F3F8] to-[#F0F7F0] flex items-center justify-center shadow-md">
                    <Icon className="text-[#4A6FA5]" size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector Dot */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#4A6FA5] rounded-full border-4 border-white shadow-lg" />
            </div>
          );
        })}
      </div>
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

      <a
            href="https://wa.me/919028360700"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 z-50 group"
            aria-label="Chat on WhatsApp"
            >
            <div className="relative">
            {/* Pulsing Ring */}
            {/* <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div> */}

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