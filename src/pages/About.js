import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGlobeAmericas,
  FaHandsHelping,
  FaHeart,
  FaUsers,
} from "react-icons/fa";
import CounterSection from "../components/common/CounterSection";
import WhiteHeartPageBanner from "../components/common/WhiteHeartPageBanner";
import "./About.css";

const missionValues = [
  {
    id: 1,
    title: "Our mission",
    icon: <FaHeart />,
    text: "To empower communities through sustainable development programs and immediate relief in times of crisis.",
  },
  {
    id: 2,
    title: "Compassion",
    icon: <FaHandsHelping />,
    text: "We approach our work with empathy and a deep commitment to understanding the needs of those we serve.",
  },
  {
    id: 3,
    title: "Community",
    icon: <FaUsers />,
    text: "We believe in the power of community action and work closely with local partners to create lasting change.",
  },
  {
    id: 4,
    title: "Sustainability",
    icon: <FaGlobeAmericas />,
    text: "We develop programs that create long-term positive impact and empower communities to thrive independently.",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Taura Jiwe",
    position: "Chairperson",
    bio: "An Electrical Engineer with over 4 years of experience in project management and community development. He brings his expertise in management and leadership to the organization, ensuring that our initiatives are executed effectively and efficiently.",
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
    position: "Asst Secretary",
    bio: "A Teacher and Football coach, Ralph is dedicated to youth development and education, bringing a wealth of experience to our programs.",
    image: "/images/ralph.jpeg",
  },
  {
    id: 4,
    name: "Moses Mawazo",
    position: "Overseer",
    bio: "Moses is a Teacher and a Pastor, he is passionate about community service and has been instrumental in organizing our outreach programs.",
    image: "/images/mawazo.jpeg",
  },
  {
    id: 5,
    name: "John Katana",
    position: "Treasurer",
    bio: "John is a Third year IT student at Kenyatta University, he is fervent about technology and its potential to drive social change, bringing a fresh perspective to our financial management.",
    image: "/images/john5.jpeg",
  },
  {
    id: 6,
    name: "Tabitha Sidi",
    position: "Secretary",
    bio: "Tabitha is a cosmetologist with a background in community health and wellness, bringing a unique perspective to our programs.",
    image: "/images/sidi.jpeg",
  },
  {
    id: 7,
    name: "Gladys Kambi",
    position: "Social media manager",
    bio: "Gladys is a Third year Education student at Kenyatta University, she is ardent about social media and its potential to drive social change, bringing a fresh perspective to our outreach programs.",
    image: "/images/Gladys.jpeg",
  },
  {
    id: 8,
    name: "Abigael Choni",
    position: "Group attorney",
    bio: "Abigail is a certified Advocate, she is zealous about social justice and its potential to drive social change, bringing a fresh perspective to our legal matters.",
    image: "/images/abi.jpeg",
  },
];

const About = () => {
  return (
    <div className="about">
      <WhiteHeartPageBanner
        eyebrow="ABOUT WHITE HEART"
        title="A heart for community."
        description="We are a community-driven charity born from friendship in Msabaha, Malindi — moved by compassion and committed to lasting change."
        breadcrumb={[{ label: "ABOUT US" }]}
        icon={<FaHeart />}
        statValue="2020"
        statLabel="Founded in Msabaha"
      />

      <section className="about-mission wh-section">
        <div className="wh-container">
          <div className="wh-section-heading">
            <span className="wh-eyebrow">WHAT GUIDES US</span>
            <h2>Our mission &amp; values</h2>
            <p>
              At WhiteHeart Charity, a clear mission and strong values drive
              everything we do.
            </p>
          </div>

          <div className="about-mission__grid">
            {missionValues.map((value) => (
              <article className="about-value" key={value.id}>
                <span className="about-value__icon" aria-hidden="true">
                  {value.icon}
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-story wh-section">
        <div className="wh-container about-story__grid">
          <div className="about-story__media">
            <img
              src="/images/f2.jpeg"
              alt="WhiteHeart volunteers sharing time with the community"
              loading="lazy"
            />
            <span className="about-story__tag">
              <strong>Since 2020</strong>
              Msabaha · Malindi
            </span>
          </div>

          <div className="about-story__copy">
            <span className="wh-eyebrow">OUR STORY</span>
            <h2>It started with friendship.</h2>
            <p>
              WhiteHeart Charity began as a simple idea among friends in 2020. A
              group of young men and women, many from the vibrant community of
              Msabaha in Malindi, Kilifi County, came together with a shared
              vision: to make a difference in their own backyard.
            </p>
            <p>
              What started as a close-knit group of schoolmates has evolved into
              a powerful force for good. Inspired by Monica Migwambo&apos;s
              vision, we began our journey of community service, reaching out to
              those in need, whether in homesteads, hospitals, or schools.
            </p>
            <p>
              Today, our family has grown to include 25 dedicated members from
              various communities. We welcome everyone who shares our passion
              for creating positive change. Together, we are building a brighter
              future for our community and beyond.
            </p>
            <p>
              Our story is one of friendship, community, and the belief that
              small acts of kindness can grow into something beautiful. Join us
              in making a difference, one heart at a time.
            </p>
          </div>
        </div>
      </section>

      <CounterSection />

      <section className="about-team wh-section">
        <div className="wh-container">
          <div className="wh-section-heading">
            <span className="wh-eyebrow">THE PEOPLE BEHIND THE WORK</span>
            <h2>Our leadership team</h2>
            <p>
              Meet the dedicated individuals who lead our organisation and drive
              our mission forward.
            </p>
          </div>

          <div className="about-team__grid">
            {teamMembers.map((member) => (
              <article className="about-member" key={member.id}>
                <div className="about-member__image">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="about-member__body">
                  <span className="about-member__role">{member.position}</span>
                  <h3>{member.name}</h3>
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-team__cta">
            <Link to="/members" className="wh-btn wh-btn--primary">
              Get to know our members <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
