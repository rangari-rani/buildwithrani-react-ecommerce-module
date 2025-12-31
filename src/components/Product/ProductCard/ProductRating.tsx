import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { getRatingStats } from "./utils/getRatingStats";

export default function ProductRating({ rating }: { rating?: number }) {
  const { fullStars, halfStar, emptyStars } = getRatingStats(rating);

  return (
    <div className="flex items-center gap-0.5 mt-2 text-yellow-400">
      {Array(fullStars).fill(0).map((_, i) => (
        <FaStar key={i} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {Array(emptyStars).fill(0).map((_, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
}
