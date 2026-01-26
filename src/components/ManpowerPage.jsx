import { 
  Users, 
  Shield, 
  Target, 
  ClipboardCheck, 
  Award,
  Building2,
  FileCheck,
  Lock,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  UserCheck,
  TrendingUp,
  BookOpen,
  ArrowRight
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

export default function ManpowerPage() {
  const manpowerServices = [
    {
      id: 1,
      icon: Users,
      title: "EHS Manpower Recruitment (Client Payroll Model)",
      description: "We provide end-to-end recruitment of qualified and experienced EHS professionals based on client requirements. Candidates are selected through domain-specific technical screening and site readiness evaluation.",
      highlights: [
        "End-to-end recruitment process",
        "Domain-specific technical screening",
        "Site readiness evaluation",
        "Direct client payroll employment"
      ],
      color: "from-[#5B8C5A] to-[#4A7449]"
    },
    {
  id: 2,
  icon: Briefcase,
  title: "Other Professional Resource Deployment (Operations, HR, IT & Projects)",
  description: "In addition to EHS professionals, we support deployment of qualified non-EHS resources to strengthen operational, administrative, technical, and project execution capabilities based on client requirements.",
  highlights: [
    "Operations, HR, IT & project resource support",
    "Requirement-based candidate sourcing",
    "Role-specific screening & evaluation",
    "Client payroll engagement model"
  ],
  color: "from-[#2F855A] to-[#276749]"
}
,
    {
      id: 3,
      icon: Target,
      title: "Domain-Specific Safety Talent Sourcing",
      description: "Our recruitment process is focused exclusively on safety and EHS roles across industries. We source professionals with proven on-site exposure and statutory knowledge.",
      highlights: [
        "Exclusive focus on EHS roles",
        "Proven on-site exposure verification",
        "Evaluated by EHS practitioners",
        "Faster role closure"
      ],
      color: "from-[#4A6FA5] to-[#3d5a8f]"
    },
    {
      id: 4,
      icon: ClipboardCheck,
      title: "Technical & Compliance-Based Candidate Screening",
      description: "All candidates undergo in-depth technical screening by LEAN EHS's in-house EHS experts. Assessments include statutory compliance knowledge, industry exposure, and role-specific competencies.",
      highlights: [
        "In-depth technical screening",
        "Statutory compliance assessment",
        "Role-specific competency evaluation",
        "Site-ready profiles only"
      ],
      color: "from-blue-600 to-cyan-500"
    },
    {
      id: 5,
      icon: Award,
      title: "Safety Leadership & Management Hiring",
      description: "We support recruitment for mid to senior-level safety leadership roles. This includes Safety Managers, Engineers, and senior EHS leadership positions.",
      highlights: [
        "Mid to senior-level positions",
        "Leadership capability assessment",
        "Decision-making skills evaluation",
        "Safety culture drivers"
      ],
      color: "from-purple-600 to-pink-500"
    },
    {
      id: 6,
      icon: Building2,
      title: "Multi-Industry Safety Manpower Support",
      description: "We support safety manpower requirements across manufacturing, construction, logistics, warehousing, projects, oil & gas, pharma, and mining sectors.",
      highlights: [
        "Multiple industry sectors covered",
        "Industry-specific risk understanding",
        "Accurate candidate-role mapping",
        "Faster onboarding process"
      ],
      color: "from-emerald-600 to-green-500"
    },
    {
      id: 7,
      icon: FileCheck,
      title: "End-to-End Recruitment Coordination",
      description: "LEAN EHS manages the complete recruitment lifecycle from sourcing to joining. We coordinate interviews, candidate communication, and selection timelines.",
      highlights: [
        "Complete lifecycle management",
        "Interview coordination",
        "Timeline management",
        "Reduced administrative burden"
      ],
      color: "from-orange-600 to-red-500"
    },
    {
      id: 8,
      icon: UserCheck,
      title: "Replacement Assurance & Recruitment Reliability",
      description: "We provide a one-time replacement guarantee for early attrition cases. This ensures continuity and hiring confidence for our clients.",
      highlights: [
        "One-time replacement guarantee",
        "Early attrition protection",
        "No additional charges",
        "Long-term role fit focus"
      ],
      color: "from-teal-600 to-cyan-500"
    },
    {
      id: 9,
      icon: Lock,
      title: "Confidential & Transparent Hiring Process",
      description: "All client and candidate information is handled with strict confidentiality. The recruitment process is transparent, structured, and professionally managed.",
      highlights: [
        "Strict confidentiality maintained",
        "Transparent process",
        "Client discretion in selection",
        "Trust-driven partnerships"
      ],
      color: "from-indigo-600 to-blue-500"
    }
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Industry Expertise",
      description: "Deep understanding of EHS roles and requirements"
    },
    {
      icon: Target,
      title: "Quality Screening",
      description: "Rigorous technical and compliance assessments"
    },
    {
      icon: TrendingUp,
      title: "Fast Placement",
      description: "Efficient recruitment lifecycle management"
    },
    {
      icon: Shield,
      title: "Reliable Support",
      description: "Replacement assurance and ongoing partnership"
    }
  ];

  const recruitmentGallery = [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
      title: "Professional Candidate Screening",
      description: "Comprehensive technical and behavioral assessments"
    },
    {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
      title: "Client-Focused Recruitment Process",
      description: "Transparent coordination and seamless onboarding support"
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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80" 
            alt="Manpower Background"
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
              <Users className="text-[#5B8C5A]" size={20} />
              <span className="text-sm font-semibold text-gray-700">Safety Manpower Recruitment Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Build Your
              <span className="block bg-gradient-to-r from-[#5B8C5A] to-[#4A6FA5] bg-clip-text text-transparent">
                Safety Team
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end recruitment of qualified EHS professionals through domain-specific 
              screening, compliance evaluation, and transparent hiring processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href="/contact" 
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-[#5B8C5A]/25 transition-all duration-300 font-semibold overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4A7449] to-[#5B8C5A] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Start Recruitment
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized manpower solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Manufacturing",
              "Construction",
              "Logistics",
              "Warehousing",
              "Projects",
              "Oil & Gas",
              "Pharma",
              "Mining"
            ].map((industry, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-gradient-to-br from-[#F0F7F0] to-white border border-[#5B8C5A]/20 hover:border-[#5B8C5A] hover:shadow-md transition-all duration-300 text-center"
              >
                <p className="text-sm font-semibold text-gray-900">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Manpower Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Recruitment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manpower solutions for building strong, compliant, 
              and capable EHS teams across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {manpowerServices.map((service, index) => {
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

                  {/* Highlights List */}
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

      
      

      {/* Recruitment Process Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Recruitment Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous screening processes and professional coordination ensure the best talent for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recruitmentGallery.map((item, index) => (
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
            Ready to Build Your EHS Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with LEAN EHS for reliable, compliant, and qualified safety professionals. 
            We handle the complete recruitment lifecycle with transparency and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-[#5B8C5A] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              Start Hiring Today
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

      {/* Client Payroll Model Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <strong>Note:</strong> All recruited EHS professionals are employed directly on the client's payroll. 
            LEAN EHS acts as a recruitment and capability partner, providing end-to-end coordination from 
            sourcing to joining with replacement assurance for early attrition cases.
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