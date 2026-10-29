import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  FaUsers,
  FaGlobeAmericas,
  FaHandHoldingHeart,
  FaSmile,
} from "react-icons/fa";

const CounterWrapper = styled.section`
  background:
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN0RjD1-aQDie0mGHpDsKwJwPMDYFxbSEw3VkH1OpLog&s=10")
      no-repeat center center;
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
    { id: 1, value: 200, title: "Volunteers", icon: <FaUsers /> },
    { id: 2, value: 1, title: "Country Reached", icon: <FaGlobeAmericas /> },
    {
      id: 3,
      value: 0.2,
      title: "Million Raised",
      icon: <FaHandHoldingHeart />,
    },
    { id: 4, value: 20, title: "Projects", icon: <FaSmile /> },
  ];

  return (
    <CounterWrapper>
      <Container>
        <Row>
          {counters.map((counter) => (
            <Col key={counter.id} lg={3} md={6} className="mb-5 mb-lg-0">
              <CounterItem>
                <div className="counter-icon">{counter.icon}</div>
                <div className="counter-number">
                  {counter.value.toLocaleString()}
                  {counter.id === 3 && "+"}
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
