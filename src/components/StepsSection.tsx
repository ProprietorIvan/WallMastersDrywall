import React from "react";
import Head from "next/head";
import Image from "next/image";

const StepsSection = () => {
  const metrics = [
    {
      value: "1300+",
      label: "HAPPY CLIENTS",
    },
    {
      value: "800+",
      label: "PROJECTS COMPLETED",
    },
    {
      value: "5.0",
      label: "AVERAGE RATING",
    },
    {
      value: "24/7",
      label: "AVAILABILITY",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      description:
        "We start with a detailed assessment of your drywall needs, providing expert advice and a clear project scope. Our consultation includes accurate measurements and identification of any specific challenges.",
      icon: "/icons/consultation.svg",
    },
    {
      id: 2,
      title: "Same-Day Quote",
      description:
        "After assessment, we provide a detailed, transparent quote with no hidden fees. For standard repairs, we often deliver quotes within the same day to expedite your project.",
      icon: "/icons/quote.svg",
    },
    {
      id: 3,
      title: "Professional Installation",
      description:
        "Our skilled technicians arrive on time with all necessary materials and equipment. We use premium drywall materials and follow industry-best practices to ensure superior results.",
      icon: "/icons/installation.svg",
    },
    {
      id: 4,
      title: "Expert Finishing",
      description:
        "Our meticulous finishing process includes precise taping, multiple coats of mud, expert sanding, and texture matching that seamlessly blends with your existing walls.",
      icon: "/icons/finishing.svg",
    },
    {
      id: 5,
      title: "Quality Inspection",
      description:
        "Before completion, we conduct a thorough quality check to ensure all work meets our high standards. We won't consider the job done until you're completely satisfied.",
      icon: "/icons/inspection.svg",
    },
    {
      id: 6,
      title: "Quick Cleanup",
      description:
        "We take pride in leaving your space cleaner than we found it. Our thorough cleanup process removes all dust and debris, leaving your space ready to enjoy immediately.",
      icon: "/icons/cleanup.svg",
    },
  ];

  // Structured data for the success metrics
  const metricsStructuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "WallMasters Drywall",
    description:
      "Professional drywall repair and installation services in Vancouver with over 1300 happy clients and 800+ completed projects.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
      bestRating: "5",
      worstRating: "1",
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
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <Head>
        <title>Our Process | WallMasters Drywall Vancouver</title>
        <meta
          name="description"
          content="Discover our efficient 6-step drywall process. Vancouver's top-rated drywall repair and installation specialists."
        />
        <meta
          name="keywords"
          content="drywall process vancouver, drywall installation steps, drywall repair vancouver, drywall contractors"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Our Process | WallMasters Drywall Vancouver"
        />
        <meta
          property="og:description"
          content="Discover our efficient 6-step drywall process. Vancouver's top-rated drywall specialists."
        />
        <meta
          property="og:image"
          content="https://drywallvan.ca/photos/homepage/DrywallRepair.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(metricsStructuredData),
          }}
        />
      </Head>

      <main className="w-full">
        <section className="w-full bg-black py-20" aria-label="Success Metrics">
          <div className="max-w-6xl mx-auto px-4">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-2">
                OUR SUCCESS RATE
              </h2>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-yellow-500"></div>
                <p className="text-white mx-4">Track Record of Excellence</p>
                <div className="h-px w-12 bg-yellow-500"></div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <article key={index} className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-white mb-2">
                      {metric.value}
                    </div>
                    <div className="h-px w-12 bg-yellow-500 mb-4"></div>
                    <div className="text-sm text-white tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-5 bg-gray-50" aria-label="Our Process">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-2">OUR PROCESS</h2>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-yellow-500"></div>
                <p className="mx-4">Efficient & Professional Service</p>
                <div className="h-px w-12 bg-yellow-500"></div>
              </div>
              <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                At WallMasters Drywall, we follow a streamlined 6-step process
                to ensure efficient, high-quality results for every drywall
                project. Our systematic approach delivers consistent excellence
                from initial consultation to final cleanup.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step) => (
                <article
                  key={step.id}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 ml-16">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StepsSection;
