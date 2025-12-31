import React from "react";
import { HOME_CATEGORIES } from "./homeEssentialsData";
import { products } from "../../data/products";
import HomeEssentialTile from "./HomeEssentialTile";

const getCategoryProducts = (type: string) =>
  products.filter((p) => p.type === type);

const HomeEssentials: React.FC = () => {
  return (
    <section className="relative max-w-350 mx-auto px-6 bg-white shadow-sm rounded-xl py-8 mb-10">
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-2">Home Essentials</h2>
        <p className="text-base text-gray-700">
          Curated essentials to make your home cozy, stylish, and full of life — from plants and blankets to lamps and books.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {HOME_CATEGORIES.map((cat) => {
          const catProducts = getCategoryProducts(cat.name);
          return (
            <HomeEssentialTile
              key={cat.name}
              category={cat}
              products={catProducts}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HomeEssentials;
