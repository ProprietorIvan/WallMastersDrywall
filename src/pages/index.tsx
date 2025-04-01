import React from 'react';
import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import FeaturesSection from '@/components/Features';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';
import Testemonials from '@/components/Testemonials';
import { Star } from 'lucide-react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const router = useRouter();

  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "A-Z Handyman",
    "image": "https://az-handyman.ca/photos/homepage/2.jpg",
    "url": "https://az-handyman.ca",
    "@id": "https://az-handyman.ca/#organization",
    "description": "Most trusted home services and handyman company in Vancouver offering professional home repairs, renovations, and maintenance services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.2827",
      "longitude": "-123.1207"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": "Vancouver Metropolitan Area",
    "priceRange": "$$",
    "openingHours": "Mo-Su 08:00-20:00",
    "telephone": "+17786534862",
    "sameAs": [
      "https://www.facebook.com/azhandyman",
      "https://www.instagram.com/azhandyman"
    ]
  };

  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "A-Z Handyman Vancouver",
    "image": "https://az-handyman.ca/photos/homepage/2.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "telephone": "+17786534862",
    "url": "https://az-handyman.ca"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a typical repair take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Small repairs can be completed in 2-4 hours. Larger projects typically take 1-2 days."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide free, no-obligation estimates for all repair and maintenance projects in Vancouver."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <>
          <title>A-Z Handyman Vancouver | Professional Home Repair & Maintenance Services</title>
          <meta 
            name="description" 
            content="Vancouver's most trusted handyman service. Professional home repairs, renovations, and maintenance with 1000+ satisfied customers. Get your quote today!"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://az-handyman.ca" />
          <meta property="og:title" content="A-Z Handyman Vancouver | Professional Home Services" />
          <meta property="og:description" content="Vancouver's most trusted handyman service. Professional home repairs, renovations, and maintenance with 1000+ satisfied customers." />
          <meta property="og:image" content="https://az-handyman.ca/photos/homepage/2.jpg" />
          <meta property="og:site_name" content="A-Z Handyman" />
          <meta property="og:locale" content="en_CA" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://az-handyman.ca" />
          <meta name="twitter:title" content="A-Z Handyman Vancouver | Professional Home Services" />
          <meta name="twitter:description" content="Vancouver's trusted handyman service. Expert home repairs and maintenance." />
          <meta name="twitter:image" content="https://az-handyman.ca/photos/homepage/2.jpg" />
          
          {/* Additional meta tags */}
          <meta name="keywords" content="handyman vancouver, home repair vancouver, renovation services, home maintenance, professional handyman, vancouver contractor" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="A-Z Handyman" />
          <meta name="geo.region" content="CA-BC" />
          <meta name="geo.placename" content="Vancouver" />
          
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </>
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation showActions={false} />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/photos/homepage/2.jpg"
              alt="Professional Handyman Services in Vancouver"
              fill
              className="object-cover object-[85%_25%]"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                Home Repairs Made Effortless
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Most trusted home services company in Vancouver
              </p>
              <button
                onClick={() => window.open('/services', '_current')}
                className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium mb-8 hover:bg-yellow-400 transition-colors duration-300">
                Get Free Estimate
              </button>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white text-lg">1000+ Satisfied Customers</span>
              </div>
            </div>
          </div>
        </section>

        <main>
          <ComparisonSection />
          <StepsSection />
          <Testemonials />
          <FAQ />

          {/* CTA Section */}
          <section className="bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Home?
              </h2>
              <p className="text-gray-300 mb-12 text-xl max-w-3xl mx-auto">
                Join thousands of satisfied Vancouver homeowners who trust us with their home repairs
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => router.push('/quote')}
                  className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-yellow-400 transition-colors duration-300">
                  Request Free Quote
                </button>
                <button
                  onClick={() => router.push('/services')}
                  className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300">
                  View All Services
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;