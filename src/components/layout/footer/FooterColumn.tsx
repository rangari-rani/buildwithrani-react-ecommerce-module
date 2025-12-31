import React from "react";
import { Link } from "react-router-dom";

interface FooterColumnProps {
  title: string;
  links: { label: string; to: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <ul className="space-y-1 text-gray-700">
        {links.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
