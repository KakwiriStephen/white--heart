import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./events.css";

const UpcomingEvents = () => {
  return (
    <section className="events-panel" aria-labelledby="upcoming-events-title">
      <div className="events-panel__heading">
        <span className="wh-eyebrow">WHAT&apos;S NEXT</span>
        <h2 id="upcoming-events-title">Upcoming events</h2>
      </div>

      <article className="event-feature">
        <div className="event-feature__media">
          <img
            src="/images/Homevisit.jpg"
            alt="WhiteHeart members visiting a children's home"
            loading="lazy"
          />
          <span className="event-feature__tag">Community outreach</span>
        </div>

        <div className="event-feature__body">
          <span className="event-feature__date">Date to be confirmed · December</span>
          <h3>Visit to Lea Mwana Children&apos;s Home</h3>
          <p className="event-feature__text">
            WhiteHeart Charity members are planning a visit to spend time with
            the children, share provisions, and support their ongoing welfare.
          </p>
          <p className="event-feature__location">
            <FaMapMarkerAlt aria-hidden="true" />
            Thalathameli, Malindi
          </p>
          <blockquote className="event-feature__slogan">
            “Let&apos;s make a child smile!”
          </blockquote>
          <div className="event-feature__actions">
            <Link to="/donate" className="wh-btn wh-btn--primary">
              Donate
            </Link>
            <Link to="/contact" className="wh-btn wh-btn--outline">
              Join us
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};

export default UpcomingEvents;
