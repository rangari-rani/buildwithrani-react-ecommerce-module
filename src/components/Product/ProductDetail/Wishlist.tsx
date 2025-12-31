import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../../data/products";
import { FiHeart } from "react-icons/fi";
import { useWishlist } from "./hooks/useWishlist";


const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  const wishlistedProducts = products.filter((p) =>
    wishlist.includes(p.id)
  );

  return (
    <div className="max-w-300 mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      {wishlistedProducts.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <FiHeart
            size={42}
            className="mx-auto mb-4 text-red-300 animate-pulse"
          />
          <p className="mb-3 text-lg">Your wishlist is empty</p>
          <Link
            to="/all-products"
            className="inline-flex items-center gap-1 text-green-600 hover:underline"
          >
            Start exploring products →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlistedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="wishlist"
              onToggleWishlist={() => toggleWishlist(product.id)}
              showCategory
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
