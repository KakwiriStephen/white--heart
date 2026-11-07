import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import "./TestimonialSlider.css";

const testimonials = [
  {
    id: 1,
    text: "Their dedication to making a difference is truly inspiring. Every initiative they undertake brings hope, support, and positive change to countless lives.",
    name: "Abigail Choni",
    title: "Member",
    image: "/images/abi.jpeg",
  },
  {
    id: 2,
    text: "Their dedication to making a difference is truly inspiring. Every initiative they undertake brings hope, support, and positive change to countless lives.",
    name: "Monica Migwambo",
    title: "Member",
    image: "/images/monica.jpeg",
  },
  {
    id: 3,
    text: "Their commitment to uplifting the vulnerable is truly inspiring; every effort brings positive change to the community.",
    name: "Nila Washe",
    title: "Member",
    image: "/images/nila.jpeg",
  },
  {
    id: 4,
    text: "Through kindness and unwavering commitment, this charity changes lives and brings hope to those who need it most.",
    name: "Collins",
    title: "Member",
    image: "/images/collo.jpeg",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndex((currentIndex) => (currentIndex + 1) % total);
    }, 6500);

    return () => window.clearTimeout(timer);
  }, [index, total]);

  const goTo = (nextIndex) => {
    setIndex(((nextIndex % total) + total) % total);
  };

  return (
    <section className="wh-testimonials" aria-labelledby="testimonials-title">
      <div className="wh-container">
        <div className="wh-section-heading">
          <span className="wh-eyebrow">VOICES FROM OUR COMMUNITY</span>
          <h2 id="testimonials-title">What people say</h2>
          <p>
            Hear from the communities we have worked with, our volunteers, and
            the people who make our work possible.
          </p>
        </div>

        <div className="wh-testimonials__stage">
          <article className="wh-testimonial" key={current.id} aria-live="polite">
            <FaQuoteLeft className="wh-testimonial__quote" aria-hidden="true" />
            <p className="wh-testimonial__text">“{current.text}”</p>
            <div className="wh-testimonial__author">
              <img src={current.image} alt="" loading="lazy" />
              <div>
                <strong>{current.name}</strong>
                <span>{current.title}</span>
              </div>
            </div>
          </article>

          <div className="wh-testimonials__nav">
            <button
              type="button"
              className="wh-testimonials__arrow"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>

            <div className="wh-testimonials__dots">
              {testimonials.map((testimonial, dotIndex) => (
                <button
                  key={testimonial.id}
                  type="button"
                  className={`wh-testimonials__dot${
                    dotIndex === index ? " is-active" : ""
                  }`}
                  onClick={() => goTo(dotIndex)}
                  aria-label={`Show testimonial ${dotIndex + 1}`}
                  aria-current={dotIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              className="wh-testimonials__arrow"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
            >
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
