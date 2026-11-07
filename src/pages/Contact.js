import React, { useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";
import WhiteHeartPageBanner from "../components/common/WhiteHeartPageBanner";
import "./Contact.css";

const contactCards = [
  {
    id: "location",
    icon: <FaMapMarkerAlt />,
    title: "Our location",
    body: <p>Malindi, Kilifi County, Kenya</p>,
  },
  {
    id: "phone",
    icon: <FaPhone />,
    title: "Phone number",
    body: (
      <p>
        <a href="tel:+254711995734">+254 711 995734</a>
      </p>
    ),
  },
  {
    id: "email",
    icon: <FaEnvelope />,
    title: "Email address",
    body: (
      <p>
        <a href="mailto:officialwhiteheartinfo@gmail.com">
          officialwhiteheartinfo@gmail.com
        </a>
      </p>
    ),
  },
  {
    id: "hours",
    icon: <FaClock />,
    title: "Office hours",
    body: (
      <>
        <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
        <p>Saturday: 10:00 AM – 2:00 PM</p>
        <p>Sunday: Closed</p>
      </>
    ),
  },
];

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      <WhiteHeartPageBanner
        eyebrow="WE WOULD LOVE TO HEAR FROM YOU"
        title="Let's talk."
        description="Have questions, suggestions, or want to get involved? Reach out using the form below or through any of our contact details."
        breadcrumb={[{ label: "CONTACT" }]}
        icon={<FaEnvelope />}
        statValue="Malindi"
        statLabel="Kilifi County, Kenya"
      />

      <section className="contact-content wh-section">
        <div className="wh-container">
          <div className="wh-section-heading">
            <span className="wh-eyebrow">GET IN TOUCH</span>
            <h2>We are here for you</h2>
            <p>
              Whether you want to volunteer, partner with us, or simply learn
              more, our door is always open.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-form-card">
              <span className="wh-eyebrow">SEND A MESSAGE</span>
              <h2>How can we help?</h2>
              <p>Fill in the form and we will get back to you soon.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label>
                    First name
                    <input type="text" name="firstName" required />
                  </label>
                  <label>
                    Last name
                    <input type="text" name="lastName" required />
                  </label>
                </div>

                <label>
                  Email address
                  <input type="email" name="email" required />
                </label>

                <label>
                  Phone number
                  <input type="tel" name="phone" />
                </label>

                <label>
                  Subject
                  <input type="text" name="subject" required />
                </label>

                <label>
                  Message
                  <textarea name="message" rows={5} required />
                </label>

                <button type="submit" className="wh-btn wh-btn--primary">
                  Send message <FaPaperPlane aria-hidden="true" />
                </button>

                {formSubmitted && (
                  <div className="contact-form__success" role="status">
                    <FaCheckCircle aria-hidden="true" />
                    <span>
                      Your message has been sent successfully. We will get back
                      to you soon!
                    </span>
                  </div>
                )}
              </form>
            </div>

            <aside className="contact-info" aria-label="Contact information">
              {contactCards.map((card) => (
                <article className="contact-info__card" key={card.id}>
                  <span className="contact-info__icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <div>
                    <h3>{card.title}</h3>
                    {card.body}
                  </div>
                </article>
              ))}
            </aside>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Malindi%2C%20Kenya&output=embed"
              title="WhiteHeart Charity location — Malindi, Kenya"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
