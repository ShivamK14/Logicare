import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

/**
 * Contact / Partner Signup Page
 * Contact form and fleet owner onboarding CTA
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    inquiryType: "general",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        inquiryType: "general",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-50 via-white to-primary-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have questions? Want to partner with us? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-b from-white/80 to-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-to-br from-white to-accent-50/30 border-2 border-accent-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-4">✓</div>
                      <h3 className="text-xl font-bold text-green-800 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-green-700">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="partnership">
                            Fleet Owner Partnership
                          </option>
                          <option value="sales">Sales Inquiry</option>
                          <option value="support">Customer Support</option>
                          <option value="api">API Integration</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        variant="primary"
                        className="w-full sm:w-auto"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </Card>
              </div>

              {/* Contact Info & Partner CTA */}
              <div className="space-y-6">
                {/* Contact Information */}
                <Card>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <a
                          href="mailto:info@logicareindia.com"
                          className="text-accent-600 hover:text-accent-700"
                        >
                          info@logicareindia.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <a
                          href="tel:+911800123456"
                          className="text-accent-600 hover:text-accent-700"
                        >
                          +91 1800 123 456
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Address
                        </div>
                        <div className="text-gray-700">
                          Mumbai, Maharashtra
                          <br />
                          India
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Fleet Owner Partnership CTA */}
                <Card className="bg-gradient-to-br from-accent-600 to-primary-600 text-white">
                  <h3 className="text-xl font-bold mb-3">Fleet Owner?</h3>
                  <p className="mb-4 text-accent-100">
                    Partner with LogiCare and grow your business. Join our
                    network of trusted delivery partners.
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-accent-600 hover:bg-gray-100 w-full"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        inquiryType: "partnership",
                      }));
                      const element = document.getElementById("inquiryType");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Partner With Us
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
