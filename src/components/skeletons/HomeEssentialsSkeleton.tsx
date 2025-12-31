import React from "react";

const HomeEssentialsSkeleton: React.FC = () => {
  return (
    <section className="relative max-w-[1400px] mx-auto px-6 bg-white shadow-sm rounded-xl py-8 mb-10">
      {/* Header Skeleton */}
      <div className="text-center mb-8">
        <div className="h-6 w-40 bg-gray-300 rounded-md mx-auto animate-pulse" />
        <div className="h-4 w-96 max-w-full bg-gray-200 rounded-md mx-auto mt-3 animate-pulse" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col group">
            {/* Image Grid */}
            <div
              className={`grid grid-cols-3 gap-2 h-[300px] rounded-xl p-2 bg-gray-100`}
            >
              {/* Big Image placeholder (col-span-2 row-span-3) */}
              <div className="col-span-2 row-span-3 overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg" />
              </div>

              {/* Three small image placeholders */}
              <div className="overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg" />
              </div>
            </div>

            {/* Text Row Skeleton */}
            <div className="mt-3 flex items-center justify-center text-sm text-gray-700">
              <div className="h-5 w-28 bg-gray-300 rounded-md mr-2 animate-pulse" />
              <div className="h-4 w-40 bg-gray-200 rounded-md animate-pulse overflow-hidden" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeEssentialsSkeleton;
