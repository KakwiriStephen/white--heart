import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";
import {
  FaArrowRight,
  FaHeart,
  FaHandsHelping,
  FaUsers,
  FaGlobeAmericas,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Common components
import CounterSection from "../components/common/CounterSection";

const PageHeader = styled.section`
  background:
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1469571486292-b53601021a68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")
      no-repeat center center;
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
        content: "";
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

const MissionSection = styled(Section)`
  background-color: #f9f9f9;

  .mission-card {
    height: 100%;
    border: none;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    text-align: center;
    padding: 40px 30px;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    }

    .mission-icon {
      font-size: 3rem;
      color: #e74c3c;
      margin-bottom: 20px;
    }

    .card-title {
      font-weight: 700;
      margin-bottom: 15px;
    }

    .card-text {
      color: #666;
    }
  }
`;

const StorySection = styled(Section)`
  .story-image {
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

  .story-content {
    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 20px;
      position: relative;
      padding-bottom: 15px;

      &:after {
        content: "";
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
  }
`;

const TeamSection = styled(Section)`
  background-color: #f9f9f9;

  .members-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 14px;
    padding: 13px 22px;
    border: 1px solid #e74c3c;
    border-radius: 3px;
    background: #e74c3c;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.25s ease;

    &:hover,
    &:focus-visible {
      border-color: #c0392b;
      background: #c0392b;
      color: #fff;
      transform: translateY(-2px);
    }

    &:focus-visible {
      outline: 2px solid #a93226;
      outline-offset: 3px;
    }
  }

  .team-card {
    height: 100%;
    border: 1px solid #eee6e2;
    border-radius: 2px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 8px 24px rgba(43, 41, 40, 0.045);
    transition:
      transform 180ms ease,
      box-shadow 180ms ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 30px rgba(43, 41, 40, 0.1);

      .card-img-top {
        transform: scale(1.025);
      }
    }

    .card-img-top {
      height: 225px;
      width: 100%;
      object-fit: cover;
      object-position: center 30%;
      background: #ebe4e0;
      transition: transform 0.35s ease;
    }

    .card-body {
      min-height: 158px;
      padding: 17px 17px 19px;
      text-align: left;
    }

    .card-title {
      margin: 0 0 6px;
      color: #000;
      font-family: "Marcellus", Georgia, serif;
      font-size: 17px;
      font-weight: 400;
      line-height: 1.3;
    }

    .team-position {
      margin: 0 0 10px;
      color: #a87964;
      font-family: "Inter", "Poppins", sans-serif;
      font-size: 8px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .team-bio {
      margin: 0;
      color: #77716e;
      font-family: "Inter", "Poppins", sans-serif;
      font-size: 11px;
      font-weight: 300;
      line-height: 1.8;
    }

    .contact-info {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      svg {
        font-size: 1.5rem;
        color: #e74c3c;
        margin-right: 10px;
      }

      span {
        font-weight: 500;
        color: #333;
      }
    }
  }

  @media (max-width: 767px) {
    .team-card .card-img-top {
      height: 205px;
    }

    .team-card .card-body {
      min-height: 145px;
      padding: 15px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .team-card,
    .team-card .card-img-top {
      transition: none;
    }
  }

  body[data-theme="dark"] & {
    background-color: #171a21;

    .team-card {
      border-color: #3b4352;
      background: #222733;

      .card-title {
        color: #f1f2f5;
      }

      .team-bio {
        color: #b7bdc8;
      }
    }
  }
`;

const About = () => {
  // Sample team data
  const teamMembers = [
    {
      id: 1,
      name: "Taura Jiwe",
      position: "Chairperson",
      bio: "An Electrical Engineer with over 4 years of experience in project management and community development.He brings his expertise in management and leadership to the organization, ensuring that our initiatives are executed effectively and efficiently.",
      image: "/images/jiwe.jpeg",
    },
    {
      id: 2,
      name: "Kadzo Ngundi",
      position: "Assistant Chair",
      bio: "An Accountant with a passion for social work and community development, Kadzo brings financial expertise to our team.",
      image: "/images/Jackline.jpeg",
    },
    {
      id: 3,
      name: "Ralph Karanja",
      position: " Asst Secretary",
      bio: "A Teacher and Football coach,Ralph is dedicated to youth development and education, bringing a wealth of experience to our programs.",
      image: "/images/ralph.jpeg",
    },
    {
      id: 4,
      name: "Moses Mawazo",
      position: "Overseer",
      bio: "Moses is a Teacher and a Pastor, he is passionate about community service and has been instrumental in organizing our outreach programs.  ",
      image: "/images/mawazo.jpeg",
    },
    {
      id: 6,
      name: "John Katana",
      position: "Treasurer",
      bio: "John is a Third year IT student at Kenyatta University,he is fervent about technology and its potential to drive social change, bringing a fresh perspective to our financial management.",
      image: "/images/john5.jpeg",
    },
    {
      id: 5,
      name: "Tabitha Sidi",
      position: "Secretary",
      bio: "Tabitha is a cosmetologist with a background in community health and wellness, bringing a unique perspective to our programs.",
      image: "/images/sidi.jpeg",
    },
    {
      id: 7,
      name: "Gladys Kambi",
      position: "Social media Manager",
      bio: "Gladys is a Third year Education student at Kenyatta University, she is ardent about social media and its potential to drive social change, bringing a fresh perspective to our outreach programs.",
      image: "/images/Gladys.jpeg",
    },
    {
      id: 8,
      name: "Abigael Choni",
      position: "Group Attorney",
      bio: "Abigail is a certified Advocate, she is zelous about social justice and its potential to drive social change, bringing a fresh perspective to our legal matters.",
      image: "/images/abi.jpeg",
    },
  ];

  return (
    <>
      <PageHeader>
        <Container>
          <h1>About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </Container>
      </PageHeader>

      <MissionSection>
        <Container>
          <div className="section-title">
            <h2>Our Mission & Values</h2>
            <p>
              At WhiteHeart Charity, we are guided by a clear mission and strong
              values that drive everything we do.
            </p>
          </div>

          <Row>
            <Col lg={3} md={6} className="mb-4">
              <Card className="mission-card">
                <FaHeart className="mission-icon" />
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  To empower communities through sustainable development
                  programs and immediate relief in times of crisis.
                </Card.Text>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <Card className="mission-card">
                <FaHandsHelping className="mission-icon" />
                <Card.Title>Compassion</Card.Title>
                <Card.Text>
                  We approach our work with empathy and a deep commitment to
                  understanding the needs of those we serve.
                </Card.Text>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <Card className="mission-card">
                <FaUsers className="mission-icon" />
                <Card.Title>Community</Card.Title>
                <Card.Text>
                  We believe in the power of community action and work closely
                  with local partners to create lasting change.
                </Card.Text>
              </Card>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <Card className="mission-card">
                <FaGlobeAmericas className="mission-icon" />
                <Card.Title>Sustainability</Card.Title>
                <Card.Text>
                  We develop programs that create long-term positive impact and
                  empower communities to thrive independently.
                </Card.Text>
              </Card>
            </Col>
          </Row>
        </Container>
      </MissionSection>

      <StorySection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="story-image">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Our Story"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="story-content">
                <h3>Our Story</h3>
                <p>
                  WhiteHeart Charity began as a simple idea among friends in
                  2020. A group of young men and women, many from the vibrant
                  community of Msabaha in Malindi, Kilifi County, came together
                  with a shared vision: to make a difference in their own
                  backyard.
                </p>
                <p>
                  What started as a close-knit group of schoolmates has evolved
                  into a powerful force for good. Inspired by Monica Migwambo's
                  vision, we began our journey of community service, reaching
                  out to those in need, whether in homesteads, hospitals, or
                  schools.
                </p>
                <p>
                  Today, our family has grown to include 25 dedicated members
                  from various communities. We welcome everyone who shares our
                  passion for creating positive change. Together, we're building
                  a brighter future for our community and beyond.
                </p>
                <p>
                  Our story is one of friendship, community, and the belief that
                  small acts of kindness can grow into something beautiful. Join
                  us in making a difference, one heart at a time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </StorySection>

      <CounterSection />

      <TeamSection>
        <Container>
          <div className="section-title">
            <h2>Our Leadership Team</h2>
            <p>
              Meet the dedicated individuals who lead our organization and drive
              our mission forward.
            </p>
          </div>

          <Row>
            {teamMembers.map((member) => (
              <Col key={member.id} lg={3} md={6} className="mb-4">
                <Card className="team-card">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    className="card-img-top"
                  />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <h6 className="team-position">{member.position}</h6>
                    <p className="team-bio">{member.bio}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <Link className="members-cta" to="/members">
              Get to know our members
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </TeamSection>
    </>
  );
};

export default About;
