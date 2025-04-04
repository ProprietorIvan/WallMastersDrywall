import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Clock,
  Shield,
  Users,
  Phone,
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

const CommercialDrywallPage: NextPage = () => {
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

  const commercialServices = [
    {
      title: "Office Build-Outs",
      description:
        "Complete drywall solutions for office spaces and tenant improvements",
      features: [
        "Custom office layouts",
        "Sound-proof partitions",
        "Fire-rated assemblies",
        "After-hours installation",
      ],
    },
    {
      title: "Retail Spaces",
      description:
        "Professional drywall services for retail stores and shopping centers",
      features: [
        "Storefront designs",
        "Display wall systems",
        "Quick turnaround",
        "Minimal disruption",
      ],
    },
    {
      title: "Industrial Facilities",
      description:
        "Specialized drywall solutions for industrial and manufacturing spaces",
      features: [
        "High-durability systems",
        "Code compliance",
        "Safety requirements",
        "Large-scale capability",
      ],
    },
    {
      title: "Healthcare Facilities",
      description:
        "Specialized drywall installation for medical and healthcare spaces",
      features: [
        "Clean room standards",
        "Infection control",
        "Lead-lined walls",
        "HEPA filtration",
      ],
    },
  ];

  // Structured data for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WallMasters Drywall Vancouver",
    image: "https://drywallvan.ca/photos/homepage/2.jpg",
    url: "https://drywallvan.ca/commercial-drywall",
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
    name: "Commercial Drywall Services",
    provider: {
      "@type": "LocalBusiness",
      name: "WallMasters Drywall Vancouver",
    },
    serviceType: "Commercial Drywall",
    areaServed: "Vancouver Metropolitan Area",
    description:
      "Professional commercial drywall services for office build-outs, retail spaces, industrial facilities, and healthcare facilities throughout Vancouver.",
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
          Commercial Drywall Services Vancouver | WallMasters Drywall
        </title>
        <meta
          name="description"
          content="Professional commercial drywall services in Vancouver. Specializing in office build-outs, retail spaces, industrial facilities, and healthcare construction."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="commercial drywall vancouver, office build-outs, retail drywall, industrial drywall, healthcare drywall installation"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://drywallvan.ca/commercial-drywall"
        />
        <meta
          property="og:title"
          content="Commercial Drywall Services Vancouver | WallMasters Drywall"
        />
        <meta
          property="og:description"
          content="Professional commercial drywall services in Vancouver. Expert solutions for businesses of all sizes."
        />
        <meta
          property="og:image"
          content="https://drywallvan.ca/photos/homepage/2.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Commercial Drywall Services Vancouver | WallMasters Drywall"
        />
        <meta
          name="twitter:description"
          content="Professional commercial drywall services in Vancouver for offices, retail, industrial, and healthcare facilities."
        />
        <meta
          name="twitter:image"
          content="https://drywallvan.ca/photos/homepage/2.jpg"
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
                Commercial Drywall Solutions in Vancouver
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Professional drywall services tailored for commercial
                properties. From office build-outs to industrial facilities, we
                deliver quality results on time and within budget.
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
                  src="/photos/homepage/Commercial.png"
                  alt="Commercial drywall services in Vancouver"
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

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vancouver&apos;s trusted commercial drywall contractor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Project Scale",
                description:
                  "Capable of handling projects of any size, from small offices to large commercial complexes",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description:
                  "Strict adherence to project timelines with efficient project management",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Rigorous quality control processes and premium materials",
              },
              {
                icon: Users,
                title: "Expert Teams",
                description:
                  "Licensed professionals with extensive commercial experience",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-gray-900 mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Commercial Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive drywall solutions for all commercial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Request a Quote
            </h2>
            <p className="text-lg text-gray-600">
              2-hour response • Vancouver-wide service
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
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
                      <p className="text-sm text-gray-600">
                        Business solutions
                      </p>
                    </div>
                  </div>
                </button>
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

              {customerType === "commercial" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Facility Type *
                    </label>
                    <select
                      name="facilityType"
                      value={facilityType}
                      onChange={(e) => {
                        setFacilityType(e.target.value);
                        handleInputChange(e);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      required
                    >
                      <option value="">Select facility type</option>
                      {facilityTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Project Size (sq ft) *
                    </label>
                    <input
                      type="number"
                      name="projectSize"
                      value={projectSize}
                      onChange={(e) => {
                        setProjectSize(e.target.value);
                        handleInputChange(e);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      placeholder="Enter approximate square footage"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Urgency *
                    </label>
                    <select
                      name="urgency"
                      value={urgency}
                      onChange={(e) => {
                        setUrgency(e.target.value);
                        handleInputChange(e);
                      }}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      required
                    >
                      <option value="">Select urgency level</option>
                      <option value="emergency">
                        Emergency (Need immediate attention)
                      </option>
                      <option value="urgent">Urgent (Within 24 hours)</option>
                      <option value="standard">Standard (Within a week)</option>
                      <option value="planned">
                        Planned Project (Flexible timing)
                      </option>
                    </select>
                  </div>
                </>
              )}
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
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Please describe your drywall repair or installation needs..."
                ></textarea>
              </div>
              {showSuccess ? (
                <SuccessScreen
                  email={formData.email}
                  setShowSuccess={setShowSuccess}
                />
              ) : (
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  Submit Quote Request
                </button>
              )}
              <p className="text-sm text-gray-600 text-center">
                2-hour response • Expert service • Vancouver certified
              </p>
            </form>
          </div>
        </div>
        <Contact />
      </section>

      <Footer />
    </div>
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
      <h3 className="text-2xl font-medium text-gray-900">Message received</h3>

      <div className="space-y-2 text-center">
        <p className="text-gray-600">We&apos;ll get back to you shortly</p>
        <p className="text-gray-500 text-sm">
          Response will be sent to your email
        </p>
      </div>

      <button
        onClick={() => {
          setShowSuccess(false);
        }}
        className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-[#ffc527] hover:text-black"
      >
        Done
      </button>
    </div>
  );
};

export default CommercialDrywallPage;
