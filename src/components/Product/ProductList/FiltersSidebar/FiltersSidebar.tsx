import PriceFilter from "./sections/PriceFilter";
import HighlightFilter from "./sections/HighlightFilter";
import DiscountFilter from "./sections/DiscountFilter";

import type { HighlightFilter as HighlightFilterType } from "../FiltersSidebar/sections/types";

interface Props {
   priceRange: [number, number];
   setPriceRange: React.Dispatch<
    React.SetStateAction<[number, number]>
  >;
  highlightFilter: HighlightFilterType;
  setHighlightFilter: (val: HighlightFilterType) => void;
  discountFilters: any[];
  setDiscountFilters: React.Dispatch<React.SetStateAction<any[]>>;
  discountBuckets: any[];
}

export default function FiltersSidebar(props: Props) {
  return (
    <div className="rounded-lg p-4 h-fit bg-white">
      <h2 className="font-semibold mb-3 text-lg text-gray-800">Filter</h2>

      <PriceFilter
        priceRange={props.priceRange}
        setPriceRange={props.setPriceRange}
      />

      <HighlightFilter
        highlightFilter={props.highlightFilter}
        setHighlightFilter={props.setHighlightFilter}
      />

      <DiscountFilter
        discountFilters={props.discountFilters}
        setDiscountFilters={props.setDiscountFilters}
        discountBuckets={props.discountBuckets}
      />
    </div>
  );
}
