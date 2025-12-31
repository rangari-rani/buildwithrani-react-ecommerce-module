import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../../data/products";
import { useSearch } from "./hooks/useSearch";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const { query, setQuery } = useSearch();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const suggestions = products
    .filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

  return (
    <div className="relative w-full max-w-sm">
      {/* Input */}
      <input
        type="text"
        className="w-full border px-3 py-2 pr-10 rounded-lg"
        placeholder="Search products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
      />

      {/* Search icon */}
      <FaSearch
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        size={18}
      />

      {showSuggestions && query && (
        <div className="absolute left-0 right-0 bg-white border mt-1 rounded-md shadow-lg z-40">
          {suggestions.length === 0 ? (
            <div className="p-3 text-sm text-gray-500">
              No results found
            </div>
          ) : (
            suggestions.map((item) => (
              <div
                key={item.id}
                className="p-3 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setQuery(item.name);
                  setShowSuggestions(false);
                  navigate(`/search?q=${encodeURIComponent(item.name)}`);
                }}
              >
                {item.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
