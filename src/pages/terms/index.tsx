import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import type { NextPage } from "next";

const TermsAndConditions: NextPage = () => {
  const sections = [
    {
      title: "Service Agreement",
      content: `When engaging our drywall services, you acknowledge and agree to the following terms:
        • Service requests must be clearly defined in writing
        • Pricing is determined based on scope of work, material requirements, and labor
        • We reserve the right to adjust estimates if project scope changes
        • Emergency service rates apply outside regular business hours
        • Minimum service charges may apply for small repairs
        • Cancellations require 48-hour notice to avoid charges`,
    },
    {
      title: "Warranties & Guarantees",
      content: `Our commitment to quality drywall services includes:
        • 1-year warranty on workmanship for drywall installation and repairs
        • Manufacturer warranties on all drywall materials
        • Satisfaction guarantee on completed work
        • Professional-grade materials and equipment
        • Licensed and insured drywall specialists
        • Compliance with local building codes and regulations`,
    },
    {
      title: "Payment Terms",
      content: `Our payment policies include:
        • 25% deposit required for projects over $1,000
        • Payment is due upon service completion for smaller jobs
        • We accept major credit cards, e-transfers, and digital payments
        • 2% interest charges per month on overdue accounts
        • Special financing available for major commercial projects
        • Transparent pricing with no hidden fees`,
    },
    {
      title: "Scheduling & Access",
      content: `To ensure efficient drywall service delivery:
        • Provide clear access to work areas
        • Secure permits when required for major renovations
        • Allow reasonable time for project completion based on scope
        • Furniture should be removed or centered in rooms when possible
        • Respect agreed-upon scheduling windows
        • Notify us promptly of any scheduling conflicts`,
    },
    {
      title: "Property Protection",
      content: `We take extensive measures to protect your property:
        • Comprehensive insurance coverage
        • Protective coverings for floors, furniture, and fixtures
        • Dust containment systems for larger drywall projects
        • Thorough cleanup after service completion
        • Documentation of pre-existing conditions
        • Immediate reporting of any incidents`,
    },
    {
      title: "Material Selection",
      content: `Our drywall material policies include:
        • We use only high-quality, industry-standard drywall materials
        • Special order materials may require additional lead time
        • Custom texture matching available for existing surfaces
        • Eco-friendly and low-VOC options available upon request
        • Material substitutions may be necessary based on availability
        • Samples provided for custom finishes and textures`,
    },
  ];

  return (
    <>
      <Head>
        <title>Terms & Conditions | WallMasters Drywall Vancouver</title>
        <meta
          name="description"
          content="Our comprehensive terms and conditions outline our drywall service agreements, warranties, and commitments to our customers. Read about our professional standards and service policies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drywallvan.ca/terms" />
        <meta
          property="og:title"
          content="Terms & Conditions | WallMasters Drywall Vancouver"
        />
        <meta
          property="og:description"
          content="Our comprehensive terms and conditions outline our service agreements, warranties, and commitments."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 pb-20 pt-24">
          {/* Header Section */}
          <div className="text-center pt-12 mb-16">
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="h-px w-16 bg-yellow-400" />
              <p className="text-lg text-gray-600">Service Agreement</p>
              <div className="h-px w-16 bg-yellow-400" />
            </div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
              The following terms and conditions govern all drywall services
              provided by WallMasters Drywall. By engaging our services, you
              agree to these terms.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-1 bg-yellow-400 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                </div>
                <div className="pl-5">
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Professional Standards Notice */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Professional Standards
              </h2>
              <p className="text-gray-600 mb-4">
                WallMasters Drywall maintains the highest professional standards
                in the industry. We are:
              </p>
              <ul className="list-none space-y-3 text-gray-600">
                <li>• Fully licensed and insured drywall specialists</li>
                <li>• WorkSafeBC compliant</li>
                <li>• Committed to ongoing professional development</li>
                <li>• Adherent to all local building codes and regulations</li>
                <li>• Dedicated to exceptional customer service</li>
                <li>• Experts in texture matching and seamless repairs</li>
              </ul>
            </div>

            {/* Contact Box */}
            <div className="bg-black text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Questions About Our Terms?
              </h2>
              <p className="mb-6">
                Our team is here to help clarify any aspects of our terms and
                conditions.
              </p>
              <div className="space-y-2">
                <p>WallMasters Drywall</p>
                <p>575 Drake St, Vancouver, BC V6B 4K8</p>
                <div className="flex justify-center gap-8 mt-4">
                  <a
                    href="mailto:info@drywallvan.ca"
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    info@drywallvan.ca
                  </a>
                  <a
                    href="tel:+17789074485"
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    +1 778-907-4485
                  </a>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <p className="text-sm text-gray-500 text-center mt-16">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
