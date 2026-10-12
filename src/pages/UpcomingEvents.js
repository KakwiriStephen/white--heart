import React from "react";
import "./events.css";

const UpcomingEvents = () => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="upcoming-events-card">
        <img
          src="images/leamwana.jpeg"
          alt="Upcoming Event"
          className="event-image"
        ></img>
        <p className="event-description">
          Visit to Lea Mwana Children's Home as WhiteHeart Charity members are
          planning an upcoming community outreach visit to Lea Mwana Children's
          Home to spend time with the kids, share provisions, and support their
          ongoing welfare. LEA MWANA CHILDREN'S HOME IN THALATHAMELI(MALINDI).
        </p>
      </div>
    </div>
  );
};

export default UpcomingEvents;
