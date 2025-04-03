import React, { useState, useEffect, ReactNode, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Create a simple Card component instead of importing to avoid circular references
interface TestimonialCardProps {
  children: ReactNode;
  className?: string;
}

const TestimonialCard = ({ children, className }: TestimonialCardProps) => {
  return <div className={`${className || ""}`}>{children}</div>;
};

const Testimonials = () => {
  const drywallReviews = [
    {
      name: "Good people and fair price",
      role: "Vancouver Homeowner",
      text: "Good people and fair price. They patched several holes in our drywall and did an excellent job matching the texture. You can't even tell there was damage there. Highly recommend!",
      hasImage: false,
    },
    {
      name: "Best drywall repair Vancouver service",
      role: "Commercial Property Owner",
      text: "Best drywall repair Vancouver service I had in a while. The team was professional, showed up on time, and completed the office repairs with minimal disruption to our business. Quality work!",
      hasImage: false,
    },
    {
      name: "Best price for drywall repair",
      role: "Residential Customer",
      text: "Best price I got for drywall repair Vancouver. I got quotes from several companies and WallMasters offered the best value without compromising on quality. The finished walls look perfect!",
      hasImage: false,
    },
    {
      name: "Michael Thompson",
      role: "Verified Customer",
      text: "I needed drywall installation for a home renovation project. The team at WallMasters was excellent from start to finish - clean, efficient, and the results exceeded my expectations.",
      hasImage: false,
    },
    {
      name: "Sarah Williams",
      role: "Verified Customer",
      text: "After water damage in our basement, WallMasters repaired all the damaged drywall and matched the texture perfectly. They were quick to respond and very professional throughout the process.",
      hasImage: false,
    },
    {
      name: "David Chen",
      role: "Verified Customer",
      text: "WallMasters did an amazing job installing new drywall in our home renovation. They were meticulous with details and finished on schedule. Would definitely use their services again!",
      hasImage: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviewsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= drywallReviews.length - (reviewsToShow.desktop - 1)
        ? 0
        : nextIndex;
    });
  }, [drywallReviews.length, reviewsToShow.desktop]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? drywallReviews.length - reviewsToShow.desktop
        : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, handleNext]);

  // Schema markup is now a simple object (not rendered in component)
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WallMasters Drywall Repair and New Installs - Vancouver",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "13",
      bestRating: "5",
      worstRating: "1",
    },
    review: drywallReviews.map((review) => ({
      "@type": "Review",
      datePublished: new Date().toISOString().split("T")[0],
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.text,
    })),
  };

  return (
    <section className="py-16 px-5 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/texture/noise.png')] opacity-8" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Customer Reviews
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-16 bg-yellow-400" />
            <p className="text-lg text-gray-600">What Our Clients Say</p>
            <div className="h-px w-16 bg-yellow-400" />
          </div>
          <div className="flex justify-center items-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-xl font-semibold">5.0</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / reviewsToShow.desktop)
                }%)`,
                transition: "transform 2s ease-in-out",
              }}
            >
              {drywallReviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="w-full min-w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333%] px-4"
                >
                  <TestimonialCard className="bg-white p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-100">
                    <div className="flex flex-col h-full">
                      {/* Star Rating */}
                      <div className="mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400 inline-block mr-1"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <blockquote className="flex-grow mb-6">
                        <p className="text-gray-600 leading-relaxed">
                          &ldquo;{review.text}&rdquo;
                        </p>
                      </blockquote>

                      {/* Reviewer Info */}
                      <div className="flex items-center">
                        {review.hasImage ? (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src="/photos/reviews/placeholder.jpg"
                              alt={review.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                            <span className="text-xl font-semibold text-gray-500">
                              {review.name[0]}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-sm text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </TestimonialCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Google Review Link */}
        <div className="text-center mt-12">
          <a
            href="https://g.co/kgs/rUphS6g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
          >
            See all reviews on Google
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.78 16.546l-3.843-3.843 1.086-1.086 2.757 2.757 5.914-5.914 1.086 1.086-7 7z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
