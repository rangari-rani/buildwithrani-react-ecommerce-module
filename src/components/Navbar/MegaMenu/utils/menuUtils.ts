import type { Category } from "../../../../data/categories";

export const getMenuType = (category: Category) => {
  const hasMultipleSubcats = category.children && category.children.length > 1;

  const isSingleCol =
    !hasMultipleSubcats ||
    (category.children &&
      category.children.length === 1 &&
      category.children[0].children &&
      category.children[0].children.length > 0);

  const isSingleColLeaf =
    category.children &&
    category.children.length > 0 &&
    category.children.every(
      (subcat) => !subcat.children || subcat.children.length === 0
    );

  return { hasMultipleSubcats, isSingleCol, isSingleColLeaf };
};

