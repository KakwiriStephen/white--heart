import React from "react";
import { Link } from "react-router-dom";
import "./events.css";

const UpcomingEvents = () => {
  return (
    <section className="upcoming-events-section">
      <h2>Upcoming Events</h2>
      <article className="upcoming-events-card">
        <div className="upcoming-event-content">
          <p className="upcoming-event-label">Community outreach</p>
          <h3>Visit to Lea Mwana Children&apos;s Home</h3>
          <p className="event-description">
            WhiteHeart Charity members are planning a visit to spend time with
            the children, share provisions, and support their ongoing welfare.
          </p>
          <p className="upcoming-event-location">Thalathameli, Malindi</p>
          <div className="upcoming-event-actions">
            <Link to="/donate" className="upcoming-event-button primary">
              Donate
            </Link>
            <Link to="/contact" className="upcoming-event-button secondary">
              Join Us
            </Link>
            <p className="upcoming-event-date">
              This December, 2025 - Date to be confirmed
            </p>
            <p className="slogan">Lets make a Child smile!</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default UpcomingEvents;
