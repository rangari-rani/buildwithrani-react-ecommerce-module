import type { HighlightFilter } from "../sections/types";

const HIGHLIGHT_OPTIONS: { label: string; value: HighlightFilter }[] = [
  { label: "All Products", value: "all" },
  { label: "New Arrival", value: "isNew" },
  { label: "Best Seller", value: "isBestSeller" },
  { label: "Trending", value: "isTrending" },
];

interface Props {
  highlightFilter: HighlightFilter;
  setHighlightFilter: (val: HighlightFilter) => void;
}

export default function HighlightFilter({
  highlightFilter,
  setHighlightFilter,
}: Props) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg mb-3">Highlights</h3>

      {HIGHLIGHT_OPTIONS.map((opt) => (
        <label key={opt.value} className="flex items-center text-sm mb-2">
          <input
            type="radio"
            checked={highlightFilter === opt.value}
            onChange={() => setHighlightFilter(opt.value)}
            className="mr-2 accent-green-500"
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
