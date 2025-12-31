import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import type { Product } from "../../../data/products";
import { useCart } from "../../Checkout/Cart/hooks/useCart";
import { useWishlist } from "../ProductDetail/hooks/useWishlist";


type Props = {
  product: Product;
  variant?: "default" | "wishlist";
};

export default function ProductActions({
  product,
  variant = "default",
}: Props) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart } = useCart();

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.slug);
  };

  return (
    <div className="flex items-center gap-3">
      {variant === "default" && (
        <button
          type="button"
          onClick={handleToggle}
          className={`p-1 transition-all duration-200 hover:scale-110 ${
            isWishlisted(product.id)
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
          aria-label="Toggle wishlist"
        >
          {isWishlisted(product.id) ? (
            <FaHeart size={18} />
          ) : (
            <FiHeart size={18} />
          )}
        </button>
      )}

      <button
        type="button"
        onClick={handleAddToCart}
        className="text-green-600 hover:text-green-800 transition-transform duration-200 hover:scale-125"
        aria-label="Add to cart"
      >
        <FiShoppingCart size={22} />
      </button>
    </div>
  );
}
