import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Check,
  Building2,
  HomeIcon,
} from "lucide-react";
import { useState } from "react";
import Head from "next/head";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectDetails: "",
  });
  const [customerType, setCustomerType] = useState("residential");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Create lead object
      const lead = {
        ...formData,
        customerType,
        service: "Contact Form",
        source: "Contact Page",
      };

      // Send to Monday.com
      await fetch("/api/monday", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      // Send email
      await fetch("/api/drywall_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(778) 907-4485",
      link: "tel:+17789074485",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@drywallvan.ca",
      link: "mailto:info@drywallvan.ca",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Monday – Sunday: 8 AM - 8 PM",
      link: null,
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Greater Vancouver Area",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>
          Contact WallMasters Drywall Vancouver | Professional Drywall Services
        </title>
        <meta
          name="description"
          content="Get in touch with Vancouver's premier drywall contractors for repairs, installation, texture matching, and commercial projects. Fast response and free quotes."
        />
      </Head>

      <Navigation />

      <section className="relative bg-gray-900 py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden bg-[url('/photos/homepage/2.jpg')]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Contact WallMasters Drywall
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
            Vancouver's trusted drywall experts for repairs, installation, and
            commercial projects
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
                <item.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Request a Free Quote
          </h2>

          {showSuccess ? (
            <SuccessScreen onDismiss={() => setShowSuccess(false)} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Property Type Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setCustomerType("residential")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === "residential"
                      ? "border-gray-900 bg-gray-900/5"
                      : "border-gray-200 hover:border-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <HomeIcon
                      className={`w-5 h-5 ${
                        customerType === "residential"
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    />
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          customerType === "residential"
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}
                      >
                        Residential
                      </h3>
                      <p className="text-sm text-gray-600">Home repairs</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setCustomerType("commercial")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    customerType === "commercial"
                      ? "border-gray-900 bg-gray-900/5"
                      : "border-gray-200 hover:border-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building2
                      className={`w-5 h-5 ${
                        customerType === "commercial"
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                    />
                    <div>
                      <h3
                        className={`text-lg font-semibold mb-1 ${
                          customerType === "commercial"
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}
                      >
                        Commercial
                      </h3>
                      <p className="text-sm text-gray-600">Business projects</p>
                    </div>
                  </div>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address*
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Please describe your drywall project needs..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  Submit Quote Request
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  2-hour response • Expert service • Vancouver certified
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

const SuccessScreen = ({ onDismiss }: { onDismiss: () => void }) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium text-gray-900">Message received</h3>

      <div className="space-y-2 text-center">
        <p className="text-gray-600">We&apos;ll get back to you shortly</p>
        <p className="text-gray-500 text-sm">
          Response will be sent to your email
        </p>
      </div>

      <button
        onClick={onDismiss}
        className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-[#ffc527] hover:text-black"
      >
        Done
      </button>
    </div>
  );
};

export default ContactUs;
