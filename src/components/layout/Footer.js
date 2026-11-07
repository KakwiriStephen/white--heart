import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaArrowUp,
  FaCheck,
  FaEnvelope,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const exploreLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/causes", label: "Our causes" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
];

const involvedLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/members", label: "Our members" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact us" },
];

const socials = [
  { href: "https://facebook.com", label: "Facebook", icon: <FaFacebookF /> },
  { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter /> },
  { href: "https://instagram.com", label: "Instagram", icon: <FaInstagram /> },
  { href: "https://tiktok.com", label: "TikTok", icon: <FaTiktok /> },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="wh-footer">
      <div className="wh-container wh-footer__inner">
        <div className="wh-footer__cta">
          <div className="wh-footer__cta-copy">
            <span className="wh-eyebrow">Small acts · lasting change</span>
            <h2>Stay close to the work we do.</h2>
            <p>
              Field stories, upcoming events and simple ways to help — delivered
              to your inbox. No noise, just impact.
            </p>
          </div>

          <form className="wh-footer__form" onSubmit={handleSubscribe}>
            <div className="wh-footer__field">
              <FaEnvelope aria-hidden="true" />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                aria-label="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <button type="submit" className="wh-footer__submit">
              {subscribed ? (
                <>
                  <FaCheck aria-hidden="true" /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <FaArrowRight aria-hidden="true" />
                </>
              )}
            </button>
            <p className="wh-footer__form-note" role="status" aria-live="polite">
              {subscribed
                ? "Thank you — you are on the list."
                : "We respect your inbox. Unsubscribe at any time."}
            </p>
          </form>
        </div>

        <div className="wh-footer__grid">
          <div className="wh-footer__brand">
            <Link to="/" className="wh-footer__brand-link">
              <img src="/images/wlogo.png" alt="WhiteHeart Charity" />
              <span>
                <strong>WhiteHeart</strong>
                <small>Charity</small>
              </span>
            </Link>
            <p>
              A community-driven charity built on compassion, generosity and
              collective action — together we build a better future for all.
            </p>
            <div className="wh-footer__socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="wh-footer__col" aria-label="Explore">
            <h3>Explore</h3>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="wh-footer__col" aria-label="Get involved">
            <h3>Get involved</h3>
            <ul>
              {involvedLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="wh-footer__col">
            <h3>Reach us</h3>
            <ul className="wh-footer__contact">
              <li>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>Malindi, Kilifi County, Kenya</span>
              </li>
              <li>
                <FaPhone aria-hidden="true" />
                <a href="tel:+254711995734">+254 711 995734</a>
              </li>
              <li>
                <FaEnvelope aria-hidden="true" />
                <a href="mailto:officialwhiteheartinfo@gmail.com">
                  officialwhiteheartinfo@gmail.com
                </a>
              </li>
            </ul>
            <Link to="/donate" className="wh-footer__donate">
              Donate today <FaHeart aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="wh-footer__bar">
        <div className="wh-container wh-footer__bar-inner">
          <p>
            © {new Date().getFullYear()} WhiteHeart Charity. All rights
            reserved.
          </p>
          <p>
            Made with{" "}
            <FaHeart className="wh-footer__heart" aria-hidden="true" /> for a
            better world.
          </p>
          <button type="button" className="wh-footer__top" onClick={scrollToTop}>
            Back to top <FaArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
