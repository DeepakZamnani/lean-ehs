"use client";
import { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle, 
  Clock,
  Sparkles,
  ArrowRight,
  Shield,
  Award,
  Users,
  MessageCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden pt-28 md:pt-28">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/services.jpg"
            alt="Contact LEAN EHS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#5B8C5A]/95 via-[#4A7449]/90 to-[#4A6FA5]/95" />
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-white" size={18} />
              <span className="text-white font-medium text-sm">
                Get In Touch
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Ready to strengthen your compliance posture? Our team is here to guide you through your EHS journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info - Left Side */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <div className="inline-block mb-4">
                  <span className="text-[#5B8C5A] font-semibold text-sm tracking-wider uppercase">
                    Contact Information
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h2>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have questions about compliance requirements or need expert guidance? Our team is here to help you navigate your EHS and sustainability obligations.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Email - Clickable */}
                  <a 
                    href="mailto:leanehs@outlook.com"
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 border border-gray-100 hover:border-[#5B8C5A]/30 block cursor-pointer hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#F0F7F0] to-[#E8F3F8] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <Mail className="text-[#5B8C5A]" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Email</h3>
                        <p className="text-gray-700 font-medium group-hover:text-[#5B8C5A] transition-colors">info@leanehs.in</p>
                        <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to send email →</p>
                      </div>
                    </div>
                  </a>

                  {/* Phone - Clickable */}
                  <a 
                    href="tel:+919028360700"
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 border border-gray-100 hover:border-[#4A6FA5]/30 block cursor-pointer hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#E8F3F8] to-[#F0F7F0] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <Phone className="text-[#4A6FA5]" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Phone</h3>
                        <p className="text-gray-700 font-medium group-hover:text-[#4A6FA5] transition-colors">+91 9028360700</p>
                        <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to call →</p>
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp - Clickable */}
                  <a 
                    href="https://wa.me/919028360700"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 border border-gray-100 hover:border-[#25D366]/30 block cursor-pointer hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                        <MessageCircle className="text-[#25D366]" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">WhatsApp</h3>
                        <p className="text-gray-700 font-medium group-hover:text-[#25D366] transition-colors">+91 9028360700</p>
                        <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Click to chat →</p>
                      </div>
                    </div>
                  </a>

                  {/* Business Hours */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#F0F7F0] to-[#E8F3F8] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <Clock className="text-[#5B8C5A]" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1 text-sm uppercase tracking-wide">Business Hours</h3>
                        <p className="text-gray-700 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-700 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Contact Us */}
                <div className="mt-8 p-6 bg-gradient-to-br from-[#F0F7F0] to-[#E8F3F8] rounded-2xl shadow-md">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Why Choose LEAN EHS?</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Shield, text: "24-48 Hour Response Time" },
                      { icon: Award, text: "Industry-Certified Experts" },
                      { icon: Users, text: "Personalized Solutions" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/80 rounded-lg flex items-center justify-center shadow-sm">
                          <item.icon className="text-[#5B8C5A]" size={16} />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              {success ? (
                <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#5B8C5A] to-[#4A7449] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Thank you for reaching out. Our team will get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100"
                >
                  <div className="mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                    <p className="text-gray-600">Fill out the form below and we'll get back to you soon.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="regulatory">Regulatory EHS & Safety Audits</option>
                      <option value="iso">ISO Management Systems</option>
                      <option value="ethical">Ethical Trade & Sustainability</option>
                      <option value="environmental">Environmental & Waste Compliance</option>
                      <option value="automotive">Automotive Standards</option>
                      <option value="food">Food Safety</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all resize-none bg-white"
                      placeholder="Tell us about your compliance needs..."
                    />
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#5B8C5A] to-[#4A7449] text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </form>
              )}
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
              Have Questions?
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prefer to Call? We're Here.
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Our compliance experts are ready to discuss your specific needs and requirements.
          </p>
          
          <a
            href="tel:+919028360700"
            className="group inline-flex items-center justify-center gap-2 bg-white text-[#5B8C5A] px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <Phone size={22} />
            <span>+91 9028360700</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={22} />
          </a>

          
            <a
            href="https://wa.me/919028360700"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-10 right-10 z-50 group"
            aria-label="Chat on WhatsApp"
            >
            <div className="relative">
            {/* Pulsing Ring */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>

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
            <script>
            {`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}
            </script>
        </div>
      </section>

      <Footer />
    </div>
  );
}