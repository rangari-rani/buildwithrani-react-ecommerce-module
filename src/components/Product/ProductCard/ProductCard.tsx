import clsx from "clsx";
import { Link } from "react-router-dom";

import ProductBadges from "./ProductBadges";
import ProductImage from "./ProductImage";
import ProductRating from "./ProductRating";
import ProductActions from "./ProductActions";
import { categoryThemes, DEFAULT_THEME } from "./data/categoryThemes";
import { formatPrice } from "./utils/formatPrice";
import type { Product } from "../../../data/products";

type Props = {
  product: Product;
  showCategory?: boolean;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: () => void;
  variant?: "default" | "wishlist";
};

export default function ProductCard({
  product,
  showCategory = true,
 
  onToggleWishlist,
  variant = "default",
}: Props) {
  const theme =
    categoryThemes[product.category] || DEFAULT_THEME;

  return (
    <div className="w-full relative transition-transform duration-300 hover:scale-[1.03]">

    {/* ❌ Remove from wishlist (always on top of card) */}
  {variant === "wishlist" && (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onToggleWishlist?.();
      }}
      className="
        absolute top-8 right-1
        z-40
        rounded-full 
        w-8 h-8 
        flex items-center justify-center
        text-red-500 font-bold 
        shadow-md
       
      "
      aria-label="Remove from wishlist"
    >
      ✕
    </button>
  )}

      <div
        className={clsx(
          "rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
          theme.border,
          theme.glow
        )}
      >
        {/* Image → product page */}
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative">
            <ProductBadges
              isTrending={product.isTrending}
              isBestSeller={product.isBestSeller}
              isNew={product.isNew}
              discount={product.discount}
            />

            <ProductImage
              image={product.image}
              name={product.name}
              gradient={theme.gradient}
            />
          </div>
        </Link>

        <div
          className={clsx(
            "p-4 flex flex-col gap-2 rounded-b-2xl",
            theme.tint
          )}
        >
          {showCategory && product.category && (
            <p
              className={clsx(
                "text-xs uppercase font-medium tracking-wide",
                theme.label
              )}
            >
              {product.category}
            </p>
          )}

          {/* Title → product page */}
          <Link to={`/product/${product.slug}`}>
            <h3 className="text-[15px] font-semibold text-gray-800 truncate hover:underline">
              {product.name}
            </h3>
          </Link>

          <div className="flex justify-between items-center mt-1">
            <span className="text-green-700 font-bold text-base">
              {formatPrice(product.price)}
            </span>

            <ProductActions
              product={product}
      
              variant={variant}
            />
          </div>

          <ProductRating rating={product.rating} />
        </div>
      </div>
    </div>
  );
}
