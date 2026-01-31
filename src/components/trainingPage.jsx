import { 
  GraduationCap, 
  Flame, 
  Shield, 
  Users, 
  ClipboardCheck, 
  AlertTriangle,
  Zap,
  PackageOpen,
  Wind,
  DoorClosed,
  Hammer,
  Siren,
  Truck,
  Award,
  ChevronRight,
  BookOpen,
  Target,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

export default function TrainingPage() {
  const trainingPrograms = [
    {
      id: 1,
      icon: Flame,
      title: "DISH-Approved Fire Fighting & First Aid Training",
      description: "This program equips employees with practical fire prevention, fire-fighting, and emergency first aid skills. Training is aligned with DISH guidelines and statutory requirements.",
      highlights: [
        "Hands-on experience with fire extinguishers",
        "Emergency response scenarios",
        "DISH guidelines compliance",
        "Strengthen on-site emergency preparedness"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      icon: Users,
      title: "White Collar / Supervisor Safety Development Program",
      description: "Designed for supervisors and management staff, this program focuses on safety leadership and accountability. It builds awareness of legal responsibilities, risk identification, and proactive safety decision-making.",
      highlights: [
        "Safety leadership development",
        "Legal responsibility awareness",
        "Proactive safety decision-making",
        "Strong safety culture building"
      ],
      color: "from-blue-600 to-cyan-500"
    },
    {
      id: 3,
      icon: Award,
      title: "EHS Leadership Development Programs",
      description: "This program develops leaders who can drive EHS excellence across the organization. It focuses on strategic thinking, compliance leadership, and continuous improvement.",
      highlights: [
        "Strategic EHS thinking",
        "Compliance leadership",
        "Continuous improvement focus",
        "Culture and performance influence"
      ],
      color: "from-purple-600 to-pink-500"
    },
    {
      id: 4,
      icon: ClipboardCheck,
      title: "Permit to Work (PTW) System Training",
      description: "PTW training ensures safe execution of high-risk activities through structured authorization processes. Participants learn permit types, roles, responsibilities, and compliance requirements.",
      highlights: [
        "Structured authorization processes",
        "Hazard control emphasis",
        "Coordination and documentation",
        "Accident prevention for critical tasks"
      ],
      color: "from-green-600 to-teal-500"
    },
    {
      id: 5,
      icon: AlertTriangle,
      title: "Risk Assessment & Aspect–Impact Analysis Training",
      description: "This training builds competency in identifying hazards and evaluating risks systematically. Participants learn to conduct effective risk assessments and environmental aspect-impact analyses.",
      highlights: [
        "Systematic risk evaluation",
        "Environmental impact analysis",
        "ISO and regulatory compliance",
        "Proactive risk management"
      ],
      color: "from-yellow-600 to-amber-500"
    },
    {
      id: 6,
      icon: Zap,
      title: "Electrical Safety & Lockout/Tagout (LOTO) Training",
      description: "This program focuses on preventing electrical accidents and uncontrolled energy release. Participants learn safe electrical practices and proper LOTO procedures.",
      highlights: [
        "Electrical accident prevention",
        "Proper LOTO procedures",
        "Real-world case studies",
        "Worker safety during maintenance"
      ],
      color: "from-indigo-600 to-blue-500"
    },
    {
      id: 7,
      icon: PackageOpen,
      title: "Material Handling Equipment (MHE) & Manual Handling Safety Training",
      description: "This training addresses risks related to mechanical and manual material handling. Participants learn safe operating practices, ergonomic techniques, and load management.",
      highlights: [
        "Safe operating practices",
        "Ergonomic techniques",
        "Load management",
        "Reduce musculoskeletal injuries"
      ],
      color: "from-orange-600 to-red-500"
    },
    {
      id: 8,
      icon: Wind,
      title: "Toxic Gas Safety Awareness Training",
      description: "This program raises awareness of hazardous and toxic gases used or generated in operations. Participants learn gas properties, health effects, detection methods, and emergency response actions.",
      highlights: [
        "Gas properties and health effects",
        "Detection methods",
        "Emergency response actions",
        "Safe handling practices"
      ],
      color: "from-cyan-600 to-blue-500"
    },
    {
      id: 9,
      icon: DoorClosed,
      title: "Confined Space Entry Safety Training",
      description: "Confined space training focuses on identifying confined spaces and associated hazards. Participants learn entry procedures, permit requirements, and rescue planning.",
      highlights: [
        "Confined space identification",
        "Entry procedures and permits",
        "Atmospheric testing",
        "Reduce fatal incidents"
      ],
      color: "from-slate-600 to-gray-500"
    },
    {
      id: 10,
      icon: Hammer,
      title: "Hot Work Safety Training",
      description: "This training covers safety requirements for activities involving heat, sparks, or open flames. Participants learn hot work permit procedures and fire prevention controls.",
      highlights: [
        "Hot work permit procedures",
        "Fire prevention controls",
        "Hazard identification",
        "Minimize fire and explosion risks"
      ],
      color: "from-red-600 to-orange-600"
    },
    {
      id: 11,
      icon: Siren,
      title: "Emergency Response & Control Planning Training",
      description: "This program prepares teams to respond effectively to workplace emergencies. Participants learn emergency roles, communication protocols, and response strategies.",
      highlights: [
        "Emergency roles and protocols",
        "Response strategies",
        "Mock drills and scenarios",
        "Strengthen organizational resilience"
      ],
      color: "from-rose-600 to-pink-500"
    },
    {
      id: 12,
      icon: Truck,
      title: "Defensive Driving Training for PIV / MHE Operators",
      description: "This training enhances safe driving behavior for industrial and material handling vehicle operators. Participants learn hazard anticipation, safe maneuvering, and accident prevention techniques.",
      highlights: [
        "Hazard anticipation",
        "Safe maneuvering techniques",
        "Real-site risk focus",
        "Reduce vehicle-related incidents"
      ],
      color: "from-emerald-600 to-green-500"
    },
    {
      id: 13,
      icon: Zap,
      title: "Promotional Safety Campagin and Traning",
      description: "We conduct engaging safety awareness campaigns and training programs focused on National Safety Day, Road Safety Day, and environmental responsibility. These initiatives promote a strong safety culture, improve risk awareness, and help reduce vehicle-related and workplace incidents.",
      highlights: [
        "National Safet Day Celebration Campaign and Training",
        "Road Safety Day Campaign and Training",
        "Environment Day Campagin and Training"
        
      ],
      color: "from-indigo-600 to-blue-500"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Industry-Focused",
      description: "Training tailored to real workplace scenarios"
    },
    {
      icon: GraduationCap,
      title: "Expert Trainers",
      description: "Experienced EHS professionals"
    },
    {
      icon: CheckCircle2,
      title: "Compliance Ready",
      description: "Aligned with statutory requirements"
    },
    {
      icon: BookOpen,
      title: "Hands-On Learning",
      description: "Practical exercises and real scenarios"
    }
  ];

  const trainingGallery = [
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
      title: "Classroom Training Sessions",
      description: "Interactive learning environment with expert instructors"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
      title: "Hands-On Practical Training",
      description: "Real-world equipment and scenario-based exercises"
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
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80" 
            alt="Training Background"
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
              <GraduationCap className="text-[#5B8C5A]" size={20} />
              <span className="text-sm font-semibold text-gray-700">Professional Training Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Build a Safer
              <span className="block bg-gradient-to-r from-[#5B8C5A] to-[#4A6FA5] bg-clip-text text-transparent">
                Workforce
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive EHS training programs designed to equip your team with practical skills, 
              statutory compliance knowledge, and proactive safety mindset.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href="/contact" 
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-[#5B8C5A]/25 transition-all duration-300 font-semibold overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4A7449] to-[#5B8C5A] translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Request Training
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              
              <a 
                href="#programs" 
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-lg border-2 border-[#5B8C5A]/30 hover:border-[#5B8C5A] hover:bg-[#F0F7F0] transition-all duration-300 font-semibold"
              >
                Explore Programs
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

      {/* Training Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F0F7F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training solutions covering all aspects of workplace safety, 
              health, and environmental management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon;
              // Extract the ending color from gradient (e.g., "orange-500" from "from-red-500 to-orange-500")
              const gradientEndColor = program.color.split('to-')[1].trim();
              
              return (
                <div
                  key={program.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#5B8C5A]/30 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card Header with Icon and Color */}
                  <div 
                    className={`p-8 relative overflow-hidden`}
                    style={{ 
                      background: `linear-gradient(135deg, rgba(var(--${gradientEndColor}-rgb, 91, 140, 90), 0.08) 0%, rgba(var(--${gradientEndColor}-rgb, 91, 140, 90), 0.03) 100%)`
                    }}
                  >
                    {/* Decorative Circle */}
                    <div 
                      className={`absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 bg-gradient-to-br ${program.color}`}
                    />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${program.color}`}
                      >
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#5B8C5A] transition-colors">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="p-8 pt-6">
                    <div className="space-y-3">
                      {program.highlights.map((highlight, idx) => (
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

                    {/* Learn More Link */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group/link text-[#5B8C5A]"
                      >
                        Schedule Training
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
      

      {/* Training Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Training Environment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art facilities and expert-led sessions designed for maximum learning impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingGallery.map((item, index) => (
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

      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-5xl mx-auto">
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-[#F0F7F0] to-white border border-[#5B8C5A]/30 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#5B8C5A] to-[#4A7449] shadow-lg">
        <Award className="text-white" size={28} />
      </div>

      <div className="text-center sm:text-left">
        <h3 className="text-xl font-bold text-gray-900">
          Training Certifications Provided
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          Participants receive recognized training certifications upon successful completion, 
          supporting compliance, audits, and workforce competency development.
        </p>
      </div>
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
            Ready to Strengthen Your Safety Culture?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Partner with LEAN EHS for comprehensive training solutions tailored to your industry needs. 
            Build competency, ensure compliance, and create a proactive safety culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center gap-2 bg-white text-[#5B8C5A] px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
            >
              Get Started Today
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