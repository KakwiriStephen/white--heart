import React from "react";
import "./events.css";

const PastEvents = () => {
  return (
    <>
      <h2>Past Events</h2>
      <div className="past-events-card">
        <img
          src="images/Prisonvisit.jpeg"
          alt="Past Event"
          className="event-image"
        ></img>
        <p className="event-description">
          Some members of the community attended a visit to the Malindi
          Correctional Facility to learn about the challenges faced by inmates
          and to discuss potential ways to support rehabilitation efforts.
        </p>
      </div>
    </>
  );
};

export default PastEvents;
