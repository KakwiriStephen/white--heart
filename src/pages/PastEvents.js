import React from "react";
import "./events.css";

const pastEvents = [
  {
    id: "prison-charity-visit",
    poster: "/images/posters/prison-charity-visit.png",
    title: "Prison Charity Visit · 2025",
    alt: "White Heart Prison Charity Visit poster for Malindi Men's Prison",
  },
  {
    id: "charity-fundraising-2024",
    poster: "/images/posters/charity-fundraising-2024.jpeg",
    title: "Charity Fundraising Event · 2024",
    alt: "White Heart Charity Fundraising Event poster, 23 December 2024",
  },
];

const PastEvents = () => {
  return (
    <section className="events-panel" aria-labelledby="past-events-title">
      <div className="events-panel__heading">
        <span className="wh-eyebrow">LOOKING BACK</span>
        <h2 id="past-events-title">Past events</h2>
      </div>

      <div className="event-posters">
        {pastEvents.map((event) => (
          <article key={event.id} className="event-poster">
            <img
              className="event-poster__image"
              src={event.poster}
              alt={event.alt}
              loading="lazy"
            />
            <h3 className="event-poster__title">{event.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PastEvents;
