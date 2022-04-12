import React from "react";
import useReview from "../../Hooks/useReview";
import AllReview from "../AllReview/AllReview";
import "./Review.css";

const Review = () => {
  const [reviews, setReview] = useReview();
  return (
    <div className="mt-5">
      <h2 className="text-3xl text-center font-bold">All Reviews</h2>
      <div className="grid md:grid-cols-3">
        {reviews.map((review) => (
          <AllReview key={review.id} review={review}></AllReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
