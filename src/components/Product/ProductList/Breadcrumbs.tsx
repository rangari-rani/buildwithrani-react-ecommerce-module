import { Link } from "react-router-dom";

interface Breadcrumb {
  name: string;
  link: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav className="text-gray-600 mb-4 text-sm">
      {items.map((crumb, idx) => (
        <span key={crumb.link}>
          <Link
            to={crumb.link}
            className="hover:text-green-600"
          >
            {crumb.name}
          </Link>
          {idx < items.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
}
