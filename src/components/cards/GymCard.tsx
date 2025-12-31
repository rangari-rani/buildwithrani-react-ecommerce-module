import React from "react";
import type { Product } from "../../data/products";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

const GymCard: React.FC<Props> = ({ product }) => {
  return (
    <Link  to={`/product/${product.slug}`} className="block cursor-pointer">
      <div className="flex flex-col items-center text-center">
        {/* Circular Gradient Glow */}
        <div className="relative rounded-full p-1 bg-linear-to-r from-pink-400 via-purple-500 to-blue-400 flex items-center justify-center">
          
          {/* Inner image */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-2 text-sm font-semibold text-gray-700 w-24 sm:w-28">
          {product.name}
        </h3>
      </div>
    </Link>
  );
};

export default GymCard;
