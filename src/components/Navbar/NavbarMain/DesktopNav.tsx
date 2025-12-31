import { Link } from "react-router-dom";
import MegaMenu from "../MegaMenu/MegaMenu";
import type { Category } from "../../../data/categories";

interface DesktopNavProps {
  categories: Category[];
  hoveredCategory: string | null;
  setHoveredCategory: (slug: string | null) => void;
  menuLeft: number;
  setMenuLeft: (left: number) => void;
  textColor: string;
}

const DesktopNav = ({
  categories,
  hoveredCategory,
  setHoveredCategory,
  menuLeft,
  setMenuLeft,
  textColor,
}: DesktopNavProps) => {
  return (
    <div
      className="relative w-full flex"
      onMouseLeave={() => setHoveredCategory(null)}
    >
      <ul
        className="flex justify-center font-medium w-full"
        style={{ color: textColor }}
      >
        {categories.map((cat) => (
          <li
            key={cat.slug}
            className="relative"
            onMouseEnter={(e) => {
              setHoveredCategory(cat.slug);
              const liRect = e.currentTarget.getBoundingClientRect();
              const containerRect = e.currentTarget.closest("ul")!.getBoundingClientRect();
              setMenuLeft(liRect.left - containerRect.left);
            }}
          >
            <Link
              to={`/product/category/${cat.slug}`}
              className="block px-4 py-4 text-[#374151] hover:text-[#10B981] transition-colors"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>

      {hoveredCategory && (() => {
        const hoveredCat = categories.find((c) => c.slug === hoveredCategory);
        if (!hoveredCat) return null;
        return (
          <div
            className="absolute top-full left-0 w-full z-50 bg-white shadow-lg"
            onMouseEnter={() => setHoveredCategory(hoveredCategory)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <MegaMenu
              category={hoveredCat}
              leftOffset={menuLeft}
              menuLeft={menuLeft}
            />
          </div>
        );
      })()}
    </div>
  );
};

export default DesktopNav;
