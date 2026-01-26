// import Header from './Header';
// import Footer from './Footer'
// import {
//   Shield,
//   FileCheck,
//   Leaf,
//   Factory,
//   Award,
//   TrendingUp,
//   CheckCircle2,
//   Users,
//   Target,
//   Briefcase,
//   ArrowRight,
//   Sparkles,
//   ChevronRight,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { ClipboardCheck, GraduationCap, Code } from "lucide-react";



// import { MessageCircle } from "lucide-react";



// export default function HomePage() {

//   const images = [
//   "/lean-img1.jpg",
//   "/lean-img2.jpg",
//   "/services.jpg",
// ];

// const [currentImage, setCurrentImage] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentImage((prev) => (prev + 1) % images.length);
//   }, 3000); // 3 seconds

//   return () => clearInterval(interval);
// }, []);

//   const mainServices = [
//     {
//     id: "specialized",
//     icon: Target,
//     title: "Specialized Services",
//     description:
//       "Diagnostic-led assessments and integrated Lean + EHS retainer models for sustainable performance improvement.",
//     link: "/specialized",
//     color: "#8B7355",
//   },
//   {
//     id: "audit",
//     icon: ClipboardCheck,
//     title: "Audit & Compliance Services",
//     description:
//       "Comprehensive audit and compliance assessment services covering regulatory, quality, safety, and sustainability requirements across industries.",
//     link: "/audit",
//     color: "#5B8C5A",
//   },
//   {
//     id: "training",
//     icon: GraduationCap,
//     title: "Training & Capability Development",
//     description:
//       "Comprehensive EHS training programs designed to build competency, ensure compliance, and strengthen workplace safety culture.",
//     link: "/training",
//     color: "#4A6FA5",
//   },
//   {
//     id: "software",
//     icon: Code,
//     title: "EHS Software & Digital Solutions",
//     description:
//       "Digital EHS platforms to manage incidents, hazards, compliance, and performance with real-time insights.",
//     link: "/software",
//     color: "#2C5F7C",
//   },
//   {
//     id: "manpower",
//     icon: Users,
//     title: "Safety Manpower Recruitment",
//     description:
//       "End-to-end recruitment of qualified EHS professionals through domain-specific screening and evaluation.",
//     link: "/manpower",
//     color: "#6B8E23",
//   },
  
// ];


  

//   const approach = [
//     {
//       icon: Target,
//       title: "Site-Focused & Practical",
//       description: "On-ground assessments tailored to your operations",
//     },
//     {
//       icon: CheckCircle2,
//       title: "Compliance Gap Identification",
//       description: "Clear identification of regulatory and standard gaps",
//     },
//     {
//       icon: Briefcase,
//       title: "Actionable Recommendations",
//       description: "Implementation-ready solutions, not theoretical advice",
//     },
//     {
//       icon: Users,
//       title: "End-to-End Support",
//       description: "From assessment to closure, we support every step",
//     },
//   ];


//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       <Header />

// <section className="relative min-h-screen overflow-hidden flex items-center bg-[#F8FBF8]">
//   {/* Soft organic background shapes */}
//   <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#5B8C5A]/10 rounded-full blur-3xl" />
//   <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-[#4A6FA5]/10 rounded-full blur-3xl" />

//   <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
    
//     {/* LEFT CONTENT */}
//     <div className="lg:col-span-6 space-y-8">
//       {/* Badge */}
//       <div className="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full shadow-sm border border-gray-200">
//   {/* Logo */}
//   <img
//     src="/logo_lean2.png"
//     alt="Lean EHS Logo"
//     className="h-6 w-auto object-contain"
//   />

//   {/* Dot */}
//   <span className="w-2 h-2 bg-[#5B8C5A] rounded-full" />

//   {/* Text */}
//   <span className="text-sm font-semibold text-[#5B8C5A] tracking-wide">
//     EHS COMPLIANCE EXPERTS
//   </span>
// </div>


//       {/* Headline */}
//       <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
//         Lean EHS Solutions
//         <span className="block text-[#5B8C5A] mt-2">
//           Safer & Smarter Workplaces
//         </span>
//       </h1>

