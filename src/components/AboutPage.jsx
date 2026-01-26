import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Target,
  Eye,
  CheckCircle2,
  AlertCircle,
  Award,
  Sparkles,
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
  MessageCircle
} from "lucide-react";

export default function AboutPage() {
  const images = ["/lean-img1.jpg", "/lean-img2.jpg", "/services3.jpeg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const differentiators = [
    "Implementation-focused, not theoretical",
    "Strong audit facilitation experience",
    "Deep regulatory and industry knowledge",
    "Customized solutions per client operations",
  ];

  const DiffItem = ({ text }) => (
  <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 shadow-md max-w-xs hover:shadow-lg transition-all">
    <div className="flex items-start gap-3">
      <CheckCircle2 className="text-[#5B8C5A] mt-1" size={20} />
      <p className="text-sm font-medium text-gray-800 leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative py-24 md:py-36 bg-[#4A7449]/10 overflow-hidden">
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

      {/* Left Column - Image */}
      <div className="flex justify-center">
        <img
          src="/logo_lean2.png"
          alt="Lean EHS Illustration"
          className="w-full max-w-3xl h-[60vh] md:h-[70vh] object-contain"
        />
      </div>

      {/* Right Column - Text */}
      <div className="space-y-6 py-6 md:py-0">
        <div className="w-16 h-1 bg-[#4A7449] rounded-full" />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          <span className="text-[#4A7449]">Lean EHS</span>
          <br />
          Compliance & Safety Partner
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-900">Lean EHS</span> is a
          professional consultancy helping organizations translate{" "}
          <span className="font-medium text-[#4A7449]">
            regulatory requirements
          </span>{" "}
          into practical, on-ground EHS systems that protect people, operations,
          and reputation.
        </p>

        <p className="text-base text-gray-600 leading-relaxed">
          We specialize in compliance assessments, audit facilitation, and
          implementation-ready solutions across EHS, Quality, Sustainability,
          and Regulatory domains.
        </p>
      </div>
    </div>
  </div>

  {/* Top-left green triangle */}
  <svg
    className="absolute top-0 left-0 w-32 h-32 md:w-56 md:h-56 z-0"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <polygon points="0,0 100,0 0,100" fill="#4A7449" />
  </svg>

  {/* Bottom-right green triangle */}
  <svg
    className="absolute bottom-0 right-0 w-32 h-32 md:w-56 md:h-56 z-0"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <polygon points="0,100 100,100 100,0" fill="#4A7449" />
  </svg>
</section>







      {/* Company Overview + Mission & Vision */}
<section className="py-24 bg-gradient-to-b from-white to-[#F9FAFB] relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT – COMPANY OVERVIEW */}
    <div className="relative">
      {/* Accent Line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5B8C5A] to-[#4A6FA5] rounded-full" />

      <div className="pl-8">
        <span className="text-[#5B8C5A] font-semibold text-sm tracking-wider uppercase">
          About Lean EHS
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
          Compliance. Safety. Sustainability.
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
          <span className="font-semibold text-gray-900">Lean EHS</span> is a professional
          consultancy delivering compliance assessments, audit facilitation,
          and end-to-end implementation support across
          <span className="text-[#5B8C5A] font-semibold">
            {" "}EHS, Quality, Sustainability, and Regulatory
          </span>{" "}
          domains.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4 max-w-xl">
          We help organizations move beyond checkbox compliance and build
          systems that work on-ground — protecting people, operations, and reputation.
        </p>
      </div>
    </div>

    {/* RIGHT – MISSION & VISION */}
    <div className="grid gap-10">
      
      {/* Mission */}
      <div className="group relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all">
        <div className="absolute -top-6 left-10 bg-[#5B8C5A] text-white px-5 py-1 rounded-full text-sm font-semibold tracking-wide">
          OUR MISSION
        </div>

        <div className="flex items-start gap-5 mt-4">
          <div className="w-14 h-14 rounded-xl bg-[#5B8C5A]/10 flex items-center justify-center">
            <Target className="text-[#5B8C5A]" size={26} />
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Enable organizations to meet statutory, ethical, and sustainability
            obligations through practical, site-focused compliance solutions.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="group relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all">
        <div className="absolute -top-6 left-10 bg-[#4A6FA5] text-white px-5 py-1 rounded-full text-sm font-semibold tracking-wide">
          OUR VISION
        </div>

        <div className="flex items-start gap-5 mt-4">
          <div className="w-14 h-14 rounded-xl bg-[#4A6FA5]/10 flex items-center justify-center">
            <Eye className="text-[#4A6FA5]" size={26} />
          </div>
          <p className="text-gray-600 leading-relaxed text-lg">
            To be recognized as a trusted partner that transforms compliance
            from obligation into operational excellence.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


 {/* DIFFERENTIATORS – PROCESS FLOW */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      What Makes Us Different
    </h2>
    <p className="text-center text-gray-600 mb-14">
      The core principles that define how we deliver compliance and safety solutions
    </p>

    <div className="grid md:grid-cols-4 gap-8 items-center">
      {[
        {
          title: "Implementation Focused",
          desc: "Practical, on-ground execution — not just documentation",
        },
        {
          title: "Customized Solutions",
          desc: "Tailored programs based on client operations",
        },
        {
          title: "Audit Facilitation",
          desc: "Strong experience supporting regulatory audits",
        },
        {
          title: "Industry Experience",
          desc: "Multi-sector EHS compliance expertise",
        },
      ].map((item, i) => (
        <div key={i} className="relative">
          {/* Arrow (desktop only) */}
          {i !== 3 && (
            <div className="hidden md:block absolute top-1/2 right-[-28px] w-8 h-px bg-[#5B8C5A]/50" />
          )}

          <div className="bg-[#F9FAFB] border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition">
            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#5B8C5A]/10 text-[#5B8C5A] font-bold flex items-center justify-center">
              {i + 1}
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      

      {/* CTA */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#5B8C5A] via-[#4A7449] to-[#4A6FA5]">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Compliance Journey?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Let’s discuss how we can support your compliance goals.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#5B8C5A] px-10 py-4 rounded-lg font-bold text-lg hover:-translate-y-1 transition-all"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* DISCLAIMER */}
<section className="bg-yellow-100 border-l-4 border-yellow-500 p-4 max-w-2xl mx-auto my-6 flex items-start gap-3 rounded">
  <AlertCircle className="text-yellow-600 mt-1" size={24} />
  <div>
    <p className="text-yellow-800 font-semibold">
      ⚠️ <span className="font-bold">Important Disclaimer:</span> Lean EHS provides consultancy and audit facilitation services only. We are not a certification or third-party audit body. Our role is to prepare and support organizations through compliance audits.
    </p>
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
