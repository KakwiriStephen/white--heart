import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSection = styled.section`
  padding: 100px 0;
  background-color: #f9f9f9;
  
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
  
  .carousel-indicators {
    bottom: -50px;
    
    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #ddd;
      opacity: 1;
      
      &.active {
        background-color: #e74c3c;
      }
    }
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }
`;

const TestimonialItem = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
  
  .quote-icon {
    font-size: 2.5rem;
    color: #e74c3c;
    opacity: 0.2;
    margin-bottom: 20px;
  }
  
  .testimonial-text {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.8;
    font-style: italic;
    margin-bottom: 30px;
  }
  
  .testimonial-author {
    .author-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 0 auto 15px;
      overflow: hidden;
      border: 3px solid #e74c3c;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .author-name {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 5px;
    }
    
    .author-title {
      color: #777;
      font-size: 0.9rem;
    }
  }
`;

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Through their compassion, generosity, and selfless service, this charity continues to transform lives and restore smiles. Their work reminds us all of the power of kindness, unity, and giving back to those who need it most.",
      name: "Abigail Choni",
      title: "Member",
      image: "/images/abi.jpeg"
    },
    {
      id: 2,
      text: "This charity has touched countless lives with love, dignity, and hope. Their consistent support has not only met immediate needs but also restored faith and confidence in those who were struggling. They are truly making a real difference where it matters most",
      name: "Monica Migwambo",
      title: "Member",
      image: "/images/monica.jpeg"
    },
    {
      id: 3,
      text: "Their commitment to uplifting the vulnerable is truly inspiring; every effort brings positive change to the community",
      name: "Nila Washe",
      title: "Member",
      image: "/images/nila.jpeg"
    },
    {
      id: 3,
      text: "Through kindness and unwavering commitment, this charity changes lives and brings hope to those who need it most.",
      name: "Collins",
      title: "Member",
      image: "/images/collo.jpeg"
    }
  ];
  
  return (
    <TestimonialSection>
      <Container>
        <div className="section-title">
          <h2>What People Say</h2>
          <p>
            Hear from the communities we've worked with, our volunteers, and our donors about the impact of our work around the world.
          </p>
        </div>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            <Carousel 
              activeIndex={index} 
              onSelect={handleSelect}
              indicators={true}
              controls={false}
              interval={5000}
            >
              {testimonials.map(testimonial => (
                <Carousel.Item key={testimonial.id}>
                  <TestimonialItem>
                    <FaQuoteLeft className="quote-icon" />
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-title">{testimonial.title}</p>
                    </div>
                  </TestimonialItem>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </TestimonialSection>
  );
};

export default TestimonialSlider;
