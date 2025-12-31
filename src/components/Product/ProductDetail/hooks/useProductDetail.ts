import { useParams } from "react-router-dom";
import { products } from "../../../../data/products";

export function useProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  const product = products.find((p) => p.slug === slug);

  return { product };
}
