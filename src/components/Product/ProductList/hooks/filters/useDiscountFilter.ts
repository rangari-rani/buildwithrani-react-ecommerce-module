import type { Product } from "../../../../../data/products";

interface DiscountRange {
  min: number;
  max: number;
}

export function useDiscountFilter(
  products: Product[],
  discountFilters: DiscountRange[]
) {
  if (discountFilters.length === 0) return products;

  return products.filter(p => {
    const d = p.discount ?? 0;
    return discountFilters.some(b => d >= b.min && d < b.max);
  });
}
