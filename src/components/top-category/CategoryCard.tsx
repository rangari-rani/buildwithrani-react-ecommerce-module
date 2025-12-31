import React from "react";
import type { Category } from "./categoryData";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { name, description, bgColor, image } = category;
const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, "-");
  return (
    <Link to={`product/category/${slugify(name)}`}
      className={`${bgColor} rounded-lg p-4 flex flex-col justify-between 
                  transform transition-transform duration-300 hover:scale-105`}
      style={{ aspectRatio: "1 / 1" }}
    >
      <div>
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      <div className="flex-1 mt-1 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
