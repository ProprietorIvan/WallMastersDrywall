import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Ruler,
  Clock,
  Shield,
  Building2,
  Home as HomeIcon,
  Check,
} from "lucide-react";
import Image from "next/image";
import type { NextPage } from "next";
import { Lead } from "@/utils/createLead";

type CustomerType = "residential" | "commercial" | null;

interface FormData {
  name: string;
  phone: string;
  facilityType: string;
  projectSize: string;
  urgency: string;
  email: string;
  address: string;
  projectDetails: string;
}

const TextureMatchingPage: NextPage = () => {
  const [customerType, setCustomerType] = useState<CustomerType>(null);
  const [facilityType, setFacilityType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [projectSize, setProjectSize] = useState("");
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
      facilityType,
      urgency,
      projectSize,
    };
    try {
      const newLead: Lead = {
        name: formData.name,
        date_Mjj7SnLm: new Date().toISOString(),
        lead_status: "New Lead",
        status_1_Mjj7KSmv:
          customerType === "commercial" ? "Commercial Form" : "Form Drywall",
        text_Mjj7Hg3c: `project details: ${formData.projectDetails},urgency: ${urgency}, customer type: ${customerType}, facility type: ${facilityType}, project size:${projectSize}`,
        numbers_Mjj7fpib: 0,
        job_location_mkm418ra: formData.address,
        lead_phone: formData.phone,
        lead_email: formData.email,
        status_1_Mjj77YUc: "Drywall Repair",
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
        setFacilityType("");
        setUrgency("");
        setProjectSize("");
      } else {
        throw new Error("Failed to submit quote request");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  const facilityTypes = [
    "Office Building",
    "Retail Store",
    "Restaurant",
    "Warehouse",
    "Medical Facility",
    "Educational Institution",
    "Hotel/Hospitality",
    "Industrial Space",
  ];

  const textureServices = [
    {
      title: "Popcorn Ceiling Matching",
      description: "Expert matching of popcorn and acoustic ceiling textures",
      features: [
        "Perfect texture replication",
        "Seamless integration",
        "Dust containment system",
        "Clean application process",
      ],
    },
    {
      title: "Orange Peel Texture",
      description: "Professional orange peel texture matching and application",
      features: [
        "Consistent pattern matching",
        "Even application",
        "Custom texture depth",
        "Large area capability",
      ],
    },
    {
      title: "Knockdown Texture",
      description: "Skilled knockdown texture matching for walls and ceilings",
      features: [
        "Pattern consistency",
        "Depth control",
        "Smooth transitions",
        "Perfect blending",
      ],
    },
    {
      title: "Custom Textures",
      description: "Specialized matching of unique and custom wall textures",
      features: [
        "Pattern analysis",
        "Sample creation",
        "Test application",
        "Perfect replication",
      ],
    },
  ];

  // Structured data for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WallMasters Drywall Vancouver",
    image: "https://drywallvan.ca/photos/homepage/BeforeAfter.png",
    url: "https://drywallvan.ca/texture-matching",
    telephone: "+17789074485",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "49.2827",
      longitude: "-123.1207",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: "$$",
  };

  // Structured data for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drywall Texture Matching Services",
    provider: {
      "@type": "LocalBusiness",
      name: "WallMasters Drywall Vancouver",
    },
    serviceType: "Texture Matching",
    areaServed: "Vancouver Metropolitan Area",
    description:
      "Expert drywall texture matching services including popcorn ceiling, orange peel, knockdown, and custom texture matching with seamless integration.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>
          Expert Drywall Texture Matching Vancouver | WallMasters Drywall
        </title>
        <meta
          name="description"
          content="Professional drywall texture matching services in Vancouver. Perfect matching of popcorn, orange peel, knockdown, and custom textures. Seamless repairs guaranteed."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="texture matching vancouver, popcorn ceiling repair, orange peel texture, knockdown texture, custom drywall textures"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://drywallvan.ca/texture-matching"
        />
        <meta
          property="og:title"
          content="Expert Drywall Texture Matching Vancouver | WallMasters Drywall"
        />
        <meta
          property="og:description"
          content="Professional drywall texture matching services in Vancouver. Perfect matching of any wall or ceiling texture."
        />
        <meta
          property="og:image"
          content="https://drywallvan.ca/photos/homepage/BeforeAfter.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Expert Drywall Texture Matching Vancouver | WallMasters Drywall"
        />
        <meta
          name="twitter:description"
          content="Professional texture matching services in Vancouver with seamless integration guaranteed."
        />
        <meta
          name="twitter:image"
          content="https://drywallvan.ca/photos/homepage/BeforeAfter.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Perfect Texture Matching in Vancouver
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Our expert technicians specialize in matching any wall or
                ceiling texture perfectly. From popcorn ceilings to custom
                patterns, we guarantee seamless integration with your existing
                surfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+17789074485"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <span>Call Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] lg:h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/homepage/BeforeAfter.png"
                  alt="Perfect texture matching in Vancouver"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Texture Matching Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert texture matching for any wall or ceiling surface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {textureServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Texture Matching Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A methodical approach to ensure perfect texture matching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Analysis",
                description:
                  "Detailed examination of existing texture pattern and depth",
              },
              {
                step: "2",
                title: "Sample Creation",
                description:
                  "Development of test samples to ensure perfect match",
              },
              {
                step: "3",
                title: "Application",
                description:
                  "Expert application with seamless blending techniques",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-yellow-500 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Get a Free Texture Matching Quote
          </h2>
          <p className="text-center mb-8">
            Fill out the form below to get started with your texture matching
            project. Our team will get back to you shortly with a free,
            no-obligation quote.
          </p>
          {showSuccess ? (
            <SuccessScreen onDismiss={() => setShowSuccess(false)} />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="projectDetails" className="block mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Customer Type</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className={`flex-1 py-2 px-4 rounded-lg border ${
                      customerType === "residential"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setCustomerType("residential")}
                  >
                    <HomeIcon className="w-5 h-5 inline mr-2" />
                    Residential
                  </button>
                  <button
                    type="button"
                    className={`flex-1 py-2 px-4 rounded-lg border ${
                      customerType === "commercial"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setCustomerType("commercial")}
                  >
                    <Building2 className="w-5 h-5 inline mr-2" />
                    Commercial
                  </button>
                </div>
              </div>
              {customerType === "commercial" && (
                <div className="mb-4">
                  <label htmlFor="facilityType" className="block mb-2">
                    Facility Type
                  </label>
                  <select
                    id="facilityType"
                    name="facilityType"
                    value={facilityType}
                    onChange={(e) => setFacilityType(e.target.value)}
                    required
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="">Select facility type</option>
                    {facilityTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="urgency" className="block mb-2">
                  How urgent is your project?
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select urgency</option>
                  <option value="Immediate">Immediate</option>
                  <option value="Within 1 week">Within 1 week</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Within 1 month">Within 1 month</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="projectSize" className="block mb-2">
                  Project Size (approx. sq. ft.)
                </label>
                <input
                  type="text"
                  id="projectSize"
                  name="projectSize"
                  value={projectSize}
                  onChange={(e) => setProjectSize(e.target.value)}
                  placeholder="e.g., 500 sq. ft."
                  required
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Free Quote
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TextureMatchingPage;

const SuccessScreen = ({ onDismiss }: { onDismiss: () => void }) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px] bg-white rounded-lg shadow-lg">
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
