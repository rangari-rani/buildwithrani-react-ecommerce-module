import { Link } from "react-router-dom";
import { normalizeSlug } from "../../../utils/slug";
import type { Product } from "../../../data/products";

type Props = {
  product: Product;
};


export default function Breadcrumbs({ product }: Props) {
  return (
<nav className="text-sm text-gray-600 mb-6">
  <Link to="/" className="hover:text-green-600">
    Home
  </Link>{" "}
  /{" "}
  <Link
    to={`/product/category/${normalizeSlug(product.category)}`}
    className="hover:text-green-600"
  >
    {product.category}
  </Link>

  {product.type && (
    <>
      {" / "}
      <Link
        to={`/product/category/${normalizeSlug(product.category)}/${normalizeSlug(product.type)}`}
        className="hover:text-green-600"
      >
        {product.type}
      </Link>
    </>
  )}

  <span className="text-gray-800 font-medium">
    {" / "} {product.name}
  </span>
</nav>

  );
}
