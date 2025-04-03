import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Phone,
  ArrowRight,
  Ruler,
  Clock,
  CheckCircle2,
  Shield,
  Building2,
  Home,
  Check,
  Calendar,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import { Lead } from "@/utils/createLead";

type CustomerType = "residential" | "commercial" | null;
type ServiceType = "installation" | "texture" | "commercial" | null;

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  projectDetails: string;
  serviceType: string;
  projectSize: string;
  preferredDate: string;
}

const DrywallPage: NextPage = () => {
  const [customerType, setCustomerType] = useState<CustomerType>(null);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [projectSize, setProjectSize] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<
    Pick<FormData, "name" | "phone" | "email" | "address" | "projectDetails">
  >({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      customerType,
      serviceType,
      projectSize,
      preferredDate,
    };

    try {
      const newLead: Lead = {
        name: formData.name,
        date_Mjj7SnLm: new Date().toISOString(),
        lead_status: "New Lead",
        status_1_Mjj7KSmv:
          customerType === "commercial" ? "Commercial Form" : "Form Drywall",
        text_Mjj7Hg3c: `project details: ${formData.projectDetails}, service type: ${serviceType}, customer type: ${customerType}, project size: ${projectSize}, preferred date: ${preferredDate}`,
        numbers_Mjj7fpib: 0,
        job_location_mkm418ra: formData.address,
        lead_phone: formData.phone,
        lead_email: formData.email,
        status_1_Mjj77YUc:
          serviceType === "installation"
            ? "Drywall Repair"
            : serviceType === "texture"
            ? "Drywall Repair"
            : serviceType === "commercial"
            ? "Handyman"
            : "Drywall Repair",
        status_1_Mjj7Dz0C: "No Payment Due",
        status_1_Mjj7nPIN: "Not Insurance",
      };

      fetch("/api/monday", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLead),
      });
    } catch (e) {
      console.warn(e);
    }

    try {
      const response = await fetch("/api/drywall_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // Reset form
        setShowSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          projectDetails: "",
        });
        setCustomerType(null);
        setServiceType(null);
        setProjectSize("");
        setPreferredDate("");
      } else {
        throw new Error("Failed to submit quote request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+17789074485";
  };

  const serviceFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Vancouver Experts",
      description: "Your local drywall installation specialists",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Premium Solutions",
      description: "Industry-leading materials and techniques",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "Projects completed on schedule",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Professionals",
      description: "Licensed and insured in Vancouver",
    },
  ];

  const services = [
    {
      id: "installation",
      title: "NEW DRYWALL INSTALLATION",
      description:
        "Transform your space with expert drywall installation services. Whether you're renovating, building an addition, or constructing a new property, our team delivers exceptional quality from framing to finishing.",
      image: "/photos/homepage/1.jpg",
      features: [
        "Complete new installations",
        "Home renovations and additions",
        "Custom designs and layouts",
        "Premium material options",
      ],
    },
    {
      id: "texture",
      title: "TEXTURE MATCHING",
      description:
        "Our skilled technicians are experts at creating and matching any wall texture. We perfectly blend new work with your existing surfaces for seamless, consistent finishes that enhance your space.",
      image: "/photos/homepage/BeforeAfter.jpg",
      features: [
        "Perfect texture matching",
        "Knockdown, orange peel, and popcorn textures",
        "Custom texture creation",
        "Whole-home texture refreshing",
      ],
    },
    {
      id: "commercial",
      title: "COMMERCIAL DRYWALL",
      description:
        "Specialized drywall solutions for businesses of all sizes. Our commercial services include installations for office spaces, retail locations, restaurants, and more with minimal disruption to your operations.",
      image: "/photos/homepage/Handyman.jpg",
      features: [
        "Office and retail buildouts",
        "Fire-rated assemblies",
        "Acoustic solutions",
        "After-hours installation options",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>
          Expert Drywall Services Vancouver | Installation, Texture Matching &
          Commercial
        </title>
        <meta
          name="description"
          content="Vancouver's premier drywall specialists offering new installations, expert texture matching, and commercial drywall solutions. Free quotes and superior craftsmanship."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drywallvan.ca/drywall" />
        <meta
          property="og:title"
          content="Expert Drywall Services Vancouver | Installation, Texture Matching & Commercial"
        />
        <meta
          property="og:description"
          content="Vancouver's premier drywall specialists offering new installations, expert texture matching, and commercial drywall solutions."
        />
        <meta
          property="og:image"
          content="https://drywallvan.ca/photos/homepage/1.jpg"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row gap-12 items-center py-16">
              <div className="w-full md:w-1/2">
                <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Vancouver&apos;s Premier Drywall Specialists
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Expert Drywall{" "}
                  <span className="text-yellow-400">Installation</span> &{" "}
                  <span className="text-yellow-400">Finishing</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  From new installations to perfect texture matching and
                  commercial solutions, WallMasters delivers flawless results
                  for all your drywall needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleEmergencyCall}
                    className="group inline-flex items-center justify-center gap-3 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-300 transition-all duration-300"
                  >
                    <Phone className="w-6 h-6" />
                    <span>Call (778) 907-4485</span>
                  </button>

                  <button
                    onClick={() => {
                      const contactForm =
                        document.querySelector("#contactform");
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Get Free Estimate</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/photos/homepage/1.jpg"
                    alt="Professional Drywall Installation Vancouver"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white" id="services">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our Specialized Drywall Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering exceptional quality and craftsmanship for your
                residential and commercial drywall projects
              </p>
            </div>

            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        setServiceType(service.id as ServiceType);
                        const contactForm =
                          document.querySelector("#contactform");
                        if (contactForm) {
                          contactForm.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <span>Request a Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Why Choose WallMasters Drywall
              </h2>
              <p className="text-lg text-gray-600">
                Vancouver&apos;s most trusted drywall specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-yellow-500 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-white" id="contactform">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Schedule Your Drywall Service
              </h2>
              <p className="text-lg text-gray-600">
                Get a free estimate for your project
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Type Selection */}
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-900 mb-4">
                      Select Service Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() =>
                            setServiceType(service.id as ServiceType)
                          }
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            serviceType === service.id
                              ? "border-gray-900 bg-gray-900/5"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          <h3
                            className={`text-lg font-semibold mb-1 ${
                              serviceType === service.id
                                ? "text-gray-900"
                                : "text-gray-700"
                            }`}
                          >
                            {service.id === "installation"
                              ? "NEW"
                              : service.id === "texture"
                              ? "TEXTURE"
                              : service.id === "commercial"
                              ? "COMMERCIAL"
                              : service.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {service.features[0]}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Type Selection */}
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-900 mb-4">
                      Property Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setCustomerType("residential")}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          customerType === "residential"
                            ? "border-gray-900 bg-gray-900/5"
                            : "border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Home
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
                                  : "text-gray-700"
                              }`}
                            >
                              Residential
                            </h3>
                            <p className="text-sm text-gray-600">
                              Home projects
                            </p>
                          </div>
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCustomerType("commercial")}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          customerType === "commercial"
                            ? "border-gray-900 bg-gray-900/5"
                            : "border-gray-200 hover:border-gray-400"
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
                                  : "text-gray-700"
                              }`}
                            >
                              Commercial
                            </h3>
                            <p className="text-sm text-gray-600">
                              Business solutions
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Name *
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
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Phone *
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
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
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
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Property Address *
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
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project Size (sq ft)
                    </label>
                    <input
                      type="number"
                      value={projectSize}
                      onChange={(e) => setProjectSize(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Approximate square footage"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Preferred Start Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Please describe your drywall project needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                  >
                    Submit Request
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    Fast response • Expert service • Vancouver certified
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const SuccessScreen = ({
  email,
  setShowSuccess,
}: {
  email: string;
  setShowSuccess: (p: false) => void;
}) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium text-gray-900">Request received!</h3>

      <div className="space-y-2 text-center">
        <p className="text-gray-600">
          We&apos;ll get back to you shortly with a quote
        </p>
        <p className="text-gray-500 text-sm">
          A confirmation has been sent to {email}
        </p>
      </div>

      <button
        onClick={() => {
          setShowSuccess(false);
        }}
        className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
      >
        Done
      </button>
    </div>
  );
};

export default DrywallPage;
