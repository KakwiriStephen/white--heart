import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaSearch, FaTimes } from 'react-icons/fa';

const PageHeader = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1540575861501-4975c0f3649c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80') no-repeat center center;
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

const GallerySection = styled.section`
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

const FilterBar = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  .filter-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    .badge {
      background-color: #fff;
      color: #333;
      border: 1px solid #ddd;
      padding: 8px 15px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover, &.active {
        background-color: #e74c3c;
        color: #fff;
        border-color: #e74c3c;
      }
    }
  }
`;

const GalleryGrid = styled.div`
  .gallery-item {
    margin-bottom: 30px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      
      .gallery-overlay {
        opacity: 1;
      }
    }
    
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      display: block;
    }
    
    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(231, 76, 60, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease;
      
      .overlay-content {
        text-align: center;
        color: #fff;
        padding: 20px;
        
        h4 {
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        p {
          margin-bottom: 15px;
          font-size: 0.9rem;
        }
        
        .btn-view {
          background-color: #fff;
          color: #e74c3c;
          border-radius: 30px;
          padding: 8px 20px;
          font-weight: 600;
          transition: all 0.3s ease;
          
          &:hover {
            background-color: #333;
            color: #fff;
          }
        }
      }
    }
  }
`;

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 30px;
  
  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    
    img {
      max-width: 100%;
      max-height: 80vh;
      display: block;
      border-radius: 5px;
    }
    
    .lightbox-caption {
      color: #fff;
      text-align: center;
      margin-top: 20px;
      
      h4 {
        font-weight: 700;
        margin-bottom: 5px;
      }
      
      p {
        color: rgba(255, 255, 255, 0.8);
      }
    }
    
    .close-btn {
      position: absolute;
      top: -40px;
      right: 0;
      background: none;
      border: none;
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        color: #e74c3c;
        transform: rotate(90deg);
      }
    }
  }
`;

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: null,
    currentTitle: '',
    currentDescription: ''
  });
  
  // Sample gallery data
  const galleryItems = [
    {
      id: 1,
      title: 'Pad Drive Program',
      description: 'Distributing sanitary pads to girls at Mashamba Primary School in Malindi',
      category: 'projects',
      image: '/images/e1.jpeg'
    },
    {
      id: 2,
      title: 'Mashamba Primary School Visit',
      description: 'Supporting education and hygiene programs at Msabaha, Malindi',
      category: 'projects',
      image: '/images/e2.jpeg'
    },
    {
      id: 3,
      title: 'Student Mentorship Program',
      description: 'Mentoring both boys and girls for academic and personal development',
      category: 'projects',
      image: '/images/m1.jpeg'
    },
    {
      id: 4,
      title: 'Education Initiative',
      description: 'Building schools and providing educational resources',
      category: 'projects',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 5,
      title: 'Healthcare Outreach',
      description: 'Medical services for underserved communities',
      category: 'projects',
      image: '/images/h1.jpeg'
    },
    {
      id: 6,
      title: 'Food Distribution',
      description: 'Providing meals to homeless and disaster-affected people',
      category: 'projects',
      image: '/images/f1.jpeg'
    },
  ];
  
  // Filter gallery items by category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  // Categories for filter
  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'projects', label: 'Projects' },
  ];
  
  // Open lightbox
  const openLightbox = (image, title, description) => {
    setLightbox({
      isOpen: true,
      currentImage: image,
      currentTitle: title,
      currentDescription: description
    });
    document.body.style.overflow = 'hidden';
  };
  
  // Close lightbox
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <PageHeader>
        <Container>
          <h1>Our Gallery</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Gallery</li>
            </ol>
          </nav>
        </Container>
      </PageHeader>

      <GallerySection>
        <Container>
          <div className="section-title">
            <h2>Photo Gallery</h2>
            <p>
              Explore our gallery of images showcasing our projects, events, and the incredible 
              volunteers who make our work possible.
            </p>
          </div>
          
          <FilterBar>
            <div className="filter-badges">
              {categories.map(category => (
                <span 
                  key={category.id}
                  className={`badge ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </span>
              ))}
            </div>
          </FilterBar>
          
          <GalleryGrid>
            <Row>
              {filteredItems.map(item => (
                <Col key={item.id} lg={4} md={6} className="mb-4">
                  <div className="gallery-item" onClick={() => openLightbox(item.image, item.title, item.description)}>
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-overlay">
                      <div className="overlay-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <Button className="btn-view">
                          <FaSearch className="me-2" /> View Larger
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </GalleryGrid>
        </Container>
      </GallerySection>
      
      {lightbox.isOpen && (
        <LightboxOverlay onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <img src={lightbox.currentImage} alt={lightbox.currentTitle} />
            <div className="lightbox-caption">
              <h4>{lightbox.currentTitle}</h4>
              <p>{lightbox.currentDescription}</p>
            </div>
          </div>
        </LightboxOverlay>
      )}
    </>
  );
};

export default Gallery;
