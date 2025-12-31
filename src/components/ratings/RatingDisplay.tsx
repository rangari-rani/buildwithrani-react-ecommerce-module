import { renderStars } from "./utils";


interface Props {
  average: number;
  totalReviews: number;
}

const RatingDisplay: React.FC<Props> = ({
  average,
  totalReviews,
}) => {
  const { full, half, empty } = renderStars(average);

  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-2">
        Ratings & Reviews
      </h3>

      <div className="flex items-center gap-3">
        <span className="text-3xl font-bold">
          {average.toFixed(1)}
        </span>

        <div className="flex items-center gap-0.5">
          {Array.from({ length: full }).map((_, i) => (
            <span key={`full-${i}`} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}

          {half && (
            <span className="text-yellow-400 text-lg">
              ⯪
            </span>
          )}

          {Array.from({ length: empty }).map((_, i) => (
            <span key={`empty-${i}`} className="text-yellow-400 text-lg">
              ☆
            </span>
          ))}
        </div>

        <span className="text-sm text-gray-500">
          (Based on {totalReviews} reviews)
        </span>
      </div>
    </div>
  );
};

export default RatingDisplay;
