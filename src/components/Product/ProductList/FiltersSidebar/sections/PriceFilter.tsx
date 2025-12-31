import { Range as ReactRange } from "react-range";

interface Props {
  priceRange: [number, number];
  setPriceRange: React.Dispatch<
    React.SetStateAction<[number, number]>
  >;
}

export default function PriceFilter({ priceRange, setPriceRange }: Props) {
  const handleChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-lg text-gray-800 mb-3">By Price</h3>

      <div className="px-2 py-4">
        <ReactRange
          step={100}
          min={0}
          max={3000}
          values={priceRange}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div {...props} className="w-full h-1 bg-gray-200 rounded-full relative">
              <div
                className="absolute h-1 bg-green-500 rounded-full"
                style={{
                  left: `${(priceRange[0] / 3000) * 100}%`,
                  width: `${((priceRange[1] - priceRange[0]) / 3000) * 100}%`,
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="w-4 h-4 bg-green-600 rounded-full" />
          )}
        />

        <div className="flex justify-between mt-3 text-sm font-medium">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
