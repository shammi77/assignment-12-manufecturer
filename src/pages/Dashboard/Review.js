import React from "react";

const Review = () => {
  return (
    <div className="rating rating-lg rating-half">
      <input type="radio" name="rating-4" className="rating-hidden" />

      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
        
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
      />
      <input
        type="radio"
        name="rating-4"
        className="mask mask-star-2 bg-green-500"
      />
    </div>
  );
};

export default Review;
