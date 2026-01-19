"use client";
import { useState } from "react";
import Header from './Header';
import Footer from './Footer'
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F0F7F0] to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Connect with Lean EHS for compliance clarity and audit readiness
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about compliance requirements or need expert
                guidance? Our team is here to help you navigate your EHS and
                sustainability obligations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#F0F7F0] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#5B8C5A]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">leanehs@outlook.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E8F3F8] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#4A6FA5]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">9028360700</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {success ? (
                <div className="bg-[#F0F7F0] border border-[#5B8C5A] rounded-lg p-8 text-center">
                  <CheckCircle
                    className="text-[#5B8C5A] mx-auto mb-4"
                    size={48}
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-[#5B8C5A] font-semibold hover:text-[#4A7449] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#F9FAFB] p-8 rounded-lg border border-gray-200"
                >
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="regulatory">
                        Regulatory EHS & Safety Audits
                      </option>
                      <option value="iso">ISO Management Systems</option>
                      <option value="ethical">
                        Ethical Trade & Sustainability
                      </option>
                      <option value="environmental">
                        Environmental & Waste Compliance
                      </option>
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
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#5B8C5A] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your compliance needs..."
                    />
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#5B8C5A] text-white px-6 py-4 rounded-md hover:bg-[#4A7449] transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
