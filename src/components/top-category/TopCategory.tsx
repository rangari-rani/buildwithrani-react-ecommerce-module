import React from "react";
import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "./categoryData";

const TopCategory: React.FC = () => {
  return (
    <section className="max-w-350 mx-auto px-6 bg-white shadow-sm rounded-xl py-6 mb-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Top Categories</h2>
        <p className="text-base text-gray-700 mt-2">
          Explore our best-selling products and fan favorites across all top categories.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
};

export default TopCategory;
