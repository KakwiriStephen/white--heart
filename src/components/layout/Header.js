import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  .navbar-brand {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #333 !important;
    font-weight: 700;
    
    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
      margin-top: -10px;
    }
    
    span {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }
  }

  .navbar-brand:hover {
    color: #e74c3c !important;
    text-decoration: none;
  }

  .nav-link {
    color: #333;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      color: #e74c3c;
    }
  }
  
  .nav-link {
    font-weight: 500;
    margin: 0 10px;
    color: #333;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: #e74c3c;
      transition: width 0.3s ease;
    }
    
    &.active, &:hover {
      color: #e74c3c;
      
      &:after {
        width: 100%;
      }
    }
  }
  
  .donate-btn {
    background-color: #e74c3c;
    border-color: #e74c3c;
    padding: 8px 20px;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover, &:focus {
      background-color: #c0392b;
      border-color: #c0392b;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  
  const closeNavbar = () => setExpanded(false);
  
  return (
    <StyledNavbar bg="white" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src="images/wlogo.png" alt="WhiteHeart Charity Logo" width="70" height="70" />
          <span>WhiteHeart</span>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/about" onClick={closeNavbar}>About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/causes" onClick={closeNavbar}>Our Causes</Nav.Link>
            <Nav.Link as={NavLink} to="/events" onClick={closeNavbar}>Events</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery" onClick={closeNavbar}>Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={closeNavbar}>Contact</Nav.Link>
          </Nav>
          <Button 
            as={Link} 
            to="/donate" 
            className="donate-btn"
            onClick={closeNavbar}
          >
            Donate Now
          </Button>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
