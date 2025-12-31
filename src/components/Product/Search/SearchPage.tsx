import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";


import SortBar from "../ProductList/SortBar";
import Pagination from "../ProductList/Pagination";
import ProductCard from "../ProductCard/ProductCard";


import { useProductFilters } from "../ProductList/hooks/useProductFilters";
import { products } from "../../../data/products";
import { TbSearchOff } from "react-icons/tb";
import FiltersSidebar from "../ProductList/FiltersSidebar/FiltersSidebar";

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get("q")?.toLowerCase() || "";

  // Filters state
  const [sortOption, setSortOption] = useState("");
const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);

  type HighlightFilter = "all" | "isNew" | "isBestSeller" | "isTrending";
  const [highlightFilter, setHighlightFilter] =
    useState<HighlightFilter>("all");

  const [discountFilters, setDiscountFilters] = useState<any[]>([]);

  // Search filter
  const searchedProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.subcategory?.toLowerCase().includes(q)
  );

  // Discount bucket options
  const discountBuckets = [
    { label: "0% – 10%", min: 0, max: 10 },
    { label: "10% – 20%", min: 10, max: 20 },
    { label: "20% – 30%", min: 20, max: 30 },
    { label: "30% – 50%", min: 30, max: 50 },
    { label: "50% or more", min: 50, max: 999 },
  ];

  // Custom filtering hook
  const filteredProducts = useProductFilters({
    productsListOverride: searchedProducts,
    priceRange,
    highlightFilter,
    discountFilters,
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 9;

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginated = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  // Reset page when filters change
  useEffect(
    () => setCurrentPage(1),
    [q, sortOption, discountFilters, priceRange]
  );

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="hidden md:block md:w-1/4 bg-white p-4 h-fit rounded-lg">
        <FiltersSidebar
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          highlightFilter={highlightFilter}
          setHighlightFilter={setHighlightFilter}
          discountFilters={discountFilters}
          setDiscountFilters={setDiscountFilters}
          discountBuckets={discountBuckets}
        />
      </aside>

      {/* Main content */}
      <main className="w-full md:w-3/4">
        <SortBar title={`Search Results for "${q}"`} setSortOption={setSortOption} />
        
     {/* Product Grid OR Empty State */}
{paginated.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
      <TbSearchOff className="w-12 h-12 text-gray-400 mb-4" />
    <h3 className="text-lg font-semibold mb-2">No products found</h3>
    <p className="text-sm">Try searching with different keywords.</p>
  </div>
) : (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {paginated.map((p) => (
      <ProductCard key={p.id} product={p}  />
    ))}
  </div>
)}

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
}
