import { products, type Product } from "../../data/products";

export const getActiveLifeProducts = (): Product[] => {
  const gymProducts = products.filter(
    (p) =>
      p.category.toLowerCase() === "fitness" &&
      p.subcategory?.toLowerCase() === "gym equipment"
  );

  const grouped = gymProducts.reduce((acc, product) => {
    if (!acc[product.type]) {
      acc[product.type] = [];
    }
    acc[product.type].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  const result: Product[] = [];
  const types = Object.keys(grouped);
  let keepLooping = true;

  while (keepLooping) {
    keepLooping = false;
    for (const type of types) {
      if (grouped[type].length > 0) {
        result.push(grouped[type].shift()!);
        keepLooping = true;
      }
    }
  }

  return result;
};