//       {/* Description */}
//       <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed">
//         We combine <span className="font-semibold text-[#5B8C5A]"> Lean methodology</span> with
//         <span className="font-semibold text-[#5B8C5A]"> EHS expertise</span> to improve safety, efficiency, and sustainability.
//       </p>

//       {/* CTA */}
//       <div className="flex flex-wrap gap-4 pt-4">
//         <a
//           href="/contact"
//           className="inline-flex items-center gap-2 px-8 py-4 bg-[#5B8C5A] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
//         >
//           Get Started
//           <ArrowRight size={18} />
//         </a>

//         <a
//           href="/services"
//           className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5B8C5A] font-semibold rounded-xl border border-[#5B8C5A]/30 hover:bg-[#5B8C5A]/5 transition"
//         >
//           Our Services
//         </a>
//       </div>

//       {/* Stats */}
//       <div className="flex gap-8 pt-6">
//         {[
//           { value: "ISO", label: "Standards" },
//           { value: "10+", label: "Years" },
//           { value: "100%", label: "Audit Focus" },
//         ].map((s, i) => (
//           <div key={i}>
//             <div className="text-2xl font-bold text-[#5B8C5A]">{s.value}</div>
//             <div className="text-sm text-gray-600">{s.label}</div>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="lg:col-span-6 relative">
//   <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
//     {images.map((img, index) => (
//       <img
//         key={index}
//         src={img}
//         alt="Lean EHS Safety"
//         className={`absolute inset-0 w-full h-full object-cover brightness-110 transition-opacity duration-1000 ${
//           index === currentImage ? "opacity-100" : "opacity-0"
//         }`}
//       />
//     ))}
//   </div>

//   {/* Floating trust card */}
//   <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-200">
//     <div className="flex items-center gap-3">
//       <Shield className="text-[#5B8C5A]" />
//       <div>
//         <div className="text-sm font-bold text-gray-900">
//           ISO-Aligned Audits
//         </div>
//         <div className="text-xs text-gray-600">
//           9001 · 14001 · 45001
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   </div>
// </section>



//       {/* Why Lean EHS */}
//       <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-[#5B8C5A] via-[#4A7449] to-[#4A6FA5]">
//         {/* Pattern Overlay */}
//         <div className="absolute inset-0 opacity-10" style={{
//           backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
//           backgroundSize: '20px 20px'
//         }} />
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//               <Sparkles className="text-white" size={18} />
//               <span className="text-white font-medium text-sm">
//                 Why Choose Us
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//               Why Lean EHS
//             </h2>
//             <p className="text-white/90 text-lg max-w-2xl mx-auto">
//               Your trusted partner for compliance clarity and audit confidence
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 text: "Practical, risk-based assessments",
//                 icon: Target,
//               },
//               {
//                 text: "Regulatory expertise across industries",
//                 icon: Award,
//               },
//               {
//                 text: "Audit readiness to corrective action closure",
//                 icon: CheckCircle2,
//               },
//               {
//                 text: "No certification conflict (consultancy only)",
//                 icon: Shield,
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white/10 backdrop-blur-md p-6 rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
//               >
//                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors mx-auto">
//                   <item.icon className="text-white" size={24} />
//                 </div>
//                 <p className="text-white font-medium leading-relaxed text-center">
//                   {item.text}
//                 </p>
//                 {/* Glow effect on hover */}
//                 <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl transition-colors duration-300" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Services - Enhanced cards with icons and better layout */}
//       <section className="py-20 md:py-24 bg-gradient-to-b from-[#F9FAFB] to-white relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#5B8C5A] rounded-lg rotate-12" />
//           <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-[#4A6FA5] rounded-full" />
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center mb-16">
//             <div className="inline-block mb-4">
//               <span className="text-[#5B8C5A] font-semibold text-sm tracking-wider uppercase">
//                 Our Services
//               </span>
//             </div>
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Lean EHS Solutions for Safer & Smarter Workplaces
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               We're different: Not just Safety, Environment & Health—we focus on overall organizational performance, integrating Safety with Quality, Delivery, Cost, Inventory & Productivity (SQDCIP) to deliver measurable results.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//   {mainServices.map((service, index) => {
//     const Icon = service.icon;
//     const isSpecialized = service.id === "specialized";
    
