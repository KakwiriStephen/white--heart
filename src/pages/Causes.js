import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGraduationCap,
  FaHandsHelping,
  FaHeartbeat,
  FaUtensils,
} from "react-icons/fa";
import WhiteHeartPageBanner from "../components/common/WhiteHeartPageBanner";
import "./Causes.css";

const causes = [
  {
    id: 1,
    title: "Education",
    description: "Supporting local schools in Msabaha and surrounding areas.",
    image: "/images/e2.jpeg",
    icon: <FaGraduationCap />,
    impact: "100+ students supported",
    location: "Msabaha, Malindi",
    partners: ["Local schools", "Community leaders"],
    details:
      "Our education initiatives focus on providing quality education to children in our community. We work with local schools to improve infrastructure, provide educational materials, and support teachers. Through our mentorship program, we help students from underprivileged backgrounds excel academically and build their confidence. We believe that education is the key to breaking the cycle of poverty and creating opportunities for our youth.",
  },
  {
    id: 2,
    title: "Healthcare",
    description: "Assisting local healthcare facilities and patients.",
    image: "/images/h1.jpeg",
    icon: <FaHeartbeat />,
    impact: "Hundreds of patients helped",
    location: "Kilifi County",
    partners: ["Local clinics", "Health workers"],
    details:
      "We support healthcare initiatives in our community by providing essential medical supplies, assisting with patient care, and raising awareness about health issues. Our team regularly visits local clinics to provide support and ensure that medical services are accessible to everyone. We also organise health education campaigns to promote wellness and disease prevention in our community.",
  },
  {
    id: 3,
    title: "Community support",
    description: "Providing essential aid to local families and elders.",
    image: "/images/f1.jpeg",
    icon: <FaUtensils />,
    impact: "50+ families supported",
    location: "Local communities",
    partners: ["Community groups", "Local leaders"],
    details:
      "Our community support programs focus on helping those in need within our community. We provide essential aid to families facing hardships, assist elderly members of our community, and organise community events that bring people together. Through our outreach programs, we ensure that no one is left behind and that our community remains strong and united.",
  },
];

const Causes = () => {
  return (
    <div className="causes-page">
      <WhiteHeartPageBanner
        eyebrow="OUR CAUSES"
        title="Care, where it is needed most."
        description="We focus on the areas where we can make the most meaningful impact. Your support helps us meet critical needs in our community."
        breadcrumb={[{ label: "OUR CAUSES" }]}
        icon={<FaHandsHelping />}
        statValue="03"
        statLabel="Focus areas"
      />

      <section className="causes-content wh-section">
        <div className="wh-container">
          <div className="wh-section-heading">
            <span className="wh-eyebrow">WHAT WE SUPPORT</span>
            <h2>Three ways we show up</h2>
            <p>
              Every cause is rooted in the everyday needs of our community —
              and every gift helps us respond with care.
            </p>
          </div>

          <div className="causes-list">
            {causes.map((cause, index) => {
              const anchor = cause.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <article
                  className={`cause-row${index % 2 === 1 ? " cause-row--reverse" : ""}`}
                  id={anchor}
                  key={cause.id}
                >
                  <div className="cause-row__media">
                    <img src={cause.image} alt={cause.title} loading="lazy" />
                    <span className="cause-row__number">
                      {String(cause.id).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="cause-row__body">
                    <span className="cause-row__icon" aria-hidden="true">
                      {cause.icon}
                    </span>
                    <h2>{cause.title}</h2>
                    <p className="cause-row__lead">{cause.description}</p>
                    <p className="cause-row__detail">{cause.details}</p>

                    <dl className="cause-row__meta">
                      <div>
                        <dt>Impact</dt>
                        <dd>{cause.impact}</dd>
                      </div>
                      <div>
                        <dt>Where we work</dt>
                        <dd>{cause.location}</dd>
                      </div>
                      <div>
                        <dt>Our partners</dt>
                        <dd>{cause.partners.join(", ")}</dd>
                      </div>
                    </dl>

                    <div className="cause-row__actions">
                      <Link to="/donate" className="wh-btn wh-btn--primary">
                        Donate to this cause{" "}
                        <FaArrowRight aria-hidden="true" />
                      </Link>
                      <Link to="/contact" className="wh-btn wh-btn--outline">
                        Get involved
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Causes;
