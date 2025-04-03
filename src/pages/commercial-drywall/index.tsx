import React from "react";
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
} from "lucide-react";
import Image from "next/image";
import type { NextPage } from "next";
import SimpleContactForm from "@/components/SimpleContactForm";

const CommercialDrywallPage: NextPage = () => {
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
                  src="/photos/homepage/2.jpg"
                  alt="Commercial drywall services in Vancouver"
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
        <div className="max-w-xl mx-auto">
          <SimpleContactForm
            formTitle="Get a Free Commercial Drywall Quote"
            serviceName="Commercial Drywall"
            apiEndpoint="/api/drywall_email"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialDrywallPage;
