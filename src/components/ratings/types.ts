export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  time: string;
}

export interface RatingSummary {
  average: number;
  totalReviews: number;
}
