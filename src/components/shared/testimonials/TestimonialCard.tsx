// src/components/shared/testimonials/TestimonialCard.tsx
import React from "react";
import type { Testimonial } from "./testimonialData";

interface Props {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<Props> = ({ testimonial }) => {
  const { name, description, rating } = testimonial;

  const initials = name.charAt(0);

  return (
    <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center shadow-sm">
      {/* Initial Circle */}
      <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-semibold mb-4">
        {initials}
      </div>

      <h3 className="font-semibold mb-2">{name}</h3>

      <p className="text-gray-600 mb-2">{description}</p>

      {/* Stars */}
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
