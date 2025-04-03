import React from "react";
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
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import SimpleContactForm from "@/components/SimpleContactForm";

const DrywallPage: NextPage = () => {
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Expert Drywall Services for Every Need
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                  From new installations and repairs to texture matching and
                  commercial projects, our skilled professionals deliver
                  exceptional results on time and on budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleEmergencyCall}
                    className="flex items-center justify-center px-6 py-3 font-semibold bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </button>
                  <a
                    href="#get-quote"
                    className="flex items-center justify-center px-6 py-3 font-semibold bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition"
                  >
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/photos/homepage/1.jpg"
                    alt="Professional drywall installation by WallMasters Drywall"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Services Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Drywall Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive drywall solutions for residential and commercial
                properties
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`flex flex-col ${
                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center gap-8 md:gap-12`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-medium text-yellow-500 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <Check className="w-5 h-5 text-green-500" />
                          </div>
                          <span className="ml-2.5 text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <a
                        href={`/${
                          service.id === "installation"
                            ? "drywall-installation"
                            : service.id === "texture"
                            ? "texture-matching"
                            : "commercial-drywall"
                        }`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="get-quote" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request a Free Quote
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below, and we&apos;ll get back to you with a
                free, no-obligation quote
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <SimpleContactForm
                formTitle="Get Your Free Drywall Quote"
                serviceName="Drywall Services"
                apiEndpoint="/api/drywall_email"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose WallMasters
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Vancouver&apos;s most trusted drywall repair specialists
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Experienced Professionals
                </h3>
                <p className="text-gray-300">
                  Our team has years of experience delivering exceptional
                  drywall services to Vancouver residents and businesses.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Quality Materials
                </h3>
                <p className="text-gray-300">
                  We use only premium materials that ensure longevity and
                  durability for all our drywall installations and repairs.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-300">
                  We prioritize your satisfaction and won&apos;t consider a job
                  complete until you&apos;re 100% happy with our work.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Competitive Pricing
                </h3>
                <p className="text-gray-300">
                  We offer fair, transparent pricing with detailed quotes so you
                  know exactly what to expect with no surprises.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Clean Work Environment
                </h3>
                <p className="text-gray-300">
                  We take care to minimize dust and debris, and thoroughly clean
                  up after completing each project.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Timely Project Completion
                </h3>
                <p className="text-gray-300">
                  We respect your time and work efficiently to complete projects
                  on schedule without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DrywallPage;
