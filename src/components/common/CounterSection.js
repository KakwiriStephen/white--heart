import React from "react";
import {
  FaGlobeAmericas,
  FaHandHoldingHeart,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import "./CounterSection.css";

const counters = [
  { id: 1, value: "200", title: "Volunteers", icon: <FaUsers /> },
  { id: 2, value: "1", title: "Country reached", icon: <FaGlobeAmericas /> },
  {
    id: 3,
    value: "0.4M+",
    title: "Raised for our community",
    icon: <FaHandHoldingHeart />,
  },
  {
    id: 4,
    value: "20+",
    title: "Projects completed",
    icon: <FaCheckCircle />,
  },
];

const CounterSection = () => {
  return (
    <section className="wh-stats" aria-label="Our impact in numbers">
      <img
        className="wh-stats__watermark"
        src="/images/wlogo.png"
        alt=""
        aria-hidden="true"
      />
      <div className="wh-container">
        <div className="wh-stats__heading">
          <span className="wh-eyebrow">OUR IMPACT SO FAR</span>
          <h2>Kindness, measured in lives touched.</h2>
        </div>
        <div className="wh-stats__grid">
          {counters.map((counter) => (
            <div className="wh-stat" key={counter.id}>
              <span className="wh-stat__icon" aria-hidden="true">
                {counter.icon}
              </span>
              <strong className="wh-stat__value">{counter.value}</strong>
              <span className="wh-stat__title">{counter.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
