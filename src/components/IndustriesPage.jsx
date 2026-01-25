import Header from './Header';
import Footer from './Footer';
import {
  Factory,
  Car,
  UtensilsCrossed,
  Shirt,
  Heart,
  Warehouse,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  TrendingUp,
  Users,
  MessageCircle
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "Comprehensive EHS compliance for general manufacturing, process industries, and production facilities.",
      services: "ISO management systems, regulatory audits, safety compliance",
      color: "#5B8C5A",
      bgColor: "#F0F7F0",
    },
    {
      icon: Car,
      title: "Automotive",
      description:
        "Specialized support for automotive component manufacturers and tier suppliers.",
      services: "IATF 16949, VDA standards, ISO 14001, ISO 45001",
      color: "#5B8C5A",
      bgColor: "#F0F7F0",
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Beverage",
      description:
        "Food safety management and regulatory compliance for processors and manufacturers.",
      services: "ISO 22000, HACCP, BRCGS, FSSAI compliance",
      color: "#5B8C5A",
      bgColor: "#F0F7F0",
    },
    {
      icon: Shirt,
      title: "Apparel & Textiles",
      description:
        "Ethical trade, sustainability, and compliance solutions for garment and textile manufacturers.",
      services: "SMETA, WRAP, SA8000, EcoVadis, environmental compliance",
      color: "#5B8C5A",
      bgColor: "#F0F7F0",
    },
    {
      icon: Heart,
      title: "Healthcare & Medical Devices",
      description:
        "Quality and regulatory compliance for medical device manufacturers and healthcare facilities.",
      services: "ISO 13485, regulatory EHS, occupational health & safety",
      color: "#5B8C5A",
      bgColor: "#F0F7F0",
    },
    {
      icon: Warehouse,
      title: "Warehousing & Logistics",
      description:
        "Safety, environmental, and quality management for warehouse operations and logistics providers.",
      services: "Fire safety, electrical safety, ISO 9001, ISO 45001",
      color: "#5B8C5A",
      bgColor: "#F0F7F0",
    },
  ];

  const expertise = [
    "Statutory EHS regulations across states",
    "Customer-specific audit protocols",
    "International sustainability standards",
    "Industry best practices and benchmarks",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Enhanced Gradient Style */}
{/* Hero Section - Two Column with Image */}
<section className="relative py-20 md:py-32 overflow-hidden bg-[#4A7449]/10 pt-28 md:pt-28">
  {/* Decorative Circles */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#4A7449]/20 rounded-full blur-3xl animate-blob -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A7449]/20 rounded-full blur-3xl animate-blob animation-delay-2000 translate-x-1/2 translate-y-1/2" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Left Column - Text + Stats */}
      <div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-[#4A7449]/20 animate-pulse">
          <Sparkles className="text-[#4A7449]" size={18} />
          <span className="text-sm font-medium text-gray-700">Industry Expertise</span>
        </div>

        {/* Gradient Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#4A7449]">
          Industries We Serve
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
          Tailored compliance solutions across diverse industrial sectors with deep regulatory expertise and industry-specific knowledge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
  {[
    { label: "Practical On-ground EHS Expertise", icon: CheckCircle2 },
    { label: "Real-world Solutions, Not Just Paper Compliance", icon: Target },
    { label: "Trusted by Growing Businesses", icon: Users },
    { label: "Industry-Focused Safety & Compliance Support", icon: Shield },
  ].map((stat, index) => {
    const Icon = stat.icon;
    return (
      <div
        key={index}
        className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 
                   shadow-md border border-gray-100 
                   transition-all duration-300 
                   hover:shadow-xl hover:-translate-y-1"
      >
        {/* Left accent line */}
        <span className="absolute left-0 top-4 bottom-4 w-1 bg-[#4A7449]/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="p-2 rounded-lg bg-[#4A7449]/10 text-[#4A7449]">
            <Icon size={18} />
          </div>

          {/* Text */}
          <p className="text-sm md:text-base font-medium text-gray-700 leading-snug">
            {stat.label}
          </p>
        </div>
      </div>
    );
  })}
