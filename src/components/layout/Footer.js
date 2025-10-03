import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const StyledFooter = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 70px 0 0;
  
  .footer-logo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    
    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
      margin-right: 15px;
    }
  }
  
  .footer-about {
    margin-bottom: 25px;
    line-height: 1.8;
  }
  
  h5 {
    color: #fff;
    font-weight: 600;
    margin-bottom: 25px;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 2px;
      background-color: #e74c3c;
    }
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 15px;
      
      a {
        color: #ecf0f1;
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
        
        &:hover {
          color: #e74c3c;
          transform: translateX(5px);
        }
      }
    }
  }
  
  .contact-info {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      
      svg {
        margin-right: 10px;
        color: #e74c3c;
      }
    }
  }
  
  .social-icons {
    display: flex;
    margin-top: 20px;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
      margin-right: 10px;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #e74c3c;
        transform: translateY(-3px);
      }
    }
  }
  
  .copyright {
    text-align: center;
    padding: 20px 0;
    margin-top: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    p {
      margin-bottom: 0;
    }
    
    a {
      color: #e74c3c;
      text-decoration: none;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-5 mb-lg-0">
            <div className="footer-logo">
              <img src="images/wlogo.png" alt="WhiteHeart Charity Logo" />
              <span>WhiteHeart Charity</span>
            </div>
            <p className="footer-about">
              WhiteHeart Charity is dedicated to making a positive impact in the world through compassion, 
              generosity, and community action. Together, we can create a better future for all.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-5 mb-lg-0">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/causes">Our Causes</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6} className="mb-5 mb-md-0">
            <h5>Our Causes</h5>
            <ul className="footer-links">
              <li><Link to="/causes">Clean Water</Link></li>
              <li><Link to="/causes">Education</Link></li>
              <li><Link to="/causes">Healthcare</Link></li>
              <li><Link to="/causes">Food & Shelter</Link></li>
              <li><Link to="/causes">Environment</Link></li>
            </ul>
          </Col>
          
          <Col lg={3} md={6}>
            <h5>Contact Us</h5>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt />
                <span>123 Charity Street, City, Country</span>
              </li>
              <li>
                <FaPhone />
                <span>+2 (54) 7119955734</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@whiteheartcharity.org</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      
      <div className="copyright">
        <Container>
          <p>
            © {new Date().getFullYear()} WhiteHeart Charity. All Rights Reserved. Designed with <FaHeart style={{ color: '#e74c3c' }} /> for a better world.
          </p>
        </Container>
      </div>
    </StyledFooter>
  );
};

export default Footer;
