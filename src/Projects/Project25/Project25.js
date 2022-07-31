import React, { useState } from "react";
import "./Project25.scss";
const Project25 = () => {
  // id name job img text
  const reviews = [
    {
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
      name: "peter doe",
      job: "product manager",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
      name: "susan doe",
      job: "developer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "emma doe",
      job: "designer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
  ];
  const [currentReview, setCurrentReview] = useState(0);
  const totalReview = reviews.length - 1;
  const handlePrev = () => {
    if (currentReview === 0) {
      setCurrentReview(totalReview);
    } else if (currentReview <= totalReview) {
      setCurrentReview(currentReview - 1);
    }
  };
  const handleNext = () => {
    if (currentReview === totalReview) {
      setCurrentReview(0);
    } else if (currentReview < totalReview) {
      setCurrentReview(currentReview + 1);
    }
  };
  return (
    <div className="project25">
      <h1>/ Reviews</h1>
      <div className="d-flex">
        <i onClick={handlePrev} className="fas fa-chevron-left blue"></i>
        <div className="project25__desc">
          <div className="project25__img-container">
            <img
              style={{ objectFit: "cover" }}
              src={reviews[currentReview].img}
              alt=""
            />
          </div>
          <div style={{ padding: "0 1rem" }}>
            <h4> {reviews[currentReview].name} </h4>
            <h5>{reviews[currentReview].job}</h5>
            <p style={{ minHeight: "70px" }}>{reviews[currentReview].text}</p>
          </div>
        </div>
        <i onClick={handleNext} className="fas fa-chevron-right blue"></i>
      </div>
    </div>
  );
};

export default Project25;
