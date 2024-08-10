import React from "react";
import "../styles/mainbar.css";

import drg from "../drg.png";
import globe from "../globe.jpg";
import fee from "../fee.jpg";
import cbse from "../cbse.jpg";
import council from "../sc.png";
import events from "../events.png";
import trophy from "../trophy.png";
import photo from "../photo.png";
import ss from "../ss.png";

function Mainbar() {
  return (
    <div className="mainbar">
      <h1>Quick Links</h1>
      <div className="containers">
        <div className="cards">
          <img src={drg} alt="" />
          <h2>Drug Manufacturing</h2>
        </div>
        <div className="cards">
          <img src={globe} alt="" />
          <h2>Internationalism</h2>
        </div>
        <div className="cards">
          <img src={fee} alt="" />
          <h2>Fee Payment</h2>
        </div>
        <div className="cards">
          <img src={cbse} alt="" />
          <h2>CBSE Results</h2>
        </div>
        <div className="cards">
          <img src={council} alt="" />
          <h2>Student Council</h2>
        </div>
        <div className="cards">
          <img src={events} alt="" />
          <h2>Events and Activities</h2>
        </div>
        <div className="cards">
          <img src={trophy} alt="" />
          <h2>Achievements</h2>
        </div>
        <div className="cards">
          <img src={photo} alt="" />
          <h2>Photo Gallery</h2>
        </div>
        <div className="cards">
          <img src={ss} alt="" />
          <h2>Social Service</h2>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Mainbar;
