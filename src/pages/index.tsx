import React, { useState } from "react";
import ComparisonSection from "@/components/ComparisonSection";
import FAQ from "@/components/FAQ";
import Navigation from "@/components/Navigation";
import StepsSection from "@/components/StepsSection";
import Testemonials from "@/components/Testemonials";
import {
  Star,
  Phone,
  ArrowRight,
  Ruler,
  Clock,
  CheckCircle2,
  Shield,
  Building2,
  Home as HomeIcon,
  Check,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import Contact from "@/components/Contact";
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

const Home: NextPage = () => {
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

  const handleEmergencyCall = () => {
    window.location.href = "tel:+17789074485"; // WallMasters Drywall phone number
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

  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "WallMasters Drywall",
    image: "https://drywallvan.ca/photos/homepage/2.jpg",
    url: "https://drywallvan.ca",
    "@id": "https://drywallvan.ca/#organization",
    description:
      "Vancouver's premier drywall repair and installation specialists offering professional services for homes and businesses throughout Greater Vancouver.",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "1000",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: "Vancouver Metropolitan Area",
    priceRange: "$$",
    openingHours: "Mo-Su 08:00-20:00",
    telephone: "+17789074485",
    sameAs: [
      "https://www.facebook.com/wallmastersdrywall",
      "https://www.instagram.com/wallmastersdrywall",
    ],
  };

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WallMasters Drywall Vancouver",
    image: "https://drywallvan.ca/photos/homepage/2.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    telephone: "+17789074485",
    url: "https://drywallvan.ca",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you respond to drywall repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We guarantee a 2-hour response time for emergency drywall services across Vancouver. Our team is available 24/7 to handle urgent repairs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide free estimates for drywall projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free, no-obligation estimates for all drywall repair and installation projects in Vancouver.",
        },
      },
    ],
  };

  const serviceFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Vancouver Experts",
      description: "Your local drywall repair specialists",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Premium Solutions",
      description: "Industry-leading materials and techniques",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description: "2-hour response time guaranteed",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Results",
      description: "Licensed and insured in Vancouver",
    },
  ];

  return (
    <>
      <Head>
        <>
          <title>
            WallMasters Drywall Vancouver | Expert Drywall Repair & Installation
          </title>
          <meta
            name="description"
            content="Vancouver's premier drywall repair and installation specialists. Professional, reliable service for homes and businesses. Free quotes and fast response times."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://drywallvan.ca" />
          <meta
            property="og:title"
            content="WallMasters Drywall Vancouver | Expert Repair & Installation"
          />
          <meta
            property="og:description"
            content="Vancouver's premier drywall repair and installation specialists. From small patches to complete renovations for residential and commercial properties."
          />
          <meta
            property="og:image"
            content="https://drywallvan.ca/photos/homepage/2.jpg"
          />
          <meta property="og:site_name" content="WallMasters Drywall" />
          <meta property="og:locale" content="en_CA" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://drywallvan.ca" />
          <meta
            name="twitter:title"
            content="WallMasters Drywall Vancouver | Expert Repair & Installation"
          />
          <meta
            name="twitter:description"
            content="Vancouver's premier drywall specialists. Expert repairs and installations."
          />
          <meta
            name="twitter:image"
            content="https://drywallvan.ca/photos/homepage/2.jpg"
          />

          {/* Additional meta tags */}
          <meta
            name="keywords"
            content="drywall repair vancouver, drywall installation, drywall contractors, wall repair, ceiling repair, vancouver drywall, commercial drywall, residential drywall"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="WallMasters Drywall" />
          <meta name="geo.region" content="CA-BC" />
          <meta name="geo.placename" content="Vancouver" />

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(businessStructuredData),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessStructuredData),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
        </>
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation showActions={false} />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/photos/homepage/2.jpg"
              alt="Professional Drywall Services in Vancouver"
              fill
              className="object-cover object-[85%_25%]"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Expert Drywall Repair & Installation
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Vancouver&apos;s most trusted drywall specialists
              </p>
              <button
                onClick={() => {
                  const contactForm = document.querySelector("#contactform");
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium mb-8 hover:bg-yellow-400 transition-colors duration-300"
              >
                Get Free Estimate
              </button>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white text-lg">
                  1000+ Satisfied Customers
                </span>
              </div>
            </div>
          </div>
        </section>

        <main>
          {/* Features Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">
                  Premium Drywall Services
                </h2>
                <p className="text-lg text-gray-600">
                  Vancouver&apos;s most trusted repair specialists
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {serviceFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-gray-900 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ComparisonSection />
          <StepsSection />
          <Testemonials />

          {/* Form Section */}
          <section className="py-20 bg-white" id="contactform">
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
                          <option value="urgent">
                            Urgent (Within 24 hours)
                          </option>
                          <option value="standard">
                            Standard (Within a week)
                          </option>
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
          </section>

          <FAQ />

          <Contact />
        </main>
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

export default Home;
