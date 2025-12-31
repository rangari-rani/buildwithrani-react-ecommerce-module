import React from "react";
import { TESTIMONIALS } from "./testimonialData";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 bg-white shadow-sm rounded-xl py-6 mb-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <p className="text-base text-gray-700">Real Stories. Real Results.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
