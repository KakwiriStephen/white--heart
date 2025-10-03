import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const PageHeader = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center;
  background-size: cover;
  padding: 150px 0 100px;
  color: #fff;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .breadcrumb {
    background: transparent;
    justify-content: center;
    
    .breadcrumb-item {
      color: rgba(255, 255, 255, 0.7);
      
      &.active {
        color: #fff;
      }
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        
        &:hover {
          color: #e74c3c;
        }
      }
      
      & + .breadcrumb-item::before {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;

const EventsSection = styled.section`
  padding: 100px 0;
  
  .section-title {
    text-align: center;
    margin-bottom: 60px;
    
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 20px;
      position: relative;
      display: inline-block;
      
      &:after {
        content: '';
        position: absolute;
        width: 70px;
        height: 3px;
        background-color: #e74c3c;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    p {
      max-width: 700px;
      margin: 0 auto;
      color: #666;
    }
  }
`;





const UpcomingEvent = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.pinimg.com/1200x/a4/df/08/a4df08d3e1bee4dc4307faad62359c91.jpg') no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  padding: 40px;
  color: #fff;
  margin-bottom: 40px;
  
  .featured-badge {
    display: inline-block;
    background-color: #e74c3c;
    color: #fff;
    padding: 5px 15px;
    border-radius: 30px;
    font-size: 0.8rem;
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .event-info {
    margin-bottom: 25px;
    
    .info-item {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      
      svg {
        color: #e74c3c;
        margin-right: 15px;
        font-size: 1.2rem;
      }
    }
  }
  
  p {
    margin-bottom: 25px;
    opacity: 0.9;
  }
  
  .btn-register {
    background-color: #e74c3c;
    border-color: #e74c3c;
    border-radius: 30px;
    padding: 12px 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #fff;
      color: #e74c3c;
      transform: translateY(-3px);
    }
  }
`;

const Events = () => {

  return (
    <>
      <PageHeader>
        <Container>
          <h1>Upcoming Events</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Events</li>
            </ol>
          </nav>
        </Container>
      </PageHeader>

      <EventsSection>
        <Container>
          <div className="section-title">
            <h2>Join Our Events</h2>
            <p>
              Participate in our upcoming events to support our causes, connect with like-minded individuals, 
              and make a difference in communities around the world.
            </p>
          </div>
          
          <UpcomingEvent>
            <span className="featured-badge">Featured Event</span>
            <h3>Prison Charity Visit 2025</h3>
            <div className="event-info">
              <div className="info-item">
                <FaCalendarAlt />
                <span>December 27, 2025</span>
              </div>
              <div className="info-item">
                <FaClock />
                <span>9:00 AM - 6:00 PM </span>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <span>Malindi Prison</span>
              </div>
            </div>
            <p>
            We warmly invite you to join us for a special charity outreach at Malindi Prison on Dec 27th. On this day, we will come together to share compassion, encouragement, and hope with the inmates through [activities such as food donations, toiletries, prayers, mentorship talks, or music].
            This visit is an opportunity to remind those behind bars that they are not forgotten, and that with love and guidance, everyone has a chance to rebuild their lives.
            </p>
            <Button variant="primary" className="btn-register">Register Now</Button>
          </UpcomingEvent>
          
          <Row className="mt-5 text-center">
            <Col>
              <h3>More Events Coming Soon</h3>
              <p className="mt-3">
                We're planning more exciting events for the upcoming months. Check back soon for updates or 
                <a href="/contact" className="ms-1">contact us</a> to learn more about our upcoming events.
              </p>
            </Col>
          </Row>
        </Container>
      </EventsSection>
    </>
  );
};

export default Events;
