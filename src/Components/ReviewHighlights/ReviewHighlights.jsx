import React from "react";
import "./ReviewHighlights.css";

const ReviewHighlights = (props) => {
  const { user_name, review, ratings, img } = props.review;
  return (
    <div className="review border p-5 mx-auto mt-5 rounded bg-white">
      <img src={img} alt="" />
      <h4 className="font-bold">{user_name}</h4>
      <p className="text-left p-2">
        {review.length > 180 ? review.slice(0, 180) + "..." : review}
      </p>
      <p>
        <small className="font-bold text-orange-500">Ratings: {ratings}</small>
      </p>
    </div>
  );
};

export default ReviewHighlights;
