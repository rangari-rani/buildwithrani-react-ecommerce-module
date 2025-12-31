import { useProductDetail } from "./hooks/useProductDetail";
import { useRelatedProducts } from "./hooks/useRelatedProducts";
import { products } from "../../../data/products";

import Breadcrumbs from "./Breadcrumbs";
import ProductGallery from "./ProductGallery";
import ProductActions from "./ProductActions";
import ProductInfo from "./ProductInfo";
import RelatedProducts from "./RelatedProducts";
import ProductInfoSkeleton from "./ProductInfoSkeleton";
import { useEffect, useState } from "react";
import ProductGallerySkeleton from "./ProductGallerySkeleton";
import RelatedProductsSkeleton from "./RelatedProductsSkeleton";

export default function ProductDetail() {
  const { product } = useProductDetail();
  const relatedProducts = useRelatedProducts(product, products);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  if (!product) {
    return <div className="p-8 text-center text-gray-500">Product not found.</div>;
  }

  return (
    <div className="max-w-300 mx-auto px-4 p-6">
      <Breadcrumbs product={product} />

      <div className="flex flex-col md:flex-row gap-8">
        {isLoading ? <ProductGallerySkeleton /> : <ProductGallery product={product} />}

        <div className="flex-1">
          <div className="bg-white shadow-sm p-8 grid gap-8 auto-rows-min min-h-105 rounded-lg">
            {isLoading ? (
              <ProductInfoSkeleton />
            ) : (
              <ProductInfo product={product} />
            )}

            <ProductActions productId={product.id} productSlug={product.slug}/>

          </div>
        </div>

      </div>

      {isLoading ? <RelatedProductsSkeleton /> : <RelatedProducts products={relatedProducts} />}
    </div>
  );
}
