import React from "react";
import GymCardSkeleton from "./GymCardSkeleton";

interface Props {
  items?: number; // default skeleton count
}

const CarouselSkeleton: React.FC<Props> = ({ items = 6 }) => {
  return (
    <div className="overflow-hidden">
      <div className="flex gap-4 px-2">

        {Array.from({ length: items }).map((_, i) => (
          <div
            key={i}
            className="flex-none w-40 sm:w-48"  // matches GymCard width
          >
            <GymCardSkeleton />
          </div>
        ))}

      </div>
    </div>
  );
};

export default CarouselSkeleton;
