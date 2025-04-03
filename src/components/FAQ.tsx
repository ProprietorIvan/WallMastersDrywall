import React from "react";
import { ArrowRight } from "lucide-react";
import Head from "next/head";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqData: FAQItem[] = [
    {
      question: "How quickly can you respond to drywall repair requests?",
      answer:
        "We pride ourselves on our rapid response times. For emergency drywall repairs, we typically respond within 2 hours. For standard repairs and installations, we schedule appointments within 24-48 hours. We also offer 24/7 emergency services for water damage and other urgent drywall issues throughout Vancouver.",
    },
    {
      question: "What types of drywall services do you provide?",
      answer:
        "We offer a comprehensive range of drywall services including new drywall installation, drywall repair, patch work, texture matching, ceiling repair, soundproofing installation, moisture-resistant drywall for bathrooms, fire-resistant drywall, and commercial drywall services. Whatever your drywall needs, our experienced team can handle it with precision and expertise.",
    },
    {
      question: "Are your drywall technicians licensed and insured?",
      answer:
        "Yes, all our drywall technicians are fully licensed, bonded, and insured. We are WorkSafeBC compliant and carry comprehensive liability insurance. Our team undergoes regular training to stay current with the latest drywall installation techniques, materials, and safety protocols.",
    },
    {
      question:
        "How do you ensure a clean work environment during drywall projects?",
      answer:
        "We understand that drywall work can create dust, so we take extensive precautions to maintain a clean environment. We use professional dust barriers, HEPA vacuums, and thorough cleaning procedures. Our team lays down protective coverings for your floors and furniture, and we conduct a comprehensive cleanup after project completion, ensuring your space is left spotless.",
    },
    {
      question: "What is your pricing structure for drywall services?",
      answer:
        "We provide transparent, competitive pricing based on the scope of work. For standard repairs, we charge by the square foot with a minimum service call fee. For larger installations, we provide detailed written estimates after assessing your specific needs. We're committed to offering fair pricing with no hidden fees, and we can work with various budgets without compromising quality.",
    },
  ];

  // FAQ Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item: FAQItem) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <section
        className="py-16 px-5 bg-white"
        id="faq"
        aria-label="Frequently Asked Questions"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Header Section */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-yellow-400" />
                <p className="text-lg text-gray-600">
                  About Our Drywall Services
                </p>
              </div>
              <p className="text-lg text-gray-600 max-w-xl">
                Get instant answers to common questions about our drywall repair
                and installation services in Vancouver. Can&apos;t find what
                you&apos;re looking for? Contact us directly for more
                information.
              </p>
            </div>

            {/* FAQ List Section */}
            <div className="w-full md:w-1/2">
              <div className="grid divide-y divide-gray-200">
                {faqData.map((faq: FAQItem, index: number) => (
                  <div className="py-5" key={index}>
                    <details className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <span className="text-lg font-semibold">
                          {faq.question}
                        </span>
                        <span className="transition-transform duration-300 group-open:rotate-90">
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </summary>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
