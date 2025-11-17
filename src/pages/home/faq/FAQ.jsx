import React from "react";
import ArrowIcon from "../../../components/utilities/ArrowIcon";

const FAQ = () => {
  return (
    <div className="join join-vertical w-full space-y-4 mb-15">
      <div className="collapse collapse-arrow join-item bg-base-200 has-[input:checked]:bg-[#E6F2F3]">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How does this posture corrector work?
        </div>
        <div className="collapse-content">
          <p>
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item bg-base-200 has-[input:checked]:bg-[#E6F2F3]">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Is it suitable for all ages and body types?
        </div>
        <div className="collapse-content">
          <p>
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item bg-base-200 has-[input:checked]:bg-[#E6F2F3]">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Does it really help with back pain and posture improvement?
        </div>
        <div className="collapse-content">
          <p>
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow join-item bg-base-200 has-[input:checked]:bg-[#E6F2F3]">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title text-xl font-medium">
          Does it have smart features like vibration alerts?
        </div>
        <div className="collapse-content">
          <p>
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back, and spine, encouraging you to maintain
            proper posture throughout the day. Here’s how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="btn btn-primary text-secondary rounded-md">
          See More FAQ’s
        </button>
        <ArrowIcon size={24} className="w-10 h-10"></ArrowIcon>
      </div>
    </div>
  );
};

export default FAQ;
