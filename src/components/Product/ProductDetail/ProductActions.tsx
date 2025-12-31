import { useNavigate } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "./hooks/useWishlist";
import { useCart } from "../../Checkout/Cart/hooks/useCart";


type Props = {
  productId: number;
  productSlug: string;
};

export default function ProductActions({
  productId,
  productSlug,
}: Props) {
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart } = useCart();

  const handleWishlist = () => {
    toggleWishlist(productId);
  };

  const handleAddToCart = () => {
    addToCart(productSlug);
    navigate("");
  };

  return (
    <div className="mt-4 flex flex-col md:flex-row gap-2 w-full max-w-105">
      <button
        onClick={handleAddToCart}
        type="button"
        className="flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 shadow-md hover:bg-green-700 transition w-full"
      >
        <FiShoppingCart size={20} />
        Add to Cart
      </button>

      <button
        type="button"
        className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-6 py-3 hover:bg-gray-100 transition w-full"
        onClick={handleWishlist}
      >
        {isWishlisted(productId) ? (
          <FaHeart size={20} className="text-red-500" />
        ) : (
          <FiHeart size={20} />
        )}
        Wishlist
      </button>
    </div>
  );
}