//     return (
//       <a
//         key={index}
//         href={service.link}
//         className={`group relative bg-white rounded-2xl border overflow-hidden block transition-all duration-300 hover:-translate-y-2 ${
//           isSpecialized
//             ? "border-[#5B8C5A] border-2 shadow-xl hover:shadow-2xl ring-2 ring-[#5B8C5A]/20 scale-105"
//             : "border-gray-100 shadow-md hover:shadow-2xl"
//         }`}
//       >
//         {/* Featured Badge - Only for Specialized Services */}
//         {isSpecialized && (
//           <div className="absolute -top-3 -right-3 z-10">
//             <div className="relative">
//               {/* Pulsing ring animation */}
//               <div className="absolute inset-0 bg-[#5B8C5A] rounded-full animate-ping opacity-75"></div>
//               {/* Badge */}
//               <div className="relative bg-gradient-to-r from-[#5B8C5A] to-[#4A6FA5] text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider shadow-lg flex items-center gap-2">
//                 <Sparkles size={14} />
//                 FEATURED
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Left Accent Bar */}
//         <div className={`absolute left-0 top-0 h-full bg-gradient-to-b from-[#5B8C5A] to-[#4A6FA5] ${
//           isSpecialized ? "w-2" : "w-1"
//         } opacity-80`} />

//         {/* Glowing border effect for Specialized */}
//         {isSpecialized && (
//           <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A]/10 via-transparent to-[#4A6FA5]/10 pointer-events-none" />
//         )}

//         {/* Header */}
//         <div className="p-8 pb-6">
//           <div className="flex items-center gap-4 mb-5">
//             <div className={`w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform ${
//               isSpecialized
//                 ? "from-[#5B8C5A]/20 to-[#4A6FA5]/20 ring-2 ring-[#5B8C5A]/30"
//                 : "from-[#F0F7F0] to-[#E8F3F8]"
//             }`}>
//               <Icon className={isSpecialized ? "text-[#5B8C5A]" : "text-[#5B8C5A]"} size={30} />
//             </div>
//             <h3 className={`text-xl font-bold leading-snug transition-colors ${
//               isSpecialized
//                 ? "text-[#5B8C5A] group-hover:text-[#4A6FA5]"
//                 : "text-gray-900 group-hover:text-[#5B8C5A]"
//             }`}>
//               {service.title}
//             </h3>
//           </div>

//           <p className="text-gray-600 leading-relaxed text-sm">
//             {service.description}
//           </p>
//         </div>

//         {/* Divider */}
//         <div className={`mx-8 h-px ${isSpecialized ? "bg-[#5B8C5A]/20" : "bg-gray-100"}`} />

//         {/* Footer CTA */}
//         <div className={`px-8 py-5 flex items-center justify-between ${
//           isSpecialized ? "bg-gradient-to-r from-[#5B8C5A]/5 to-[#4A6FA5]/5" : ""
//         }`}>
//           <span className={`text-sm font-semibold tracking-wide ${
//             isSpecialized ? "text-[#5B8C5A]" : "text-[#5B8C5A]"
//           }`}>
//             {isSpecialized ? "🌟 Discover Premium Service" : "Explore Service"}
//           </span>
//           <ArrowRight
//             size={18}
//             className="text-[#5B8C5A] group-hover:translate-x-1 transition-transform"
//           />
//         </div>

//         {/* Hover Glow */}
//         <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${
//           isSpecialized
//             ? "from-[#5B8C5A]/10 to-[#4A6FA5]/10"
//             : "from-[#5B8C5A]/5 to-transparent"
//         }`} />
//       </a>
//     );
//   })}
// </div>

          
//           <div className="text-center mt-12">
//             <a
//               href="/services"
//               className="inline-flex items-center gap-2 text-[#5B8C5A] font-semibold text-lg hover:text-[#4A7449] transition-colors group"
//             >
//               View All Services
//               <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//             </a>
//           </div>
//         </div>
//       </section>
// {/* Our Process - Step by Step (Zig-Zag Layout) */}
// <section className="py-20 md:py-28 bg-white relative overflow-hidden">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//     {/* Header */}
//     <div className="text-center mb-20">
//       <span className="text-[#4A6FA5] font-semibold text-sm tracking-wider uppercase">
//         Our Process
//       </span>
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4">
//         Our EHS Implementation Process
//       </h2>
//       <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//         A structured, practical approach that ensures compliance, safety, and long-term sustainability
//       </p>
//     </div>

