import type { Product } from "../../../../../data/products";

import { normalizeSlug } from "../../../../../utils/slug";

interface SlugParams {
  categorySlug?: string;
  typeSlug?: string;
  subSlug?: string;
}

export function useCategoryFilter(products: Product[], slugs: SlugParams) {
  const { categorySlug, typeSlug, subSlug } = slugs;

  return products.filter((p) => {
    const cat = normalizeSlug(p.category);
    const type = normalizeSlug(p.type);
    const sub = normalizeSlug(p.subcategory);

    // 1️⃣ /category/type/sub (STRICT)
    if (categorySlug && typeSlug && subSlug) {
      return (
        cat === normalizeSlug(categorySlug) &&
        type === normalizeSlug(typeSlug) &&
        sub === normalizeSlug(subSlug) || 
         (type === normalizeSlug(subSlug))
      );
    }

    // 2️⃣ /category/type (FLEXIBLE)
    if (categorySlug && typeSlug) {
      return (
        cat === normalizeSlug(categorySlug) &&
        (
          type === normalizeSlug(typeSlug) ||
          sub === normalizeSlug(typeSlug)
        )
      );
    }

    // 3️⃣ /category
    if (categorySlug) {
      return cat === normalizeSlug(categorySlug);
    }

   
    return true;
  });
}

