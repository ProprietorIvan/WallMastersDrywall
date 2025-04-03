import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { NextPage } from "next";

const DrywallRepairPage: NextPage = () => {
  const repairServices = [
    {
      title: "Hole Repair",
      description:
        "Expert patching of holes from small nail holes to large drywall damage",
      features: [
        "Seamless patch integration",
        "Texture matching guarantee",
        "Same-day service for small repairs",
        "Clean and dust-free process",
      ],
    },
    {
      title: "Water Damage Repair",
      description:
        "Complete restoration of water-damaged drywall and prevention of future issues",
      features: [
        "Moisture testing included",
        "Mold prevention treatment",
        "Full or partial wall replacement",
        "Waterproofing solutions",
      ],
    },
    {
      title: "Crack Repair",
      description:
        "Professional fixing of drywall cracks and prevention of reoccurrence",
      features: [
        "Structural assessment",
        "Long-lasting repairs",
        "Corner bead replacement",
        "Joint tape reinforcement",
      ],
    },
    {
      title: "Ceiling Repair",
      description:
        "Specialized ceiling repairs for water damage, cracks, and holes",
      features: [
        "Safe height work practices",
        "Popcorn texture matching",
        "Smooth finish options",
        "Lighting fixture accommodation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>
          Professional Drywall Repair Services Vancouver | WallMasters Drywall
        </title>
        <meta
          name="description"
          content="Expert drywall repair services in Vancouver. From small holes to major damage, we provide seamless repairs with guaranteed texture matching. Free quotes available."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://drywallvan.ca/drywall-repair"
        />
        <meta
          property="og:title"
          content="Professional Drywall Repair Services Vancouver | WallMasters Drywall"
        />
        <meta
          property="og:description"
          content="Expert drywall repair services in Vancouver. From small holes to major damage, we provide seamless repairs with guaranteed texture matching."
        />
        <meta
          property="og:image"
          content="https://drywallvan.ca/photos/homepage/DrywallRepair.jpg"
        />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Expert Drywall Repair Services in Vancouver
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                From small holes to major damage, our professional team delivers
                flawless repairs with guaranteed texture matching. Fast,
                reliable, and clean service.
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
                  src="/photos/homepage/DrywallRepair.jpg"
                  alt="Professional drywall repair in Vancouver"
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
            <h2 className="text-4xl font-bold mb-4">Our Repair Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive drywall repair solutions delivered by experienced
              professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {repairServices.map((service, index) => (
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

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose WallMasters</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vancouver&apos;s most trusted drywall repair specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Technicians",
                description:
                  "Licensed and experienced professionals with proven track record",
              },
              {
                title: "Same-Day Service",
                description:
                  "Quick response for emergency repairs and small fixes",
              },
              {
                title: "Quality Materials",
                description: "Premium materials and professional-grade tools",
              },
              {
                title: "Clean Process",
                description: "Dust containment systems and thorough cleanup",
              },
              {
                title: "Guaranteed Work",
                description: "Satisfaction guarantee on all repair services",
              },
              {
                title: "Fair Pricing",
                description: "Transparent quotes with no hidden fees",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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

export default DrywallRepairPage;
