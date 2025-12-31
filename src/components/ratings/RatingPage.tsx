import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ProductSummary from "./ProductSummary";
import RatingDisplay from "./RatingDisplay";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";
import type { Review } from "./types";
import MobileHeader from "../layout/MobileHeader";


const RatingPage: React.FC = () => {
  const { orderId } = useParams();

  const product = products.find((p) => p.id === Number(orderId));

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Jane Doe",
      rating: 4,
      text: "Great product! Really loved the quality.",
      time: "3 weeks ago",
    },
    {
      id: 2,
      name: "John Smith",
      rating: 3,
      text: "The product is good, but delivery was a bit slow.",
      time: "2 weeks ago",
    },
  ]);

  const submitReview = () => {
    if (!rating || !reviewText.trim()) return;

    setReviews([
      {
        id: Date.now(),
        name: "You",
        rating,
        text: reviewText,
        time: "Just now",
      },
      ...reviews,
    ]);

    setRating(0);
    setHoverRating(0);
    setReviewText("");
    setShowReviewForm(false);
  };

  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return total / reviews.length;
  }, [reviews]);

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
       <MobileHeader title="Rate Product" />
       <h2 className="text-xl font-bold mt-4 mb-4">Rate the Product</h2>
      {/* Product Info */}
      <ProductSummary
        product={{
          name: product.name,
          image: product.image,
          category: product.category,
        }}
      />

      {/* Rating Summary */}
      <RatingDisplay
        average={averageRating}
        totalReviews={reviews.length}
      />

      {/* Write Review CTA */}
      <div className="mt-4">
        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          {showReviewForm ? "Cancel Review" : "Write a Review"}
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <ReviewForm
          rating={rating}
          hoverRating={hoverRating}
          reviewText={reviewText}
          setRating={setRating}
          setHoverRating={setHoverRating}
          setReviewText={setReviewText}
          onSubmit={submitReview}
        />
      )}

      {/* Reviews */}
      <ReviewsList reviews={reviews} />
    </div>
  );
};

export default RatingPage;
