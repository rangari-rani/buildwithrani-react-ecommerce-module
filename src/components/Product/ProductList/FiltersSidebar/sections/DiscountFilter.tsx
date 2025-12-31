interface Props {
  discountFilters: any[];
  setDiscountFilters: React.Dispatch<React.SetStateAction<any[]>>;
  discountBuckets: any[];
}

export default function DiscountFilter({
  discountFilters,
  setDiscountFilters,
  discountBuckets,
}: Props) {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-2">Discount</h3>

      {discountBuckets.map((bucket) => (
        <label key={bucket.label} className="flex items-center text-sm mb-2">
          <input
            type="checkbox"
            className="mr-2 accent-green-500"
            checked={discountFilters.some(
              (b) => b.min === bucket.min && b.max === bucket.max
            )}
            onChange={() =>
              setDiscountFilters((prev) =>
                prev.some((b) => b.min === bucket.min && b.max === bucket.max)
                  ? prev.filter(
                      (b) => !(b.min === bucket.min && b.max === bucket.max)
                    )
                  : [...prev, bucket]
              )
            }
          />
          {bucket.label}
        </label>
      ))}
    </div>
  );
}
