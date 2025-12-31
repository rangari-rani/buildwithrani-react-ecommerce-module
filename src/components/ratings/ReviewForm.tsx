import { FaStar } from "react-icons/fa";

interface Props {
  rating: number;
  hoverRating: number;
  reviewText: string;
  setRating: (v: number) => void;
  setHoverRating: (v: number) => void;
  setReviewText: (v: string) => void;
  onSubmit: () => void;
}

const ReviewForm: React.FC<Props> = ({
  rating,
  hoverRating,
  reviewText,
  setRating,
  setHoverRating,
  setReviewText,
  onSubmit,
}) => {
  return (
    <div className="mb-4 p-4  mt-2 bg-white rounded-xl shadow-sm space-y-4">
      {/* Star selector */}
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={20}
            className={`cursor-pointer transition-colors ${
              (hoverRating || rating) >= star
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
          />
        ))}
      </div>

      {/* Review textarea */}
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review..."
        rows={4}
        className="w-full border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* Submit */}
      <div className="flex justify-end">
        <button
          onClick={onSubmit}
          disabled={!rating || !reviewText.trim()}
          className={`px-4 py-2 rounded-lg text-white transition ${
            rating && reviewText.trim()
              ? "bg-green-600 hover:bg-green-700"
              : "bg-green-300 cursor-not-allowed"
          }`}
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
