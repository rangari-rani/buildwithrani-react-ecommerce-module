import type { Product } from "../../../../data/products";

export function useRelatedProducts(
  product: Product | undefined,
  allProducts: Product[]
) {
  if (!product) return [];

  return allProducts.filter(
    (p) =>
      p.category === product.category &&
      p.slug !== product.slug
  );
}
