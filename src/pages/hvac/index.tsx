import React, { useState } from "react";
import {
  Phone,
  ArrowRight,
  Fan,
  Thermometer,
  Clock,
  CheckCircle2,
  Shield,
} from "lucide-react";

const HVACLandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/hvac_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thank you! We will contact you shortly.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+1 (778) 653-4862";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Vancouver HVAC Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional heating, cooling, and ventilation services. 24/7
              emergency support for your home or business.
            </p>
            <button
              onClick={handleEmergencyCall}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all"
            >
              <Phone className="w-5 h-5" />
              Emergency Service
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Fan className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AC Services</h3>
              <p className="text-gray-600">
                Installation, repair, and maintenance for all AC systems
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Thermometer className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Heating</h3>
              <p className="text-gray-600">
                Furnace repair, heat pump services, and heating maintenance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Emergency HVAC services when you need them most
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Schedule Service</h2>
            <p className="text-gray-600">Request an appointment or estimate</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-8 rounded-xl"
          >
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Service Type *
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                required
              >
                <option value="">Select service...</option>
                <option value="ac_repair">AC Repair</option>
                <option value="ac_installation">AC Installation</option>
                <option value="heating_repair">Heating Repair</option>
                <option value="heating_installation">
                  Heating Installation
                </option>
                <option value="maintenance">Maintenance</option>
                <option value="emergency">Emergency Service</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Please describe your HVAC needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gray-900 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-gray-600">
                  Fully certified HVAC technicians serving Vancouver
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-gray-900 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Satisfaction Guaranteed
                </h3>
                <p className="text-gray-600">
                  Our work is backed by our 100% satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Need Emergency HVAC Service?
          </h2>
          <button
            onClick={handleEmergencyCall}
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HVACLandingPage;
