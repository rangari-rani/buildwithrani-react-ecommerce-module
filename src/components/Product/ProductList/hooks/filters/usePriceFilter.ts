import type { Product } from "../../../../../data/products";

export function usePriceFilter(
  products: Product[],
  priceRange: [number, number]
) {
  return products.filter(
    p => p.price >= priceRange[0] && p.price <= priceRange[1]
  );
}
