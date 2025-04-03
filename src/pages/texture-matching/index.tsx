import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { NextPage } from "next";

const TextureMatchingPage: NextPage = () => {
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
          content="https://drywallvan.ca/photos/homepage/BeforeAfter.jpg"
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
                  src="/photos/homepage/BeforeAfter.jpg"
                  alt="Perfect texture matching in Vancouver"
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
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default TextureMatchingPage;
