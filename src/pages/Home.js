import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGraduationCap, FaHeartbeat, FaUtensils } from 'react-icons/fa';

// Common components
import CounterSection from '../components/common/CounterSection';
import TestimonialSlider from '../components/common/TestimonialSlider';
import DonationModal from '../components/common/DonationModal';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
  text-align: center;
  
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-buttons {
    .btn {
      padding: 12px 30px;
      font-weight: 600;
      border-radius: 30px;
      margin: 0 10px 10px;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
    }
    
    .btn-primary {
      background-color: #e74c3c;
      border-color: #e74c3c;
      
      &:hover {
        background-color: #c0392b;
        border-color: #c0392b;
      }
    }
    
    .btn-outline-light {
      &:hover {
        background-color: #fff;
        color: #333;
      }
    }
  }
`;

const Section = styled.section`
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

const AboutSection = styled(Section)`
  background-color: #f9f9f9;
  
  .about-image {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    img {
      width: 100%;
      transition: transform 0.5s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  
  .about-content {
    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 20px;
      position: relative;
      padding-bottom: 15px;
      
      &:after {
        content: '';
        position: absolute;
        width: 50px;
        height: 3px;
        background-color: #e74c3c;
        bottom: 0;
        left: 0;
      }
    }
    
    p {
      margin-bottom: 20px;
      color: #666;
      line-height: 1.8;
    }
    
    .btn {
      padding: 12px 30px;
      font-weight: 600;
      border-radius: 30px;
      background-color: #e74c3c;
      border-color: #e74c3c;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #c0392b;
        border-color: #c0392b;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const CausesSection = styled(Section)`
  .cause-card {
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    height: 100%;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    }
    
    .card-img-top {
      height: 200px;
      object-fit: cover;
    }
    
    .card-body {
      padding: 25px;
    }
    
    .card-title {
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    .card-text {
      color: #666;
      margin-bottom: 20px;
    }
    
    .progress {
      height: 8px;
      margin-bottom: 10px;
      
      .progress-bar {
        background-color: #e74c3c;
      }
    }
    
    .progress-stats {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      font-weight: 600;
      
      .raised {
        color: #e74c3c;
      }
      
      .goal {
        color: #666;
      }
    }
    
    .btn {
      background-color: transparent;
      color: #e74c3c;
      border-color: #e74c3c;
      border-radius: 30px;
      padding: 8px 25px;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #e74c3c;
        color: #fff;
      }
    }
    
    .cause-icon {
      font-size: 2.5rem;
      color: #e74c3c;
      margin-bottom: 15px;
    }
  }
`;

const Home = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);

  // Sample causes data
  const causes = [

    {
      id: 1,
      title: 'Education',
      description: 'Supporting education initiatives for underprivileged children.',
      raised: 8700,
      goal: 15000,
      progress: 58,
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      title: 'Healthcare',
      description: 'Improving access to healthcare services in rural areas.',
      raised: 15800,
      goal: 25000,
      progress: 63,
      icon: <FaHeartbeat />
    },
    {
      id: 3,
      title: 'Food & Shelter',
      description: 'Providing food and shelter to homeless and disaster-affected people.',
      raised: 9200,
      goal: 18000,
      progress: 51,
      icon: <FaUtensils />
    },

  ];

  return (
    <>
      <HeroSection>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h1>Together We Can Make A Difference</h1>
              <p>
                Join us in our mission to create positive change in communities around the world. 
                Your support can transform lives and build a better future for those in need.
              </p>
              <div className="hero-buttons">
                <Button onClick={() => setShowDonationModal(true)} variant="primary" size="lg">Donate Now</Button>
                <Button as={Link} to="/causes" variant="outline-light" size="lg">Our Causes</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </HeroSection>

      <AboutSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="about-image">
                <img src="/images/w1.jpeg" alt="About WhiteHeart Charity" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <h1>WhiteHeart Charity</h1>
                <p className="lead">
                  A community-driven force for good, born from friendship and fueled by passion
                </p>
                <p>
                  Join our family of 25+ dedicated volunteers making a difference in Msabaha and beyond
                </p>
                <p>
                  We believe in the power of compassion and community action to create lasting change. Through the 
                  generosity of our donors and the dedication of our volunteers, we've been able to impact thousands 
                  of lives across multiple countries.
                </p>
                <Button as={Link} to="/about">Learn More About Us</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </AboutSection>

      <CausesSection>
        <Container>
          <div className="section-title">
            <h2>Our Causes</h2>
            <p>
              We focus on key areas where we can make the most significant impact. 
              Your support helps us address critical needs in communities around the world.
            </p>
          </div>
          
          <Row>
            {causes.map(cause => (
              <Col key={cause.id} lg={4} md={6} className="mb-4">
                <Card className="cause-card">
                  <Card.Body>
                    <div className="cause-icon">{cause.icon}</div>
                    <Card.Title>{cause.title}</Card.Title>
                    <Card.Text>{cause.description}</Card.Text>
                    {/* <div className="progress">
                      <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width: `${cause.progress}%` }} 
                        aria-valuenow={cause.progress} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="progress-stats">
                      <span className="raised">${cause.raised.toLocaleString()}</span>
                      <span className="goal">Goal: ${cause.goal.toLocaleString()}</span>
                    </div> */}
                    <Button onClick={() => setShowDonationModal(true)}>
                      Donate Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <div className="text-center mt-5">
            <Button 
              as={Link} 
              to="/causes" 
              variant="primary" 
              size="lg" 
              style={{ 
                backgroundColor: '#e74c3c', 
                borderColor: '#e74c3c',
                borderRadius: '30px',
                padding: '12px 35px',
                fontWeight: '600'
              }}
            >
              View All Causes
            </Button>
          </div>
        </Container>
      </CausesSection>

      <CounterSection />
      
      <TestimonialSlider />
      
      <DonationModal 
        show={showDonationModal} 
        onHide={() => setShowDonationModal(false)} 
      />
    </>
  );
};

export default Home;
