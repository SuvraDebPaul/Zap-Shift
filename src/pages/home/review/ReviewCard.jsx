import React from "react";
import reviewQuote from "../../../assets/reviewQuote.png";

const ReviewCard = ({ review }) => {
  // console.log(review);
  return (
    <div className="p-5 py-10">
      <img src={reviewQuote} alt="" className="w-8 h-8 mb-3" />
      <p>{review.review}</p>
      <div className="divider"></div>
      <div className="flex gap-5 items-center">
        <div className="w-12 h-12">
          <img src={review.user_photoURL} alt="" className="rounded-full" />
        </div>
        <div>
          <h4>{review.userName}</h4>
          <h6>{review.user_email}</h6>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
