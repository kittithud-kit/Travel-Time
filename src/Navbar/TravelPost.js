import React from "react";
import "./TravelPost.css";

function TravelPost(props) {
  const { travel, onBgClick } = props;
  return (
    <div className="travel-post">
      <div className="travel-post-bg" onClick={onBgClick} />
      <div className="travel-post-content">
        <img src={travel.fullUrl} />
        <h4>{travel.title}</h4>
      </div>
    </div>
  );
}

export default TravelPost;
