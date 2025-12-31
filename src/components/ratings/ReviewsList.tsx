import type { Review } from "./types";
import { renderStars, getInitials } from "./utils";

interface Props {
  reviews: Review[];
}

const ReviewsList: React.FC<Props> = ({ reviews }) => {
  return (
    <div className="mt-6 space-y-4">
      {reviews.map((review) => {
        const { full, half, empty } = renderStars(review.rating);
        const initials = getInitials(review.name);

        return (
          <div
            key={review.id}
            className="p-4 bg-white rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              {/* Avatar + Name + Time */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm">
                  {initials}
                </div>

                <div className="flex flex-col">
                  <h4 className="font-semibold text-sm">
                    {review.name}
                  </h4>
                  <span className="text-xs text-gray-400">
                    {review.time}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: full }).map((_, i) => (
                  <span
                    key={`full-${review.id}-${i}`}
                    className="text-yellow-400 text-sm"
                  >
                    ★
                  </span>
                ))}

                {half && (
                  <span className="text-yellow-400 text-sm">
                    ⯪
                  </span>
                )}

                {Array.from({ length: empty }).map((_, i) => (
                  <span
                    key={`empty-${review.id}-${i}`}
                    className="text-yellow-400 text-sm"
                  >
                    ☆
                  </span>
                ))}
              </div>
            </div>

            {/* Review text */}
            <p className="text-gray-700 text-sm">
              {review.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsList;
