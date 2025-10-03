import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa';

const PageHeader = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center;
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

const ContactSection = styled.section`
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

const ContactForm = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 30px;
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
  
  .form-label {
    font-weight: 600;
  }
  
  .form-control {
    padding: 12px 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
    
    &:focus {
      box-shadow: none;
      border-color: #e74c3c;
    }
  }
  
  .btn-submit {
    background-color: #e74c3c;
    border-color: #e74c3c;
    border-radius: 30px;
    padding: 12px 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #c0392b;
      border-color: #c0392b;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
  
  .success-message {
    display: flex;
    align-items: center;
    color: #2ecc71;
    font-weight: 600;
    margin-top: 20px;
    
    svg {
      margin-right: 10px;
    }
  }
`;

const ContactInfo = styled.div`
  .info-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    padding: 30px;
    margin-bottom: 30px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    }
    
    .info-icon {
      width: 60px;
      height: 60px;
      background-color: rgba(231, 76, 60, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      color: #e74c3c;
      font-size: 1.5rem;
    }
    
    h4 {
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    p {
      color: #666;
      margin-bottom: 0;
    }
    
    a {
      color: #666;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        color: #e74c3c;
      }
    }
  }
`;

const MapSection = styled.section`
  margin-top: 80px;
  
  .map-container {
    height: 450px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    
    iframe {
      width: 100%;
      height: 100%;
      border: 0;
    }
  }
`;

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would handle the form submission
    setFormSubmitted(true);
  };

  return (
    <>
      <PageHeader>
        <Container>
          <h1>Contact Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
          </nav>
        </Container>
      </PageHeader>

      <ContactSection>
        <Container>
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>
              Have questions, suggestions, or want to get involved? We'd love to hear from you. 
              Reach out to us using the contact form or through our contact information below.
            </p>
          </div>
          
          <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
              <ContactForm>
                <h3>Send Us a Message</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" required />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} required />
                  </Form.Group>
                  
                  <Button type="submit" className="btn-submit">Send Message</Button>
                  
                  {formSubmitted && (
                    <div className="success-message">
                      <FaCheckCircle />
                      <span>Your message has been sent successfully. We'll get back to you soon!</span>
                    </div>
                  )}
                </Form>
              </ContactForm>
            </Col>
            
            <Col lg={5}>
              <ContactInfo>
                <Card className="info-card">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h4>Our Location</h4>
                  <p>Malindi, Kilifi County, Kenya</p>
                </Card>
                
                <Card className="info-card">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <h4>Phone Number</h4>
                  <p><a href="tel:+254711995734">+254 711 995734</a></p>
                </Card>
                
                <Card className="info-card">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <h4>Email Address</h4>
                  <p><a href="mailto:info@whiteheartcharity.org">info@whiteheartcharity.org</a></p>
                </Card>
                
                <Card className="info-card">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </Card>
              </ContactInfo>
            </Col>
          </Row>
        </Container>
      </ContactSection>
      
      <MapSection>
        <Container>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.123456789!2d40.120456789!3d-3.220456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x181c4c4c4c4c4c4c%3A0x1234567890abcdef!2sMalindi%2C%20Kenya!5e0!3m2!1sen!2s!4v1622209321297!5m2!1sen!2s" 
              allowFullScreen="" 
              loading="lazy"
              title="WhiteHeart Charity Location - Malindi, Kenya"
            ></iframe>
          </div>
        </Container>
      </MapSection>
    </>
  );
};

export default Contact;
