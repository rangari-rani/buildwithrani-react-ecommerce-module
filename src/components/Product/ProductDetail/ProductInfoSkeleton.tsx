export default function ProductInfoSkeleton() {
  return (
    <div className="flex flex-col rounded-lg gap-6 bg-white p-2 animate-pulse">

      {/* Category */}
      <div className="h-3 w-24 bg-gray-200 rounded" />

      {/* Title */}
      <div className="h-7 w-3/4 bg-gray-200 rounded" />

      {/* Price + stock section */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-2">
          <div className="h-6 w-32 bg-gray-200 rounded" />
          <div className="h-3 w-20 bg-gray-200 rounded" />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-36 bg-gray-200 rounded" />
          <div className="h-4 w-28 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Rating */}
      <div className="h-4 w-32 bg-gray-200 rounded" />

      <div className="h-px bg-gray-200" />

      {/* Offers */}
      <div className="h-24 w-full bg-gray-200 rounded" />

      {/* Description */}
      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />
        <div className="h-3 w-4/6 bg-gray-200 rounded" />
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-3 bg-gray-200 rounded" />
        ))}
      </div>
    </div>
  );
}
