import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import styled from 'styled-components';
import { FaGraduationCap, FaHeartbeat, FaUtensils } from 'react-icons/fa';
// Remove the import line since we're using URL directly

const PageHeader = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center;
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

const CausesSection = styled.section`
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

const CauseCard = styled(Card)`
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  margin-bottom: 30px;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    height: 250px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 30px;
  }
  
  .card-title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    
    svg {
      color: #e74c3c;
      margin-right: 15px;
      font-size: 2rem;
    }
  }
  
  .card-text {
    color: #666;
    margin-bottom: 25px;
    line-height: 1.8;
  }
  
  .progress {
    height: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
    
    .progress-bar {
      background-color: #e74c3c;
    }
  }
  
  .progress-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    font-weight: 600;
    
    .raised {
      color: #e74c3c;
    }
    
    .goal {
      color: #666;
    }
  }
  
  .btn-donate {
    background-color: #e74c3c;
    border-color: #e74c3c;
    border-radius: 30px;
    padding: 10px 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #c0392b;
      border-color: #c0392b;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
`;

const CauseDetails = styled.div`
  margin-top: 30px;
  
  .cause-detail-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    
    .icon {
      min-width: 50px;
      height: 50px;
      background-color: rgba(231, 76, 60, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      color: #e74c3c;
      font-size: 1.2rem;
    }
    
    .content {
      h5 {
        font-weight: 600;
        margin-bottom: 5px;
      }
      
      p {
        color: #666;
        margin-bottom: 0;
      }
    }
  }
`;

const Causes = () => {
  // Sample causes data with more detailed information
  const causes = [
    {
      id: 1,
      title: 'Education',
      description: 'Supporting local schools in Msabaha and surrounding areas',
      image: '/images/e2.jpeg',
      icon: <FaGraduationCap />,
      impact: '100+ students supported',
      location: 'Msabaha, Malindi',
      partners: ['Local Schools', 'Community Leaders'],
      details: 'Our education initiatives focus on providing quality education to children in our community. We work with local schools to improve infrastructure, provide educational materials, and support teachers. Through our mentorship program, we help students from underprivileged backgrounds excel academically and build their confidence. We believe that education is the key to breaking the cycle of poverty and creating opportunities for our youth.'
    },
    {
      id: 2,
      title: 'Healthcare',
      description: 'Assisting local healthcare facilities and patients',
      image: '/images/h1.jpeg',
      icon: <FaHeartbeat />,
      impact: 'Hundreds of patients helped',
      location: 'Kilifi County',
      partners: ['Local Clinics', 'Health Workers'],
      details: 'We support healthcare initiatives in our community by providing essential medical supplies, assisting with patient care, and raising awareness about health issues. Our team regularly visits local clinics to provide support and ensure that medical services are accessible to everyone. We also organize health education campaigns to promote wellness and disease prevention in our community.'
    },
    {
      id: 3,
      title: 'Community Support',
      description: 'Providing essential aid to local families and elders',
      image: '/images/f1.jpeg',
      icon: <FaUtensils />,
      impact: '50+ families supported',
      location: 'Local Communities',
      partners: ['Community Groups', 'Local Leaders'],
      details: 'Our community support programs focus on helping those in need within our community. We provide essential aid to families facing hardships, assist elderly members of our community, and organize community events that bring people together. Through our outreach programs, we ensure that no one is left behind and that our community remains strong and united.'
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <h1>Our Causes</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Our Causes</li>
            </ol>
          </nav>
        </Container>
      </PageHeader>

      <CausesSection>
        <Container>
          <div className="section-title">
            <h2>What We Support</h2>
            <p>
              We focus on key areas where we can make the most significant impact. 
              Your support helps us address critical needs in communities around the world.
            </p>
          </div>
          
          {causes.map(cause => (
            <div key={cause.id} id={cause.title.toLowerCase().replace(/\s+/g, '-')}>
              <Row className="align-items-center">
                <Col lg={6} className="mb-4 mb-lg-0">
                  <CauseCard>
                    <Card.Img variant="top" src={cause.image} alt={cause.title} />
                    <Card.Body>
                      <Card.Title>{cause.icon} {cause.title}</Card.Title>
                      <Card.Text>{cause.description}</Card.Text>
                      <Card.Text>{cause.details}</Card.Text>
                      <div className="impact-stats">
                        <span className="impact">{cause.impact}</span>
                        <span className="location">Location: {cause.location}</span>
                      </div>
                    </Card.Body>
                  </CauseCard>
                </Col>
                <Col lg={6}>
                  <CauseDetails>
                    <div className="cause-detail-item">
                      <div className="icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="content">
                        <h5>Impact</h5>
                        <p>{cause.impact}</p>
                      </div>
                    </div>
                    <div className="cause-detail-item">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="content">
                        <h5>Where We Work</h5>
                        <p>{cause.location}</p>
                      </div>
                    </div>
                    <div className="cause-detail-item">
                      <div className="icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <div className="content">
                        <h5>Our Partners</h5>
                        <p>{cause.partners}</p>
                      </div>
                    </div>
                  </CauseDetails>
                </Col>
              </Row>
              {cause.id !== causes.length && <hr className="my-5" />}
            </div>
          ))}
        </Container>
      </CausesSection>
    </>
  );
};

export default Causes;
