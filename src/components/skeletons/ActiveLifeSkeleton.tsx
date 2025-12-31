import React from "react";
import GymCardSkeleton from "./GymCardSkeleton";

const ActiveLifeSkeleton: React.FC = () => {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 bg-white shadow-sm rounded-xl py-8 mb-10">

      {/* Header Skeleton */}
      <div className="text-center mb-8">
        <div className="h-6 w-48 bg-gray-300 rounded-md mx-auto animate-pulse" />
        <div className="h-4 w-64 bg-gray-200 rounded-md mx-auto mt-3 animate-pulse" />
      </div>

      {/* Carousel Skeleton + Buttons */}
      <div className="relative">
        
        {/* Left Arrow Button */}
        <div
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 
                     w-12 h-12 rounded-full bg-gray-200 shadow-md 
                     border border-gray-300 animate-pulse"
        />

        {/* Horizontal scrolling skeleton list */}
        <div className="overflow-hidden">
          <div className="flex gap-4 px-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex-none w-40 sm:w-48">
                <GymCardSkeleton />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <div
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 
                     w-12 h-12 rounded-full bg-gray-200 shadow-md 
                     border border-gray-300 animate-pulse"
        />
      </div>
    </section>
  );
};

export default ActiveLifeSkeleton;
