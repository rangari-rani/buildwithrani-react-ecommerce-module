export type CartProduct = {
  id: number;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  type: string;
  price: number;
  image: string;
  gallery?: string[];
  quantity: number;
  discount?: number;
};
