import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { useProductFilters } from "./hooks/useProductFilters";
import { useProductSorting } from "./hooks/useProductSorting";

import FiltersSidebar from "./FiltersSidebar/FiltersSidebar";
import SortBar from "./SortBar";
import Pagination from "./Pagination";
import ProductCard from "../ProductCard/ProductCard";

import { products } from "../../../data/products";
import { useBreadcrumbs } from "./hooks/useBreadcrumbs";
import Breadcrumbs from "./Breadcrumbs";
import ProductCardSkeleton from "../ProductCard/ProductCardSkeleton";

const discountBuckets = [
  { label: "0% – 10%", min: 0, max: 10 },
  { label: "10% – 20%", min: 10, max: 20 },
  { label: "20% – 30%", min: 20, max: 30 },
  { label: "30% – 50%", min: 30, max: 50 },
  { label: "50% or more", min: 50, max: 999 },
];

export default function ProductList() {
  const { categorySlug, typeSlug, subSlug } = useParams();
  const [sortOption, setSortOption] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [currentPage, setCurrentPage] = useState(1);
  type HighlightFilter = "all" | "isNew" | "isBestSeller" | "isTrending";
  const [highlightFilter, setHighlightFilter] =
    useState<HighlightFilter>("all");
  const [discountFilters, setDiscountFilters] = useState<any[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // FILTERING 
  const filteredProducts = useProductFilters({
    categorySlug,
    typeSlug,
    subSlug,
    priceRange,
    highlightFilter,
    discountFilters,
  });

  // SORTING (sorting happens AFTER filtering)
  const sortedProducts = useProductSorting(filteredProducts, sortOption);

  // Reset page on filter/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [sortOption, priceRange, highlightFilter, discountFilters]);

  // PAGINATION (should use sortedProducts, not filteredProducts)
  const productsPerPage = 9;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [sortedProducts]);


  const breadcrumbs = useBreadcrumbs({
    categorySlug,
    typeSlug,
    subSlug,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate API
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  console.log("TOTAL PRODUCTS:", products.length);
  console.log("AFTER FILTERING:", filteredProducts.length);
  console.log("AFTER SORTING:", sortedProducts.length);
  console.log("PAGES:", totalPages);

  return (
    <div className="w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 flex flex-col md:flex-row gap-6">

      {/* Desktop Sidebar */}
      <aside className="hidden md:block md:w-1/4 rounded-lg p-4 h-fit bg-white mt-14">
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

      {/* Mobile Sidebar Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 md:hidden">
          <div className="absolute left-0 top-0 h-full w-[85%] bg-white p-4 overflow-y-auto">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="mb-4 text-sm font-semibold text-gray-700"
            >
              ✕
            </button>

            <FiltersSidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              highlightFilter={highlightFilter}
              setHighlightFilter={setHighlightFilter}
              discountFilters={discountFilters}
              setDiscountFilters={setDiscountFilters}
              discountBuckets={discountBuckets}
            />
          </div>
        </div>
      )}

      <main className="w-full md:w-3/4 order-1 md:order-2">
        <Breadcrumbs items={breadcrumbs} />
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm text-sm font-medium"
          >
            ☰ Filters
          </button>
        </div>

        {/* Sort Bar */}
        <SortBar title="All Products" setSortOption={setSortOption} />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
            : paginatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>

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
