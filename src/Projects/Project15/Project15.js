import React, { useState } from "react";
import "./Project15.scss";
const Project15 = () => {
  const reviews = [
    {
      id: 1,
      img: "https://vannilla-js-basic-project-15-slider.netlify.app/img-1.jpeg",
    },
    {
      id: 2,
      img: "https://vannilla-js-basic-project-15-slider.netlify.app/img-2.jpeg",
    },
    {
      id: 3,
      img: "https://vannilla-js-basic-project-15-slider.netlify.app/person-1.jpeg",
    },
    {
      id: 4,
      img: "https://vn-live-05.slatic.net/p/fd592f2961ad86920c52ea743f4be5c8.jpg_525x525q80.jpg",
    },
  ];
  const [currentReview, setCurrentReview] = useState(0);
  const totalReview = reviews.length - 1;
  const handleNext = () => {
    if (currentReview === totalReview) {
      setCurrentReview(0);
    } else if (currentReview < totalReview) {
      setCurrentReview(currentReview + 1);
    }
  };
  const handlePrev = () => {
    if (currentReview === 0) {
      setCurrentReview(totalReview);
    } else if (currentReview <= totalReview) {
      setCurrentReview(currentReview - 1);
    }
  };
  return (
    <div className="project15">
      <div className="project15__container">
        <img src={reviews[currentReview].img} alt="" />;
        <div className="project15__order">{currentReview + 1}</div>
      </div>
      <div className="project15__button">
        {currentReview !== 0 ? <div onClick={handlePrev}>Prev</div> : undefined}
        {currentReview !== 3 ? <div onClick={handleNext}>Next</div> : undefined}
      </div>
    </div>
  );
};

export default Project15;
