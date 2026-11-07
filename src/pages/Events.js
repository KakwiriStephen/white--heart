import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import WhiteHeartPageBanner from "../components/common/WhiteHeartPageBanner";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
import "./events.css";

const Events = () => {
  const [selectedEventType, setSelectedEventType] = useState("upcoming");

  return (
    <div className="events-page">
      <WhiteHeartPageBanner
        eyebrow="GATHER WITH US"
        title="Events that bring us closer."
        description="From community visits to shared celebrations, our events are where care becomes action. Find out what is next and how you can join in."
        breadcrumb={[{ label: "EVENTS" }]}
        icon={<FaCalendarAlt />}
        statValue="02"
        statLabel="Ways to join in"
      >
        <div className="events-toggle" role="group" aria-label="Choose event type">
          <button
            type="button"
            className={selectedEventType === "upcoming" ? "is-active" : ""}
            onClick={() => setSelectedEventType("upcoming")}
            aria-pressed={selectedEventType === "upcoming"}
          >
            Upcoming events
          </button>
          <button
            type="button"
            className={selectedEventType === "past" ? "is-active" : ""}
            onClick={() => setSelectedEventType("past")}
            aria-pressed={selectedEventType === "past"}
          >
            Past events
          </button>
        </div>
      </WhiteHeartPageBanner>

      <section className="events-content wh-section">
        <div className="wh-container">
          {selectedEventType === "upcoming" ? <UpcomingEvents /> : <PastEvents />}
        </div>
      </section>
    </div>
  );
};

export default Events;
