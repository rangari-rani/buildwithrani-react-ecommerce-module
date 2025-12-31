import React, { useRef } from "react";
import type Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getActiveLifeProducts } from "./getActiveLifeProducts";
import GymCarousel from "../carousels/GymCarousel";

const ActiveLifeCollection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const products = getActiveLifeProducts();

  return (
    <section className="relative max-w-[1400px] mx-auto px-6 bg-white shadow-sm rounded-xl py-8 mb-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Active Life Collection</h2>
        <p className="text-base text-gray-700 mt-2">
          Gear up with the best fitness equipment to elevate your workout experience.
        </p>
      </div>

      {/* Carousel With Controls */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 
                     bg-white rounded-full shadow-md border border-gray-200 
                     w-12 h-12 flex items-center justify-center 
                     hover:bg-gray-100 transition"
          aria-label="Previous"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Carousel */}
        <GymCarousel
          sliderRef={sliderRef}
          products={products}
          slidesToShow={6}
        />

        {/* Right Button */}
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 
                     bg-white rounded-full shadow-md border border-gray-200 
                     w-12 h-12 flex items-center justify-center 
                     hover:bg-gray-100 transition"
          aria-label="Next"
        >
          <FiChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default ActiveLifeCollection;
