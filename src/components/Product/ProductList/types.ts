export type HighlightFilter =
  | "all"
  | "isNew"
  | "isBestSeller"
  | "isTrending";

export type DiscountBucket = {
  label: string;
  min: number;
  max: number;
};
