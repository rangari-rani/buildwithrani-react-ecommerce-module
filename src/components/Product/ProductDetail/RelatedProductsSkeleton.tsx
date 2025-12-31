import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";

export default function RelatedProductsSkeleton() {
  return (
    <div className="mt-12 animate-pulse">
      {/* Title */}
      <div className="h-6 w-48 bg-gray-200 rounded mb-4" />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