//     {/* Steps */}
//     <div className="relative">
//       {/* Center Line */}
//       <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4A6FA5]/30 to-transparent" />

//       <div className="space-y-20">
//         {approach.map((item, index) => {
//           const Icon = item.icon;
//           const isLeft = index % 2 === 0;

//           return (
//             <div
//               key={index}
//               className={`relative flex flex-col lg:flex-row items-center ${
//                 isLeft ? "lg:justify-start" : "lg:justify-end"
//               }`}
//             >
//               {/* Step Card */}
//               <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-8 w-full lg:w-[45%] relative group hover:shadow-2xl transition-all duration-300">
                
//                 {/* Step Number */}
//                 <div className="absolute -top-6 left-6 bg-[#4A6FA5] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
//                    {String(index + 1).padStart(2, "0")}
//                 </div>

//                 <div className="flex items-start gap-5">
//                   <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E8F3F8] to-[#F0F7F0] flex items-center justify-center shadow-md">
//                     <Icon className="text-[#4A6FA5]" size={28} />
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Connector Dot */}
//               <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#4A6FA5] rounded-full border-4 border-white shadow-lg" />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// </section>


//       {/* CTA Section - Enhanced with better gradient and layout */}
//       <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#5B8C5A] via-[#4A7449] to-[#4A6FA5] overflow-hidden">
//         {/* Decorative Elements */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
//         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//             <Sparkles className="text-white" size={18} />
//             <span className="text-white/90 text-sm font-medium">
//               Ready to Get Started?
//             </span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
//             Talk to Our Compliance Experts
//           </h2>
//           <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
//             Get practical guidance on your compliance journey. Connect with our team for a consultation.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="group inline-flex items-center justify-center gap-2 bg-white text-[#5B8C5A] px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
//             >
//               Get In Touch
//               <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//             </a>
//             <a
//               href="/services"
//               className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-lg hover:-translate-y-1"
//             >
//               View Services
//             </a>
//           </div>
          
//         </div>
//       </section>

//       <a
//             href="https://wa.me/919028360700"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="fixed bottom-10 right-10 z-50 group"
//             aria-label="Chat on WhatsApp"
//             >
//             <div className="relative">
//             {/* Pulsing Ring */}
//             {/* <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div> */}

//             {/* Button */}
//             <div className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
//               <MessageCircle className="text-white" size={32} />
//             </div>

//             {/* Tooltip */}
//             <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
//               Chat with us on WhatsApp
//               {/* Arrow */}
//               <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-900 rotate-45"></div>
//             </div>
//             </div>
//             </a>


//       <Footer />
      
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) rotate(3deg);
//           }
//           50% {
//             transform: translateY(-10px) rotate(3deg);
//           }
//         }

