import React from "react";

import "./TravelItem.css";

function TravelItem(props) {
  const { travel, onTravelClick } = props;
  return (
    <div className="travel-item">
      <img
        src={travel.thumbnaiUrl}
        onClick={() => {
          onTravelClick(travel);
        }}
      />
      <h4>{travel.title}</h4>
    </div>
  );
}

export default TravelItem;
