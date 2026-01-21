import { 
  Target,
  Layers,
  TrendingUp,
  DollarSign,
  Package,
  Users,
  Leaf,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Shield,
  Award,
  BarChart3,
  ClipboardCheck,
  BookOpen,
  ArrowRight
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

export default function SpecializedPage() {
  const specializedServices = [
    {
      id: 1,
      icon: Layers,
      title: "SQDCIPE Diagnostic Framework",
      description: "The SQDCIPE Diagnostic Framework is a structured, diagnostic-led assessment model that integrates Safety, Quality, Delivery, Cost, Inventory, People, and Environment to evaluate overall operational and EHS performance.",
      highlights: [
        "In-depth on-site diagnostic study (typically 5 days or more)",
        "Assess project against each SQDCIPE element",
        "Identify systemic gaps and operational inefficiencies",
        "Define clear, measurable improvement actions",
        "Actionable deliverables aligned with business objectives"
      ],
      color: "from-[#5B8C5A] to-[#4A7449]"
    },
    {
      id: 2,
      icon: Calendar,
      title: "Monthly Integrated Retainer Model",
      description: "A single-window, comprehensive EHS engagement designed to deliver continuous compliance, improvement, and safety maturity rather than one-time interventions. Bundled service packages at an optimized monthly cost.",
      highlights: [
        "Bundled EHS service packages (Basic, Standard, Transformation)",
        "Site visits, training programs, and audits",
        "Document reviews and Gemba walks",
        "Comprehensive performance reports",
        "On-site and remote engagement support",
        "Sustained performance and long-term EHS excellence"
      ],
      color: "from-[#4A6FA5] to-[#3d5a8f]"
    }
  ];

  const sqdcipeElements = [
    {
      icon: Shield,
      letter: "S",
      title: "Safety",
      description: "Safety risks reduced, incident prevention"
    },
    {
      icon: Award,
      letter: "Q",
      title: "Quality",
      description: "Quality standards and process excellence"
    },
    {
      icon: TrendingUp,
      letter: "D",
      title: "Delivery",
      description: "Delivery timelines and productivity improved"
    },
    {
      icon: DollarSign,
      letter: "C",
      title: "Cost",
      description: "Cost leakages identified and controlled"
    },
    {
      icon: Package,
      letter: "I",
      title: "Inventory",
      description: "Inventory optimization and management"
    },
    {
      icon: Users,
      letter: "P",
      title: "People",
      description: "People development and operational discipline"
    },
    {
      icon: Leaf,
      letter: "E",
      title: "Environment",
      description: "Environmental compliance strengthened"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Diagnostic-Led",
      description: "Structured assessment of operational performance"
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Measurable outcomes and ROI-linked recommendations"
    },
    {
      icon: ClipboardCheck,
      title: "Comprehensive",
      description: "End-to-end EHS and operational support"
    },
    {
      icon: BookOpen,
      title: "Expert Guidance",
      description: "Experienced consultants and auditors"
    }
  ];

  const retainerPackages = [
    {
      name: "Basic",
      features: [
        "1 site visit per month",
        "Monthly audit + compliance pack",
        "1 training session",
        "Incident reporting support"
      ]
    },
    {
      name: "Standard",
      features: [
        "2 site visits per month",
        "Risk Assessment & SOP (2/month)",
        "Monthly dashboard & CAPA closure",
        "2 training sessions",
        "Contractor safety monitoring"
      ],
      highlighted: true
    },
    {
      name: "Transformation",
      features: [
        "4+ site visits per month",
        "Lean + EHS integration",
        "Complete statutory documentation",
        "Safety culture & BBS program",
        "Emergency preparedness enhancement"
      ]
    }
  ];

  const serviceGallery = [
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      title: "SQDCIPE Diagnostic Assessment",
      description: "Comprehensive on-site evaluation across all operational elements"
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
      title: "Continuous EHS Partnership",
      description: "Monthly retainer model for sustained compliance and improvement"
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80" 
            alt="Specialized Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0F7F0]/95 via-[#F0F7F0]/90 to-[#E8F5E8]/85"></div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#5B8C5A]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#4A6FA5]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#5B8C5A]/30 shadow-sm">
              <Target className="text-[#5B8C5A]" size={20} />
              <span className="text-sm font-semibold text-gray-700">Specialized EHS Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-[#5B8C5A] to-[#4A6FA5] bg-clip-text text-transparent">
                EHS Performance
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Diagnostic-led assessments and integrated retainer models that combine 
              Safety with Operational Excellence for sustainable performance improvement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href="/contact" 
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-[#5B8C5A]/25 transition-all duration-300 font-semibold overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4A7449] to-[#5B8C5A] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Request Consultation
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg border-2 border-[#5B8C5A]/30 hover:border-[#5B8C5A] hover:bg-[#F0F7F0] transition-all duration-300 font-semibold"
              >
                Explore Solutions
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

      {/* Specialized Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unique frameworks and engagement models that differentiate LEAN EHS 
              from traditional consulting approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => {
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

                  {/* Features List */}
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
                        Learn More
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

      {/* SQDCIPE Elements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What SQDCIPE Diagnostic Achieves
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive assessment across seven critical operational elements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {sqdcipeElements.map((element, index) => {
              const Icon = element.icon;
              return (
                <div 
                  key={index}
                  className="group p-4 rounded-2xl bg-gradient-to-br from-[#F0F7F0] to-white border border-[#5B8C5A]/20 hover:border-[#5B8C5A] hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-[#5B8C5A] to-[#4A7449] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-[#5B8C5A] mb-1">{element.letter}</div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{element.title}</h3>
                  <p className="text-xs text-gray-600">{element.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Service Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Integrated EHS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining diagnostic expertise with continuous partnership for lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceGallery.map((item, index) => (
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
          <Target className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your EHS Performance?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Discover how our SQDCIPE Framework or Monthly Retainer Model can drive 
            measurable improvements in safety, compliance, and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-[#5B8C5A] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              Request Proposal
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

      {/* Note Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <strong>Note:</strong> A detailed proposal and scope of deliverables will be shared upon 
            expression of interest. All services are customized to align with your specific business 
            objectives and operational context.
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