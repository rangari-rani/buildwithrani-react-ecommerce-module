import React from "react";

const TopCategorySkeleton: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-6 bg-white shadow-sm rounded-xl py-6 mb-6">
      
      {/* Section Heading Skeleton */}
      <div className="text-center mb-8">
        <div className="h-6 w-40 bg-gray-300 rounded-md mx-auto animate-pulse" />
        <div className="h-4 w-64 bg-gray-200 rounded-md mx-auto mt-3 animate-pulse" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg p-4 bg-gray-100 animate-pulse"
            style={{ aspectRatio: "1 / 1" }}
          >
            {/* Title */}
            <div className="h-4 w-2/3 bg-gray-300 rounded mb-2" />

            {/* Description */}
            <div className="h-3 w-full bg-gray-200 rounded mb-1" />
            <div className="h-3 w-3/4 bg-gray-200 rounded mb-3" />

            {/* Image area */}
            <div className="h-[60%] w-full bg-gray-300 rounded-lg mt-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategorySkeleton;
