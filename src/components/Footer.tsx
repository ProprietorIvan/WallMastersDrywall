import React from "react";
import Head from "next/head";
import Link from "next/link";

const Footer = () => {
  // Structured data for the organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WallMasters Drywall",
    url: "https://drywallvan.ca",
    logo: "https://drywallvan.ca/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "575 Drake St",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      postalCode: "V6B 4K8",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+17789074485",
      contactType: "customer service",
      email: "info@drywallvan.ca",
      availableLanguage: ["English"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
      </Head>

      <div className="relative mt-16">
        <footer
          className="bg-black text-white py-12 px-6"
          aria-label="Site Footer"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* We are here to help Section */}
            <section aria-label="About Us">
              <h2 className="text-lg font-semibold mb-4">
                Expert Drywall Solutions
              </h2>
              <div
                className="h-1 w-12 bg-orange-600 mb-4"
                aria-hidden="true"
              ></div>
              <p className="text-gray-300">
                From small repairs to complete installations, WallMasters
                Drywall provides professional drywall services throughout
                Vancouver. We pride ourselves on quality craftsmanship,
                attention to detail, and customer satisfaction.
              </p>
            </section>

            {/* Opening Hours Section */}
            <section aria-label="Opening Hours">
              <h2 className="text-lg font-semibold mb-4">
                OPENING <span className="text-yellow-500">HOURS</span>
              </h2>
              <div
                className="h-1 w-12 bg-orange-600 mb-4"
                aria-hidden="true"
              ></div>
              <p className="text-gray-300">
                Open 24 hours a day, 7 days a week!
              </p>
            </section>

            {/* Contact Here Section */}
            <section aria-label="Contact Information">
              <h2 className="text-lg font-semibold mb-4">
                CONTACT <span className="text-yellow-500">HERE</span>
              </h2>
              <div
                className="h-1 w-12 bg-orange-600 mb-4"
                aria-hidden="true"
              ></div>
              <address className="text-gray-300 space-y-2 not-italic">
                <p>Address: 575 Drake St, Vancouver, BC V6B 4K8</p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+17789074485"
                    className="hover:text-white transition-colors"
                  >
                    (778) 907-4485
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@drywallvan.ca"
                    className="hover:text-white transition-colors"
                  >
                    info@drywallvan.ca
                  </a>
                </p>
              </address>
            </section>
          </div>

          {/* Bottom Bar */}
          <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col items-center text-gray-400 text-sm space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <p>
                  © {new Date().getFullYear()} WallMasters Drywall. ALL RIGHTS
                  RESERVED
                </p>
                <div className="flex space-x-8 mt-4 md:mt-0">
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    PRIVACY POLICY
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    TERMS & CONDITIONS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
