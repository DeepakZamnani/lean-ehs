import { 
  AlertCircle,
  AlertTriangle,
  Shield,
  Eye,
  Users,
  UserCheck,
  TrendingUp,
  Award,
  FileText,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  Code,
  Zap,
  Target,
  BookOpen,
  ArrowRight
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

export default function SoftwarePage() {
  const softwareServices = [
    {
      id: 1,
      icon: AlertCircle,
      title: "Incident Management Software",
      description: "A centralized platform to report, investigate, and track workplace incidents in real time. The system enables root cause analysis, corrective actions, and closure monitoring.",
      highlights: [
        "Real-time incident reporting",
        "Root cause analysis tools",
        "Automated workflows and accountability",
        "Reduce repeat incidents"
      ],
      color: "from-red-600 to-orange-500"
    },
    {
      id: 2,
      icon: AlertTriangle,
      title: "Hazard Reporting Software",
      description: "This tool enables employees to easily report unsafe conditions, near misses, and hazards. Reports can be submitted via web or mobile with photos and location details.",
      highlights: [
        "Easy web and mobile reporting",
        "Photo and location capture",
        "Quick escalation and tracking",
        "Proactive hazard prevention"
      ],
      color: "from-yellow-600 to-amber-500"
    },
    {
      id: 3,
      icon: Shield,
      title: "Process Safety Management (PSM) Software",
      description: "Designed to manage high-risk processes and regulatory PSM requirements effectively. The software supports risk assessments, SOP management, audits, and compliance tracking.",
      highlights: [
        "High-risk process management",
        "SOP and audit support",
        "Compliance tracking",
        "Prevent major accidents"
      ],
      color: "from-blue-600 to-cyan-500"
    },
    {
      id: 4,
      icon: Eye,
      title: "Behaviour Based Safety (BBS) Management",
      description: "A digital solution to observe, record, and analyze safety behaviors across the workforce. It enables structured observations, trend analysis, and improvement actions.",
      highlights: [
        "Structured behavior observations",
        "Trend analysis and insights",
        "Positive reinforcement tools",
        "Build sustainable safety culture"
      ],
      color: "from-purple-600 to-pink-500"
    },
    {
      id: 5,
      icon: Users,
      title: "RACI Software",
      description: "This software clearly defines roles and responsibilities across safety and operational processes. It maps who is Responsible, Accountable, Consulted, and Informed.",
      highlights: [
        "Clear role definition (RACI)",
        "Improved accountability",
        "Better coordination",
        "Reduce execution delays"
      ],
      color: "from-emerald-600 to-green-500"
    },
    {
      id: 6,
      icon: UserCheck,
      title: "Personal Safety Action Plan (PSAP)",
      description: "A personalized safety planning tool for employees and supervisors. It helps identify individual risk exposure and define targeted safety actions.",
      highlights: [
        "Personalized risk assessment",
        "Individual safety action plans",
        "Digital progress monitoring",
        "Personal safety ownership"
      ],
      color: "from-teal-600 to-cyan-500"
    },
    {
      id: 7,
      icon: TrendingUp,
      title: "Safety Maturity Survey",
      description: "A structured digital assessment to measure an organization's safety culture and maturity level. The survey provides insights across leadership, systems, behavior, and compliance.",
      highlights: [
        "Safety culture assessment",
        "Leadership and system insights",
        "Benchmarking and analysis",
        "Data-driven transformation"
      ],
      color: "from-indigo-600 to-blue-500"
    },
    {
      id: 8,
      icon: Award,
      title: "Competency Management Software",
      description: "This system tracks safety competencies, certifications, and training requirements. It ensures employees are qualified for assigned tasks and roles.",
      highlights: [
        "Track competencies and certifications",
        "Automated renewal alerts",
        "Manage training requirements",
        "Strengthen workforce capability"
      ],
      color: "from-orange-600 to-red-500"
    },
    {
      id: 9,
      icon: Briefcase,
      title: "Contractor Safety Management",
      description: "A centralized platform to manage contractor onboarding, compliance, and performance. It tracks documents, inductions, permits, and safety records.",
      highlights: [
        "Contractor onboarding and compliance",
        "Document and permit tracking",
        "Safety standards verification",
        "Reduce contractor-related risks"
      ],
      color: "from-[#5B8C5A] to-[#4A7449]"
    },
    {
      id: 10,
      icon: FileText,
      title: "Job Hazard Analysis (JHA)",
      description: "A digital tool to identify task-level hazards and define control measures. It helps break down jobs into steps and assess associated risks.",
      highlights: [
        "Task-level hazard identification",
        "Step-by-step risk assessment",
        "Accessible and auditable records",
        "Improved task safety planning"
      ],
      color: "from-[#4A6FA5] to-[#3d5a8f]"
    }
  ];

  const benefits = [
    {
      icon: Code,
      title: "Digital Solutions",
      description: "Cloud-based platforms accessible anytime, anywhere"
    },
    {
      icon: Zap,
      title: "Real-Time Tracking",
      description: "Live monitoring and instant notifications"
    },
    {
      icon: Target,
      title: "Data-Driven Insights",
      description: "Analytics and reporting for better decisions"
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Meet regulatory and audit requirements"
    }
  ];

  const softwareGallery = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      title: "Intuitive Dashboard & Analytics",
      description: "Real-time data visualization and actionable insights"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      title: "Mobile-First Design",
      description: "Accessible on any device for frontline workers"
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
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80" 
            alt="Software Background"
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
              <Code className="text-[#5B8C5A]" size={20} />
              <span className="text-sm font-semibold text-gray-700">EHS Software & Digital Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Digitize Your
              <span className="block bg-gradient-to-r from-[#5B8C5A] to-[#4A6FA5] bg-clip-text text-transparent">
                Safety Operations
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive EHS software solutions to manage incidents, hazards, compliance, 
              and safety performance with real-time tracking and data-driven insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href="/contact" 
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-[#5B8C5A]/25 transition-all duration-300 font-semibold overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4A7449] to-[#5B8C5A] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Request Demo
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#solutions" 
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

      {/* Software Solutions Section */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital platforms for managing every aspect of workplace 
              safety, compliance, and performance monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {softwareServices.map((software, index) => {
              const Icon = software.icon;
              
              return (
                <div
                  key={software.id}
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
                      className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 bg-gradient-to-br ${software.color}`}
                    />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${software.color}`}
                      >
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#5B8C5A] transition-colors">
                          {software.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {software.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="p-8 pt-6">
                    <div className="space-y-3">
                      {software.highlights.map((highlight, idx) => (
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
                        Request Demo
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

      {/* Key Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Software Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for modern EHS operations with scalability and ease of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Cloud-based accessibility",
              "Mobile-responsive design",
              "Real-time notifications",
              "Customizable workflows",
              "Advanced analytics & reporting",
              "Compliance documentation",
              "Integration capabilities",
              "Secure data management",
              "User-friendly interface"
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-[#F0F7F0] to-white border border-[#5B8C5A]/20 hover:border-[#5B8C5A] hover:shadow-md transition-all duration-300"
              >
                <CheckCircle2 className="text-[#5B8C5A] flex-shrink-0" size={20} />
                <span className="text-gray-900 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modern & User-Friendly Interface
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for ease of use with powerful features that drive safety performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softwareGallery.map((item, index) => (
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
          <Code className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your EHS Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Schedule a demo to see how our software solutions can streamline your safety 
            management, improve compliance, and drive better safety outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-[#5B8C5A] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              Schedule a Demo
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

      {/* Implementation Note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto">
            <strong>Note:</strong> LEAN EHS provides software consultancy, implementation support, 
            and system integration services. Our solutions are designed to integrate with existing 
            operations and can be customized to meet specific organizational requirements.
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