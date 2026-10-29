import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";

const PageHeader = styled.section`
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFcEXBXFNF1qQEmDqvSj-XjlV_CEfy1VVbdxjEeKqGg&s=10")
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
  border: 1px solid #e74c3c;
  border-radius: 30px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  min-height: 44px;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: #c0392b;
    border-color: #c0392b;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const EventButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    ${StyledButton} {
      width: min(100%, 240px);
    }
  }
`;

const EventsContainer = styled.div`
  padding: 60px 0;
  min-height: 400px;
`;

const Events = () => {
  const [selectedEventType, setSelectedEventType] = useState("upcoming");

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
          <EventButtonGroup>
            <StyledButton onClick={handleShowPastEvents}>
              Past Events
            </StyledButton>
            <StyledButton onClick={handleShowUpcomingEvents}>
              Upcoming Events
            </StyledButton>
          </EventButtonGroup>
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
