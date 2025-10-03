import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

const NotFoundWrapper = styled.section`
  padding: 150px 0;
  text-align: center;
  
  .error-code {
    font-size: 10rem;
    font-weight: 700;
    color: #e74c3c;
    margin-bottom: 20px;
    line-height: 1;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto 30px;
  }
  
  .btn-home {
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
    
    svg {
      margin-right: 10px;
    }
  }
  
  .error-image {
    max-width: 100%;
    height: auto;
    margin: 30px 0;
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Container>
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <img 
          src="/images/404-illustration.svg" 
          alt="Page Not Found" 
          className="error-image" 
        />
        <div>
          <Button as={Link} to="/" className="btn-home">
            <FaHome /> Back to Home
          </Button>
        </div>
      </Container>
    </NotFoundWrapper>
  );
};

export default NotFound;
