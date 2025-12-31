import React from "react";

const GymCardSkeleton: React.FC = () => {
  return (
    <div className="block cursor-pointer">
      <div className="flex flex-col items-center text-center">

        {/* Circular glow wrapper */}
        <div className="relative rounded-full p-1 bg-linear-to-r from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center animate-pulse">
          
          {/* Inner image placeholder */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gray-300" />
        </div>

        {/* Name placeholder */}
        <div className="mt-2 h-4 w-20 sm:w-24 bg-gray-300 rounded-md animate-pulse" />
      </div>
    </div>
  );
};

export default GymCardSkeleton;
