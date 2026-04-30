import React from "react";
import styled from "styled-components";

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const EventCard = styled.div`
  background: #f8f9fa;
  border-left: 5px solid #e74c3c;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #e74c3c;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin: 8px 0;
  }

  .event-date {
    color: #e74c3c;
    font-weight: 600;
  }

  .event-location {
    color: #888;
    font-size: 0.95rem;
  }
`;

const NoEvents = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 8px;

  h3 {
    color: #333;
    margin-bottom: 15px;
  }

  p {
    color: #888;
    font-size: 1.1rem;
  }
`;

const UpcomingEvents = () => {
  const upcomingEvents = [
    //
  ];

  return (
    <div>
      <h2>Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        <EventsGrid>
          {upcomingEvents.map((event, index) => (
            <EventCard key={index}>
              <h3>{event.title}</h3>
              <p className="event-date">📅 {event.date}</p>
              <p className="event-location">📍 {event.location}</p>
              <p>{event.description}</p>
            </EventCard>
          ))}
        </EventsGrid>
      ) : (
        <NoEvents>
          <h3>No Upcoming Events</h3>
          <p>
            Upcoming events will be announced soon! Stay tuned for exciting
            news.
          </p>
        </NoEvents>
      )}
    </div>
  );
};

export default UpcomingEvents;
