import type { Product } from "../../../../../data/products";

type HighlightFilter = "all" | "isNew" | "isBestSeller" | "isTrending";

export function useHighlightFilter(
  products: Product[],
  highlightFilter: HighlightFilter
) {
  if (highlightFilter === "all") return products;

  return products.filter(p => p[highlightFilter]);
}
