import type { Product } from "../../../data/products";
import ProductCard from "../ProductCard/ProductCard"

type Props = {
  products: Product[];
};

export default function RelatedProducts({ products }: Props) {
  if (products.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((rp) => (
          <ProductCard key={rp.id} product={rp} showCategory />
        ))}
      </div>
    </div>
  );
}

