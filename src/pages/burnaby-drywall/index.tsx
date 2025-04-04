import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
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
} from "lucide-react";
import Contact from "@/components/Contact";
import Image from "next/image";
import { Lead } from "@/utils/createLead";
import Footer from "@/components/Footer";

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

const BurnabyDrywallLandingPage = () => {
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
          customerType === "commercial"
            ? "Commercial Form"
            : "Form Drywall Burnaby",
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
      // Replace this with your actual API endpoint
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

    const yourhome = document.querySelector("#contactform");
    if (yourhome) {
      yourhome.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  // SEO-friendly data:
  const pageTitle =
    "Burnaby's Premier Drywall Experts | Fast & Reliable Repairs";
  const pageDescription =
    "Looking for top drywall repair and installation services in Burnaby? Our certified team guarantees 2-hour response times and exceptional workmanship.";

  // Structured data for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WallMasters Drywall Burnaby",
    image: "https://drywallvan.ca/photos/homepage/1.jpg",
    url: "https://drywallvan.ca/burnaby-drywall",
    telephone: "+17789074485",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Burnaby",
      addressRegion: "BC",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "49.2488",
      longitude: "-122.9805",
    },
    areaServed: {
      "@type": "City",
      name: "Burnaby",
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
    name: "Burnaby Drywall Services",
    provider: {
      "@type": "LocalBusiness",
      name: "WallMasters Drywall Burnaby",
    },
    serviceType: "Drywall Repair and Installation",
    areaServed: "Burnaby, BC",
    description:
      "Professional drywall repair and installation services in Burnaby. Specializing in residential and commercial projects with 2-hour response times.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
  };

  const serviceFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Burnaby Experts",
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
      description: "Licensed and insured in Burnaby",
    },
  ];

  const serviceTypes = [
    {
      title: "Wall Repair",
      points: [
        "Water damage restoration",
        "Hole patching",
        "Crack repair",
        "Surface finishing",
      ],
    },
    {
      title: "Commercial Services",
      points: [
        "Office renovations",
        "Retail space repairs",
        "Industrial solutions",
        "Multi-unit projects",
      ],
    },
    {
      title: "Expert Finishing",
      points: [
        "Texture matching",
        "Paint blending",
        "Seamless repairs",
        "Premium materials",
      ],
    },
    {
      title: "Additional Services",
      points: [
        "Ceiling repairs",
        "Corner bead installation",
        "Sound insulation",
        "Complete remodels",
      ],
    },
  ];

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

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head Section */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="burnaby drywall, drywall repair burnaby, drywall installation, commercial drywall, burnaby renovations"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:url"
          content="https://drywallvan.ca/burnaby-drywall"
        />
        <meta
          property="og:image"
          content="https://drywallvan.ca/photos/homepage/1.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content="https://drywallvan.ca/photos/homepage/1.jpg"
        />

        <link rel="canonical" href="https://drywallvan.ca/burnaby-drywall" />

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

      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Burnaby&apos;s Premier Drywall Experts
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                Expert drywall repair.
                <span className="block text-gray-900">Flawless results.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Burnaby&apos;s trusted drywall repair specialists for homes and
                businesses. From small patches to complete renovations.
              </p>

              <button
                onClick={handleEmergencyCall}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency Drywall Repair: 778-907-4485</span>
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-[400px] md:h-[500px] w-full">
                <Image
                  src="/photos/homepage/1.jpg"
                  alt="Burnaby Drywall Repair Expert Services"
                  fill
                  className="rounded-lg shadow-2xl object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-white inline-block rounded-lg shadow-sm mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Professional Drywall Services in Burnaby
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Complete drywall solutions for residential and commercial
              properties in Burnaby.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section
        id="contactform"
        className="py-16 bg-white overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        {showSuccess ? (
          <SuccessScreen
            email={formData.email}
            setShowSuccess={setShowSuccess}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Get Your Free Burnaby Drywall Quote
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and our team will provide you with a
                  competitive quote for your drywall project in Burnaby.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                  <ul className="space-y-3">
                    {[
                      "Free detailed quotes with no obligation",
                      "Expert technicians with 20+ years of experience",
                      "Premium materials and superior finishes",
                      "Licensed, insured, and guaranteed work",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-4">
                      I&apos;m requesting a quote for:
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        className={`p-4 rounded-lg border ${
                          customerType === "residential"
                            ? "bg-black text-white border-black"
                            : "border-gray-200 hover:border-gray-400"
                        } flex items-center justify-center gap-2 transition-colors`}
                        onClick={() => setCustomerType("residential")}
                      >
                        <Home className="w-5 h-5" />
                        <span>Residential</span>
                      </button>
                      <button
                        type="button"
                        className={`p-4 rounded-lg border ${
                          customerType === "commercial"
                            ? "bg-black text-white border-black"
                            : "border-gray-200 hover:border-gray-400"
                        } flex items-center justify-center gap-2 transition-colors`}
                        onClick={() => setCustomerType("commercial")}
                      >
                        <Building2 className="w-5 h-5" />
                        <span>Commercial</span>
                      </button>
                    </div>
                  </div>

                  {customerType === "commercial" && (
                    <div className="mb-6">
                      <label
                        htmlFor="facilityType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Facility Type
                      </label>
                      <select
                        id="facilityType"
                        value={facilityType}
                        onChange={(e) => setFacilityType(e.target.value)}
                        className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                        required={customerType === "commercial"}
                      >
                        <option value="">Select Facility Type</option>
                        {facilityTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="projectDetails"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={4}
                      className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label
                        htmlFor="projectSize"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Project Size
                      </label>
                      <select
                        id="projectSize"
                        value={projectSize}
                        onChange={(e) => setProjectSize(e.target.value)}
                        className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                      >
                        <option value="">Select Project Size</option>
                        <option value="Small">Small (Under 100 sq ft)</option>
                        <option value="Medium">Medium (100-500 sq ft)</option>
                        <option value="Large">Large (500-1000 sq ft)</option>
                        <option value="Very Large">
                          Very Large (1000+ sq ft)
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="urgency"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Urgency
                      </label>
                      <select
                        id="urgency"
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="block w-full p-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
                      >
                        <option value="">Select Urgency</option>
                        <option value="Emergency">
                          Emergency (Need it now)
                        </option>
                        <option value="Urgent">Urgent (Within 48 hours)</option>
                        <option value="Standard">
                          Standard (Within 1 week)
                        </option>
                        <option value="Flexible">
                          Flexible (Within 2-4 weeks)
                        </option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
                  >
                    <span>Request Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
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
  setShowSuccess: (val: boolean) => void;
}) => {
  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="bg-white p-8 rounded-xl shadow-xl">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Quote Request Received!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for contacting WallMasters Drywall. We&apos;ve received your
          request and will get back to you shortly with a detailed quote for
          your Burnaby project.
        </p>
        <p className="text-gray-600 mb-8">
          A confirmation has been sent to <strong>{email}</strong>
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="inline-block py-3 px-6 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default BurnabyDrywallLandingPage;
