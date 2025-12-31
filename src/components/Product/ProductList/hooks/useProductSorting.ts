import { useMemo } from "react";
import type { Product } from "../../../../data/products";

export function useProductSorting(products: Product[], sortOption: string) {
  return useMemo(() => {
    let sorted = [...products];

    switch (sortOption) {
      case "low-to-high":
        sorted.sort((a, b) => a.price - b.price);
        break;

      case "high-to-low":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "az":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case "rating":
        sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;

      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
    }

    return sorted;
  }, [products, sortOption]);
}
