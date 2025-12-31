export default function ProductCardSkeleton() {
  return (
    <div className="w-full animate-pulse">
      <div className="rounded-2xl overflow-hidden border border-gray-500 bg-white shadow-sm">
        {/* Image skeleton */}
        <div className="h-48 bg-gray-200" />

        <div className="p-4 flex flex-col gap-3">
          {/* Category */}
          <div className="h-3 w-20 bg-gray-200 rounded" />

          {/* Title */}
          <div className="h-4 w-3/4 bg-gray-200 rounded" />

          {/* Price + action */}
          <div className="flex justify-between items-center mt-1">
            <div className="h-4 w-16 bg-gray-200 rounded" />
            <div className="h-8 w-8 bg-gray-200 rounded-full" />
          </div>

          {/* Rating */}
          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