//         @keyframes scan {
//           0% {
//             top: 0;
//           }
//           100% {
//             top: 100%;
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-scan {
//           animation: scan 4s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
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
import { ClipboardCheck, GraduationCap, Code } from "lucide-react";
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const mainServices = [
    {
      id: "specialized",
      icon: Target,
      title: "Specialized Services",
      description:
        "Diagnostic-led assessments and integrated Lean + EHS retainer models for sustainable performance improvement.",
      link: "/specialized",
      color: "#8B7355",
    },
    {
      id: "audit",
      icon: ClipboardCheck,
      title: "Audit & Compliance Services",
      description:
        "Comprehensive audit and compliance assessment services covering regulatory, quality, safety, and sustainability requirements across industries.",
      link: "/audit",
      color: "#5B8C5A",
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Training & Capability Development",
      description:
        "Comprehensive EHS training programs designed to build competency, ensure compliance, and strengthen workplace safety culture.",
      link: "/training",
      color: "#4A6FA5",
    },
    {
      id: "software",
      icon: Code,
      title: "EHS Software & Digital Solutions",
      description:
        "Digital EHS platforms to manage incidents, hazards, compliance, and performance with real-time insights.",
      link: "/software",
      color: "#2C5F7C",
    },
    {
      id: "manpower",
      icon: Users,
      title: "Safety Manpower Recruitment",
      description:
        "End-to-end recruitment of qualified EHS professionals through domain-specific screening and evaluation.",
      link: "/manpower",
      color: "#6B8E23",
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

<section className="relative min-h-screen overflow-hidden flex items-center 
                    bg-[#F8FBF8] pt-28 pb-20 md:pt-28 md:pb-28">

  {/* Soft organic background shapes */}
  <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#5B8C5A]/10 rounded-full blur-3xl" />
  <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-[#4A6FA5]/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white px-3 md:px-5 py-2 rounded-full shadow-sm border border-gray-200">
              <img
                src="/logo_lean2.png"
                alt="Lean EHS Logo"
                className="h-5 md:h-6 w-auto object-contain"
              />
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#5B8C5A] rounded-full" />
              <span className="text-xs md:text-sm font-semibold text-[#5B8C5A] tracking-wide">
                EHS COMPLIANCE EXPERTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Lean EHS Solutions
              <span className="block text-[#5B8C5A] mt-2">
                Safer & Smarter Workplaces
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-xl leading-relaxed">
              
               We're different: Not just Safety, Environment & Health. We focus on overall organizational performance, integrating Safety with Quality, Delivery, Cost, Inventory & Productivity (SQDCIP) to deliver measurable results.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#5B8C5A] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition text-sm md:text-base"
              >
                Get Started
                <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-[#5B8C5A] font-semibold rounded-xl border border-[#5B8C5A]/30 hover:bg-[#5B8C5A]/5 transition text-sm md:text-base"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
           
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] lg:h-[500px]">
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
            <div className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-white px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-xl border border-gray-200">
              <div className="flex items-center gap-2 md:gap-3">
                <Shield className="text-[#5B8C5A]" size={20} />
                <div>
                  <div className="text-xs md:text-sm font-bold text-gray-900">
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
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-[#5B8C5A] via-[#4A7449] to-[#4A6FA5]">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-white" size={18} />
              <span className="text-white font-medium text-sm">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
              Why Lean EHS
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto px-4">
             We combine  Lean methodology with
               EHS expertise to improve safety, efficiency, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                className="group relative bg-white/10 backdrop-blur-md p-5 md:p-6 rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors mx-auto">
                  <item.icon className="text-white" size={24} />
                </div>
                <p className="text-white font-medium leading-relaxed text-center text-sm md:text-base">
                  {item.text}
                </p>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-xl transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-[#5B8C5A] rounded-lg rotate-12" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-[#4A6FA5] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
             <span className="text-[#5B8C5A] font-bold text-base md:text-lg tracking-widest uppercase">
  Our Services
</span>


            </div>
            {/* <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
              Lean EHS Solutions for Safer & Smarter Workplaces
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
              
            </p> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isSpecialized = service.id === "specialized";
              
              return (
                <a
                  key={index}
                  href={service.link}
                  className={`group relative bg-white rounded-2xl border overflow-hidden block transition-all duration-300 hover:-translate-y-2 ${
                    isSpecialized
                      ? "border-[#5B8C5A] border-2 shadow-xl hover:shadow-2xl ring-2 ring-[#5B8C5A]/20 md:scale-105"
                      : "border-gray-100 shadow-md hover:shadow-2xl"
                  }`}
                >
                  {/* Featured Badge */}
                  {isSpecialized && (
                    <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#5B8C5A] rounded-full animate-ping opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-[#5B8C5A] to-[#4A6FA5] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs font-bold tracking-wider shadow-lg flex items-center gap-1.5 md:gap-2">
                          <Sparkles size={12} className="md:hidden" />
                          <Sparkles size={14} className="hidden md:block" />
                          FEATURED
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Left Accent Bar */}
                  <div className={`absolute left-0 top-0 h-full bg-gradient-to-b from-[#5B8C5A] to-[#4A6FA5] ${
                    isSpecialized ? "w-2" : "w-1"
                  } opacity-80`} />

                  {/* Glowing border effect */}
                  {isSpecialized && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A]/10 via-transparent to-[#4A6FA5]/10 pointer-events-none" />
                  )}

                  {/* Header */}
                  <div className="p-5 md:p-6 lg:p-8 pb-5 md:pb-6">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform ${
                        isSpecialized
                          ? "from-[#5B8C5A]/20 to-[#4A6FA5]/20 ring-2 ring-[#5B8C5A]/30"
                          : "from-[#F0F7F0] to-[#E8F3F8]"
                      }`}>
                        <Icon className={`md:hidden ${isSpecialized ? "text-[#5B8C5A]" : "text-[#5B8C5A]"}`} size={26} />
                        <Icon className={`hidden md:block ${isSpecialized ? "text-[#5B8C5A]" : "text-[#5B8C5A]"}`} size={30} />
                      </div>
                      <h3 className={`text-lg md:text-xl font-bold leading-snug transition-colors ${
                        isSpecialized
                          ? "text-[#5B8C5A] group-hover:text-[#4A6FA5]"
                          : "text-gray-900 group-hover:text-[#5B8C5A]"
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-xs md:text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`mx-5 md:mx-8 h-px ${isSpecialized ? "bg-[#5B8C5A]/20" : "bg-gray-100"}`} />

                  {/* Footer CTA */}
                  <div className={`px-5 md:px-8 py-4 md:py-5 flex items-center justify-between ${
                    isSpecialized ? "bg-gradient-to-r from-[#5B8C5A]/5 to-[#4A6FA5]/5" : ""
                  }`}>
                    <span className={`text-xs md:text-sm font-semibold tracking-wide ${
                      isSpecialized ? "text-[#5B8C5A]" : "text-[#5B8C5A]"
                    }`}>
                      {isSpecialized ? "🌟 Discover Premium Service" : "Explore Service"}
                    </span>
                    <ArrowRight
                      size={16}
                      className="text-[#5B8C5A] group-hover:translate-x-1 transition-transform md:hidden"
                    />
                    <ArrowRight
                      size={18}
                      className="text-[#5B8C5A] group-hover:translate-x-1 transition-transform hidden md:block"
                    />
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity ${
                    isSpecialized
                      ? "from-[#5B8C5A]/10 to-[#4A6FA5]/10"
                      : "from-[#5B8C5A]/5 to-transparent"
                  }`} />
                </a>
              );
            })}
          </div>
          
          <div className="text-center mt-10 md:mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[#5B8C5A] font-semibold text-base md:text-lg hover:text-[#4A7449] transition-colors group"
            >
              View All Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <span className="text-[#4A6FA5] font-semibold text-xs md:text-sm tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-4 px-4">
              Our EHS Implementation Process
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
              A structured, practical approach that ensures compliance, safety, and long-term sustainability
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Center Line - Desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4A6FA5]/30 to-transparent" />

            <div className="space-y-12 md:space-y-16 lg:space-y-20">
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
                    <div className="bg-white shadow-xl border border-gray-100 rounded-2xl p-5 md:p-6 lg:p-8 w-full lg:w-[45%] relative group hover:shadow-2xl transition-all duration-300">
                      
                      {/* Step Number */}
                      <div className="absolute -top-4 md:-top-6 left-4 md:left-6 bg-[#4A6FA5] text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold tracking-wider">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#E8F3F8] to-[#F0F7F0] flex items-center justify-center shadow-md flex-shrink-0">
                          <Icon className="text-[#4A6FA5] md:hidden" size={24} />
                          <Icon className="text-[#4A6FA5] hidden md:block" size={28} />
                        </div>

                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connector Dot - Desktop only */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#4A6FA5] rounded-full border-4 border-white shadow-lg" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-br from-[#5B8C5A] via-[#4A7449] to-[#4A6FA5] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="text-white" size={18} />
            <span className="text-white/90 text-sm font-medium">
              Ready to Get Started?
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
            Talk to Our Compliance Experts
          </h2>
          <p className="text-white/90 text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Get practical guidance on your compliance journey. Connect with our team for a consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#5B8C5A] px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Get In Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-base md:text-lg hover:-translate-y-1"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919028360700"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Button */}
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
            <MessageCircle className="text-white md:hidden" size={28} />
            <MessageCircle className="text-white hidden md:block" size={32} />
          </div>

          {/* Tooltip - Desktop only */}
          <div className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Chat with us on WhatsApp
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