import React from "react";
import { useState } from "react";
import LayoutPage from "./LayoutPage";
import travels from "./TravelData";
import TravelItem from "./TravelItem";
import TravelPost from "./TravelPost";
import AppSearch from "./AppSearch";
import "./Photo.css";

function PagePhoto() {
  const [selectedTravel, setSelectedTravel] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onTravelOpenClick(travel) {
    setSelectedTravel(travel);
  }

  function onTravelCloseClick() {
    setSelectedTravel(null);
  }

  const travelItems = travels
    .filter((travel) => {
      return travel.title.includes(searchText);
    })
    .map((travel, index) => {
      return (
        <TravelItem
          key={index}
          travel={travel}
          onTravelClick={onTravelOpenClick}
        />
      );
    });

  let travelPost = null;
  if (!!selectedTravel) {
    travelPost = (
      <TravelPost travel={selectedTravel} onBgClick={onTravelCloseClick} />
    );
  }

  return (
    <LayoutPage>
      <h1>ต่างแดน</h1>
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">{travelItems}</div>
        </div>
      </section>
      {travelPost}
    </LayoutPage>
  );
}

export default PagePhoto;
