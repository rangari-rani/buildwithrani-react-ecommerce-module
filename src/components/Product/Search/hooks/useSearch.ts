import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export function useSearch() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);

  // Debounce ONLY the value (no navigation)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);

      // Only sync URL if we are already on /search
      if (location.pathname === "/search") {
        setSearchParams(query ? { q: query } : {});
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [query, location.pathname, setSearchParams]);

  return { query, setQuery, debouncedQuery };
}
