export const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return {
    full,
    half,
    empty,
  };
};
