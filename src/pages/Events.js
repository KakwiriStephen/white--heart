import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";

const PageHeader = styled.section`
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
      no-repeat center center;
  background-size: cover;
  padding: 150px 0 100px;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const StyledButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e7b110;
    color: #5d14dc;
  }
`;

const EventsContainer = styled.div`
  padding: 60px 0;
  min-height: 400px;
`;

const Events = () => {
  const [selectedEventType, setSelectedEventType] = useState(null);

  const handleShowUpcomingEvents = () => {
    setSelectedEventType("upcoming");
  };

  const handleShowPastEvents = () => {
    setSelectedEventType("past");
  };

  return (
    <>
      <PageHeader>
        <Container>
          <h1>Events</h1>
          <div>
            <StyledButton onClick={handleShowPastEvents}>
              Past Events
            </StyledButton>
            <StyledButton onClick={handleShowUpcomingEvents}>
              Upcoming Events
            </StyledButton>
          </div>
        </Container>
      </PageHeader>

      <EventsContainer>
        <Container>
          {selectedEventType === "upcoming" && <UpcomingEvents />}
          {selectedEventType === "past" && <PastEvents />}
        </Container>
      </EventsContainer>
    </>
  );
};

export default Events;
