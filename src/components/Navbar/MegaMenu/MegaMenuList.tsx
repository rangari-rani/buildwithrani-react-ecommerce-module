import { Link } from "react-router-dom";
import type { Category, SubCategory } from "../../../data/categories";

interface MegaMenuListProps {
  category: Category;
  accentColor: string;
  isSingleColLeaf: boolean;
  textColor: string;
}

const MegaMenuList = ({
  category,
  accentColor,
  isSingleColLeaf,
}: MegaMenuListProps) => {
  if (!category.children) return null;

  if (isSingleColLeaf) {
    return (
      <ul className="flex flex-col space-y-1">
        {category.children.map((item) => (
          <li key={item.slug}>
            <Link
              to={`/product/category/${category.slug}/${item.slug}`}
              className="block px-2 py-1 rounded text-[#374151] hover:text-[#10B981] transition-colors"
             
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {category.children.map((subcat: SubCategory) => (
        <div key={subcat.slug} style={{ width: "100%" }}>
          {subcat.children && subcat.children.length > 0 && (
            <h3 className="font-semibold mb-3" style={{ color: accentColor }}>
              {subcat.name}
            </h3>
          )}

          <ul className="space-y-1">
            {subcat.children && subcat.children.length > 0
              ? subcat.children.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={`/product/category/${category.slug}/${subcat.slug}/${item.slug}`}
                      className="block px-2 py-1 rounded text-[#374151] hover:text-[#10B981] transition-colors"
                     
                    >
                      {item.name}
                    </Link>
                  </li>
                ))
              : (
                  <li>
                    <Link
                      to={`/product/category/${category.slug}/${subcat.slug}`}
                      className="block px-2 py-1 rounded text-[#374151] hover:text-[#10B981] transition-colors"
                   
                    >
                      {subcat.name}
                    </Link>
                  </li>
                )}
          </ul>
        </div>
      ))}
    </>
  );
};

export default MegaMenuList;
