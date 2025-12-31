import React from "react";

const HeroSkeleton: React.FC = () => {
  return (
    <section className="py-8">
      <div className="mt-14 max-w-[1400px] mx-auto px-6 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between py-4 md:py-12 bg-linear-to-r from-green-100 via-green-200 to-green-300">

        {/* Left Text Section Skeleton */}
        <div className="md:w-1/2 w-full text-center md:text-left mb-10 md:mb-0 text-gray-800">
          {/* Small badge */}
          <div className="inline-block h-6 w-32 bg-green-200 rounded-full animate-pulse mb-4" />

          {/* Headline Skeleton */}
          <div className="space-y-3 mb-4">
            <div className="h-8 w-3/4 bg-green-300 rounded-md animate-pulse mx-auto md:mx-0" />
            <div className="h-8 w-2/3 bg-green-300 rounded-md animate-pulse mx-auto md:mx-0" />
          </div>

          {/* Subtext Skeleton */}
          <div className="h-4 w-4/5 bg-green-200 rounded-md animate-pulse mx-auto md:mx-0 mb-6" />

          {/* Button Skeleton */}
          <div className="h-10 w-32 bg-green-400 rounded-md animate-pulse mx-auto md:mx-0" />

          {/* Badges area */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <div className="h-10 w-20 rounded-md bg-green-200 animate-pulse" />
            <div className="h-10 w-20 rounded-md bg-green-200 animate-pulse" />
            <div className="h-10 w-20 rounded-md bg-green-200 animate-pulse" />
          </div>
        </div>

        {/* Right slider skeleton */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-[600px]">
            <div className="h-[300px] sm:h-[350px] md:h-[400px] w-full bg-green-300 rounded-xl animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSkeleton;
