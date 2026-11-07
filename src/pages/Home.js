import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaGraduationCap,
  FaHandsHelping,
  FaHeart,
  FaHeartbeat,
  FaMapMarkerAlt,
} from "react-icons/fa";
import CounterSection from "../components/common/CounterSection";
import TestimonialSlider from "../components/common/TestimonialSlider";
import DonationModal from "../components/common/DonationModal";
import "./Home.css";

const causes = [
  {
    id: 1,
    title: "Education",
    description:
      "Supporting local schools in Msabaha and surrounding areas with learning materials, mentorship, and encouragement.",
    image: "/images/e1.jpeg",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Assisting local healthcare facilities and patients with essential supplies, care, and health awareness.",
    image: "/images/h1.jpeg",
    icon: <FaHeartbeat />,
  },
  {
    id: 3,
    title: "Community support",
    description:
      "Providing essential aid to families and elders, and bringing people together through community outreach.",
    image: "/images/f1.jpeg",
    icon: <FaHandsHelping />,
  },
];

const Home = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__inner">
          <div className="home-hero__copy">
            <span className="wh-eyebrow">WHITE HEART CHARITY · MALINDI, KENYA</span>
            <h1>Together, we can make a difference.</h1>
            <p>
              Join a community built on compassion and generosity. Your support
              brings care, opportunity, and hope to people who need it most.
            </p>
            <div className="home-hero__actions">
              <Link to="/donate" className="wh-btn wh-btn--primary">
                Donate now <FaArrowRight aria-hidden="true" />
              </Link>
              <Link to="/causes" className="wh-btn wh-btn--outline">
                Explore our causes
              </Link>
            </div>
            <div className="home-hero__notes">
              <span>
                <strong>25+</strong> volunteers
              </span>
              <span>
                <strong>2020</strong> founded
              </span>
              <span>
                <strong>1</strong> community, growing
              </span>
            </div>
          </div>

          <div className="home-hero__visual">
            <span className="home-hero__halo" aria-hidden="true" />
            <figure className="home-hero__photo home-hero__photo--main">
              <img
                src="/images/w1.jpeg"
                alt="WhiteHeart volunteers gathered together in Malindi"
              />
            </figure>
            <figure className="home-hero__photo home-hero__photo--small">
              <img
                src="/images/e2.jpeg"
                alt="WhiteHeart members visiting a local school"
              />
            </figure>
            <div className="home-hero__badge" aria-hidden="true">
              <FaHeart />
              <span>
                GIVE WITH
                <br />
                HEART
              </span>
            </div>
            <div className="home-hero__caption">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>
                <strong>Msabaha</strong>
                Malindi, Kilifi County
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about wh-section">
        <div className="wh-container home-about__grid">
          <div className="home-about__media">
            <img
              src="/images/Homevisit.jpg"
              alt="A WhiteHeart home visit with a family in the community"
              loading="lazy"
            />
            <div className="home-about__stamp">
              <strong>20+</strong>
              <span>
                projects
                <br />
                completed
              </span>
            </div>
          </div>

          <div className="home-about__copy">
            <span className="wh-eyebrow">WHO WE ARE</span>
            <h2>A community-driven force for good.</h2>
            <p>
              WhiteHeart Charity began as a simple idea among friends in 2020.
              What started as a close-knit group of schoolmates in Msabaha has
              grown into a family of 25 dedicated members from different
              communities.
            </p>
            <p>
              We reach out to those in need — in homesteads, hospitals, schools,
              and prisons — because we believe small acts of kindness can grow
              into something beautiful.
            </p>
            <ul className="home-about__list">
              <li>
                <FaCheck aria-hidden="true" /> Born from friendship in Msabaha,
                Malindi
              </li>
              <li>
                <FaCheck aria-hidden="true" /> 25+ dedicated volunteers
              </li>
              <li>
                <FaCheck aria-hidden="true" /> Care for hospitals, schools, and
                homes
              </li>
            </ul>
            <Link to="/about" className="wh-btn wh-btn--outline">
              Read our story <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="home-causes wh-section">
        <div className="wh-container">
          <div className="wh-section-heading">
            <span className="wh-eyebrow">WHERE WE FOCUS</span>
            <h2>Our causes</h2>
            <p>
              We focus on the areas where we can make the most meaningful
              impact, walking alongside our community every step of the way.
            </p>
          </div>

          <div className="home-causes__grid">
            {causes.map((cause) => (
              <article className="home-cause" key={cause.id}>
                <div className="home-cause__image">
                  <img src={cause.image} alt={cause.title} loading="lazy" />
                </div>
                <div className="home-cause__body">
                  <span className="home-cause__icon" aria-hidden="true">
                    {cause.icon}
                  </span>
                  <h3>{cause.title}</h3>
                  <p>{cause.description}</p>
                  <button
                    type="button"
                    className="home-cause__link"
                    onClick={() => setShowDonationModal(true)}
                  >
                    Support this cause <FaArrowRight aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="home-causes__footer">
            <Link to="/causes" className="wh-btn wh-btn--outline">
              View all causes <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CounterSection />

      <TestimonialSlider />

      <section className="home-cta">
        <div className="wh-container home-cta__inner">
          <div className="home-cta__copy">
            <span className="wh-eyebrow">MAKE A DIFFERENCE TODAY</span>
            <h2>Every act of kindness counts.</h2>
            <p>
              Whether you give, volunteer, or simply share our story, you become
              part of a more caring community.
            </p>
          </div>
          <div className="home-cta__actions">
            <Link to="/donate" className="wh-btn wh-btn--primary">
              <FaHeart aria-hidden="true" /> Donate now
            </Link>
            <Link to="/contact" className="wh-btn wh-btn--outline">
              Get involved
            </Link>
          </div>
        </div>
      </section>

      <DonationModal
        show={showDonationModal}
        onHide={() => setShowDonationModal(false)}
      />
    </div>
  );
};

export default Home;
