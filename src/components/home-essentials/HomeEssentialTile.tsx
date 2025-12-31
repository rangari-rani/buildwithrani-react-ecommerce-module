import React from "react";
import { Link } from "react-router-dom";
import type { HomeCategory } from "./homeEssentialsData";
import { products, type Product } from "../../data/products";

const normalizeSlug = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

const getCategoryProducts = (type: string) =>
  products.filter((p) => p.type === type);

interface HomeEssentialTileProps {
  category: HomeCategory;
  products: Product[];
}

const HomeEssentialTile: React.FC<HomeEssentialTileProps> = ({ category, products }) => {
  if (!products.length) return null;
  const catProducts = getCategoryProducts(category.name);
          if (!catProducts || catProducts.length === 0) return null;
  const bigProduct = products[0];
  const smallProducts = products.slice(1, 4);

  return (
    <Link 
        key={category.name}
              to={`/product/category/home-essentials/${normalizeSlug(category.name)}`}
     className="flex flex-col group">
      {/* Mosaic Image Grid */}
      <div
        className={`grid grid-cols-3 gap-2 h-75 rounded-xl p-2 ${category.bgColor}
        transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl`}
      >
        {/* Big image */}
        <div className="col-span-2 row-span-3 overflow-hidden rounded-lg">
          <img
            src={bigProduct.image}
            alt={bigProduct.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Supporting images */}
        {smallProducts.map((p, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Text Area */}
      <div className="mt-3 flex items-center justify-center text-sm text-gray-700">
        <h3 className="text-base font-semibold mr-2 text-gray-900">
          {category.name}
        </h3>
        <span className="text-gray-500 truncate">
          {category.description}
        </span>
      </div>
    </Link>
  );
};

export default HomeEssentialTile;
