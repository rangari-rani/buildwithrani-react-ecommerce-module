import { useMemo } from "react";
import { products, type Product } from "../../../../data/products";

import {
  useCategoryFilter,
  usePriceFilter,
  useHighlightFilter,
  useDiscountFilter,
} from "./filters";

type HighlightFilter = "all" | "isNew" | "isBestSeller" | "isTrending";

interface UseProductFiltersParams {
  categorySlug?: string;
  typeSlug?: string;
  subSlug?: string;
  priceRange: [number, number];
  highlightFilter: HighlightFilter;
  discountFilters: { min: number; max: number }[];
  productsListOverride?: Product[];
}

export function useProductFilters({
  categorySlug,
  typeSlug,
  subSlug,
  priceRange,
  highlightFilter,
  discountFilters,
  productsListOverride,
}: UseProductFiltersParams) {
  
  return useMemo(() => {
    // Start with either product override (SearchPage) or global products
    let filtered: Product[] = [...(productsListOverride || products)];

    // 1️⃣ CATEGORY filter
    filtered = useCategoryFilter(filtered, {
      categorySlug,
      typeSlug,
      subSlug,
    });

    // 2️⃣ PRICE filter
    filtered = usePriceFilter(filtered, priceRange);

    // 3️⃣ HIGHLIGHT filter
    filtered = useHighlightFilter(filtered, highlightFilter);

    // 4️⃣ DISCOUNT filter
    filtered = useDiscountFilter(filtered, discountFilters);

    return filtered;
  }, [
    categorySlug,
    typeSlug,
    subSlug,
    priceRange,
    highlightFilter,
    discountFilters,
    productsListOverride,
  ]);
}
