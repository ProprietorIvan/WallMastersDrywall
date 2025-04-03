import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { NextPage } from "next";

const DrywallInstallationPage: NextPage = () => {
  const installationServices = [
    {
      title: "New Construction",
      description: "Complete drywall installation for new builds and additions",
      features: [
        "Full room and house installations",
        "Custom designs and layouts",
        "Fire-rated assemblies",
        "Sound-proof solutions",
      ],
    },
    {
      title: "Renovation Projects",
      description:
        "Expert installation services for home renovations and remodels",
      features: [
        "Removal of old drywall",
        "Structural modifications",
        "Insulation upgrades",
        "Seamless integration",
      ],
    },
    {
      title: "Basement Finishing",
      description: "Specialized drywall installation for basement developments",
      features: [
        "Moisture-resistant materials",
        "Proper vapor barriers",
        "Insulation solutions",
        "Building code compliance",
      ],
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored drywall installations for unique spaces and requirements",
      features: [
        "Curved walls and arches",
        "Ceiling details",
        "Custom textures",
        "Specialty installations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>
          Professional Drywall Installation Vancouver | WallMasters Drywall
        </title>
        <meta
          name="description"
          content="Expert drywall installation services in Vancouver. New construction, renovations, and custom solutions with premium materials and professional installation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://drywallvan.ca/drywall-installation"
        />
        <meta
          property="og:title"
          content="Professional Drywall Installation Vancouver | WallMasters Drywall"
        />
        <meta
          property="og:description"
          content="Expert drywall installation services in Vancouver. New construction, renovations, and custom solutions with premium materials."
        />
        <meta
          property="og:image"
          content="https://drywallvan.ca/photos/homepage/1.jpg"
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional Drywall Installation in Vancouver
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your space with expert drywall installation services.
                From new construction to renovations, we deliver superior
                results with premium materials and skilled craftsmanship.
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
                  src="/photos/homepage/1.jpg"
                  alt="Professional drywall installation in Vancouver"
                  fill
                  className="object-cover"
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
            <h2 className="text-4xl font-bold mb-4">Installation Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive drywall installation solutions for any project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {installationServices.map((service, index) => (
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
              Our Installation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure perfect results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description:
                  "Detailed project assessment and material selection",
              },
              {
                step: "2",
                title: "Preparation",
                description: "Site protection and material staging",
              },
              {
                step: "3",
                title: "Installation",
                description: "Professional mounting and securing of drywall",
              },
              {
                step: "4",
                title: "Finishing",
                description: "Expert taping, mudding, and texturing",
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
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default DrywallInstallationPage;
