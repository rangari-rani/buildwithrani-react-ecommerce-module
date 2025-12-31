export function getRatingStats(rating: number = 4) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return { fullStars, halfStar, emptyStars };
}
