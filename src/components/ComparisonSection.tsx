import React from "react";
import Head from "next/head";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  orientation: "left" | "right";
  url: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ComparisonSection = () => {
  const services: Service[] = [
    {
      title: "DRYWALL REPAIR",
      description:
        "From small holes and cracks to extensive water damage, WallMasters Drywall provides expert repair services that seamlessly match your existing wall texture.",
      buttonText: "DRYWALL REPAIR",
      image: "/photos/homepage/Repair.png",
      orientation: "right",
      url: "/drywall-repair",
    },
    {
      title: "NEW DRYWALL INSTALLATION",
      description:
        "Whether you're building a new space or renovating an existing one, WallMasters delivers professional drywall installation with meticulous attention to detail.",
      buttonText: "DRYWALL INSTALLATION",
      image: "/photos/homepage/NewDrywall.png",
      orientation: "left",
      url: "/drywall-installation",
    },
    {
      title: "TEXTURE MATCHING",
      description:
        "Our skilled technicians are experts at matching existing wall textures, ensuring seamless repairs that blend perfectly with your walls.",
      buttonText: "TEXTURE SERVICES",
      image: "/photos/homepage/BeforeAfter.png",
      orientation: "right",
      url: "/texture-matching",
    },
    {
      title: "COMMERCIAL DRYWALL",
      description:
        "WallMasters provides specialized drywall solutions for commercial properties, including offices, retail spaces, restaurants, and industrial facilities.",
      buttonText: "COMMERCIAL SERVICES",
      image: "/photos/homepage/Commercial.png",
      orientation: "left",
      url: "/commercial-drywall",
    },
  ];

  // Create JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "WallMasters Drywall",
    url: "https://drywallvan.ca",
    logo: "https://drywallvan.ca/logo.png",
    image: services.map((service) => `https://drywallvan.ca${service.image}`),
    description:
      "Professional drywall repair and installation services in Vancouver offering residential and commercial solutions with expert craftsmanship.",
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
    telephone: "+17789074485",
    email: "info@drywallvan.ca",
    priceRange: "$$",
    areaServed: "Vancouver Metropolitan Area",
    services: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `https://drywallvan.ca${service.url}`,
    })),
  };

  const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
    <article
      className={`flex flex-col md:flex-row items-center w-full gap-4 py-4 ${
        service.orientation === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 relative group overflow-hidden">
        <a href={service.url} className="block cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
            <div className="relative w-full h-[200px] md:h-[300px]">
              <Image
                src={service.image}
                alt={`${service.title} - Professional drywall services in Vancouver`}
                className="transition-transform duration-700 group-hover:scale-110"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
                quality={85}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 group-hover:to-black/60 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold mb-1">{service.title}</h3>
              <p className="text-sm opacity-90">
                Learn more about our professional {service.title.toLowerCase()}{" "}
                services in Vancouver
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-2xl font-bold mb-2 tracking-wide">
          {service.title}
        </h2>
        <p className="text-base text-gray-700 mb-4 leading-relaxed">
          {service.description}
        </p>
        <a
          href={service.url}
          className="group inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition-all duration-300 text-sm"
          aria-label={`Learn more about our ${service.title.toLowerCase()} services`}
        >
          {service.buttonText}
          <svg
            className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );

  return (
    <>
      <Head>
        <title>
          Professional Drywall Services in Vancouver | WallMasters Drywall
        </title>
        <meta
          name="description"
          content="Vancouver's trusted drywall service offering expert repairs, new installations, texture matching, and commercial solutions. Fast, reliable, and professional service."
        />
        <meta
          name="keywords"
          content="drywall repair vancouver, drywall installation, drywall contractors, wall repair, texture matching, commercial drywall, residential drywall"
        />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Professional Drywall Services in Vancouver | WallMasters Drywall"
        />
        <meta
          property="og:description"
          content="Vancouver's trusted drywall service offering expert repairs, new installations, texture matching, and commercial solutions. Fast, reliable, and professional service."
        />
        <meta
          property="og:image"
          content="https://drywallvan.ca/photos/homepage/DrywallRepair.jpg"
        />
        <meta property="og:url" content="https://drywallvan.ca" />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Professional Drywall Services in Vancouver | WallMasters Drywall"
        />
        <meta
          name="twitter:description"
          content="Vancouver's trusted drywall service offering expert repairs, new installations, texture matching, and commercial solutions."
        />
        <meta
          name="twitter:image"
          content="https://drywallvan.ca/photos/homepage/DrywallRepair.jpg"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://drywallvan.ca" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        {/* Service Card Section */}
        <section
          className="w-full bg-white py-8 px-4"
          aria-label="Our Drywall Services"
        >
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">OUR SERVICES</h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                With years of experience in the industry, WallMasters Drywall
                delivers superior craftsmanship for all your drywall needs in
                Vancouver.
              </p>
            </header>

            <div className="space-y-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ComparisonSection;