</div>
      </div>

      <div className="flex justify-end items-center h-full">
  {/* <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl h-[60vh] border border-gray-200"> */}
    <img
      src="/industries.png" // Replace with your image path
      alt="Hero Illustration"
      className="w-full h-full object-cover"
    />
  {/* </div> */}
</div>
    </div>  
  </div>

  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes blob {
        0%, 100% { transform: translate(0,0) scale(1); }
        33% { transform: translate(30px,-20px) scale(1.1); }
        66% { transform: translate(-20px,20px) scale(0.9); }
      }
      .animate-blob { animation: blob 8s infinite; }
      .animation-delay-2000 { animation-delay: 2s; }
    `}
  </style>
</section>



      {/* Industries Grid */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#5B8C5A] font-semibold text-sm tracking-wider uppercase">
                Our Sectors
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Industry Specializations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Deep compliance expertise across manufacturing, automotive, food safety, and more
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#5B8C5A]/30 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Top Color Strip */}
                  <div 
                    className="h-2 w-full"
                    style={{ backgroundColor: industry.color }}
                  />
                  
                  <div className="p-8">
                    {/* Icon */}
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md"
                      style={{ backgroundColor: industry.bgColor }}
                    >
                      <Icon style={{ color: industry.color }} size={32} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#5B8C5A] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {industry.description}
                    </p>
                    
                    {/* Services */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-start gap-2 mb-2">
                        <Shield className="text-gray-400 flex-shrink-0 mt-1" size={16} />
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                          Key Services
                        </p>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {industry.services}
                      </p>
                    </div>

                    {/* Hover CTA */}
                    <div className="flex items-center gap-2 text-[#5B8C5A] font-semibold mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Industry Expertise with Background Image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/services.jpg"
            alt="LEAN EHS Industries"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A]/95 via-[#4A7449]/90 to-[#4A6FA5]/95" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="text-white" size={18} />
              <span className="text-white font-medium text-sm">
                Our Expertise
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Cross-Industry Excellence
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Deep knowledge of regulatory frameworks and industry-specific requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Statutory EHS Regulations",
                description: "Across all states"
              },
              {
                icon: CheckCircle2,
                title: "Customer-Specific Audits",
                description: "Tailored protocols"
              },
              {
                icon: Award,
                title: "International Standards",
                description: "Global sustainability"
              },
              {
                icon: Target,
                title: "Industry Best Practices",
                description: "Proven benchmarks"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Factory, label: "Manufacturing Plants" },
              { icon: Shield, label: "Safety Audits" },
              { icon: Award, label: "ISO Certifications" },
              { icon: TrendingUp, label: "Compliance Rate" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20 hover:scale-110 transition-transform">
                  <stat.icon className="text-white" size={28} />
                </div>
                <p className="text-white/90 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/lean-img1.jpg"
                  alt="LEAN EHS Industrial Excellence"
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
                  Industry-Specific Compliance Excellence
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    "Deep regulatory knowledge across all sectors",
                    "Industry-specific audit preparation",
                    "Customized compliance roadmaps",
                    "Proven track record with 50+ clients",
                    "End-to-end implementation support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#5B8C5A]/10 rounded-lg flex items-center justify-center mt-1">
                        <CheckCircle2 className="text-[#5B8C5A]" size={14} />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group"
                >
                  Contact Our Team
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A] via-[#4A7449] to-[#4A6FA5]" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-white" size={18} />
            <span className="text-white/90 text-sm font-medium">
              Ready to Get Started?
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Industry, Our Expertise
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with us to discuss compliance solutions tailored to your specific sector.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#5B8C5A] px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              Contact Us Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-bold text-lg hover:-translate-y-1"
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
    </div>
  );
}