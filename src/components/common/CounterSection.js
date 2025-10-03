import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FaUsers, FaGlobeAmericas, FaHandHoldingHeart, FaSmile } from 'react-icons/fa';

const CounterWrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  padding: 100px 0;
  color: #fff;
  text-align: center;
`;

const CounterItem = styled.div`
  .counter-icon {
    font-size: 3rem;
    color: #e74c3c;
    margin-bottom: 20px;
  }
  
  .counter-number {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  
  .counter-text {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const CounterSection = () => {
  // Static counter values
  const counters = [
    { id: 1, value: 200, title: 'Volunteers', icon: <FaUsers /> },
    { id: 2, value: 1, title: 'Country Reached', icon: <FaGlobeAmericas /> },
    { id: 3, value: 0.4, title: 'Million Raised', icon: <FaHandHoldingHeart /> },
    { id: 4, value: 20, title: 'Projects', icon: <FaSmile /> }
  ];
  
  return (
    <CounterWrapper>
      <Container>
        <Row>
          {counters.map(counter => (
            <Col key={counter.id} lg={3} md={6} className="mb-5 mb-lg-0">
              <CounterItem>
                <div className="counter-icon">{counter.icon}</div>
                <div className="counter-number">
                  {counter.value.toLocaleString()}
                  {counter.id === 3 && '+'}
                </div>
                <div className="counter-text">{counter.title}</div>
              </CounterItem>
            </Col>
          ))}
        </Row>
      </Container>
    </CounterWrapper>
  );
};

export default CounterSection;
