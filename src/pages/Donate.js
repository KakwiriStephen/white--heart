import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaCopy, FaHeart } from "react-icons/fa";
import "./Donate.css";

const bankDetails = {
  bank: "Diamond Trust Bank",
  paybill: "516600",
  account: "5067934001",
};

const Donate = () => {
  const [copyFeedback, setCopyFeedback] = useState({});

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback((feedback) => ({ ...feedback, [key]: "copied" }));
      window.setTimeout(() => {
        setCopyFeedback((feedback) => ({ ...feedback, [key]: "" }));
      }, 2000);
    } catch {
      setCopyFeedback((feedback) => ({ ...feedback, [key]: "error" }));
    }
  };

  const renderPaymentDetail = (label, value, key) => (
    <div className="donate-payment-detail">
      <div className="donate-payment-detail__text">
        <span className="donate-payment-detail__label">{label}</span>
        <strong className="donate-payment-detail__value">{value}</strong>
      </div>
      <button
        className={`donate-copy-button${copyFeedback[key] === "copied" ? " is-copied" : ""}`}
        type="button"
        onClick={() => copyToClipboard(value, key)}
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        {copyFeedback[key] === "copied" ? (
          <FaCheck aria-hidden="true" />
        ) : (
          <FaCopy aria-hidden="true" />
        )}
      </button>
      <span className="visually-hidden" aria-live="polite">
        {copyFeedback[key] === "copied"
          ? `${label} copied`
          : copyFeedback[key] === "error"
            ? `Could not copy ${label.toLowerCase()}. Please select and copy it manually.`
            : ""}
      </span>
    </div>
  );

  return (
    <div className="donate-page">
      <section className="donate-hero" aria-labelledby="donate-page-title">
        <div className="donate-hero__content">
          <nav className="donate-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">DONATE</span>
          </nav>

          <div className="donate-hero__copy">
            <span className="donate-eyebrow">A GIFT THAT GOES FURTHER</span>
            <h1 id="donate-page-title">
              Give with heart.
              <br />
              Make a difference.
            </h1>
            <p>
              Your generosity helps bring care, opportunity, and hope to
              communities that need it most.
            </p>
            <a className="donate-hero__link" href="#donation-details">
              Explore ways to give <FaArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="donate-hero__art" aria-hidden="true">
            <span className="donate-hero__halo" />
            <div className="donate-hero__heart">
              <FaHeart />
              <span>GIVE WITH<br />COMPASSION</span>
            </div>
            <div className="donate-impact-card">
              <strong>100%</strong>
              <span>of your gift supports our charitable work</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="donate-content"
        id="donation-details"
        aria-labelledby="donate-content-title"
      >
        <div className="donate-content__inner">
          <header className="donate-section-heading">
            <span className="donate-eyebrow">YOUR SUPPORT IN ACTION</span>
            <h2 id="donate-content-title">Every gift makes a difference</h2>
            <p>
              Make a secure contribution through M-Pesa and help us continue
              creating positive change.
            </p>
          </header>

          <div className="donate-layout">
            <section
              className="donate-payment-card"
              aria-labelledby="donate-payment-title"
            >
              <header className="donate-card-heading">
                <span className="donate-card-heading__eyebrow">
                  SIMPLE &amp; SECURE
                </span>
                <h2 id="donate-payment-title">Donate via M-Pesa</h2>
                <p>Use the details below to send your contribution.</p>
              </header>

              <div className="donate-bank-details">
                <div className="donate-bank-details__name">
                  <span className="donate-bank-details__icon">
                    <FaHeart aria-hidden="true" />
                  </span>
                  <div>
                    <span className="donate-payment-detail__label">BANK</span>
                    <strong>{bankDetails.bank}</strong>
                  </div>
                </div>
                {renderPaymentDetail(
                  "Paybill number",
                  bankDetails.paybill,
                  "paybill",
                )}
                {renderPaymentDetail(
                  "Account number",
                  bankDetails.account,
                  "account",
                )}
              </div>

              <div className="donate-instructions">
                <h3>How to donate</h3>
                <ol>
                  <li>Open the M-Pesa menu on your phone.</li>
                  <li>Select <strong>Lipa na M-Pesa</strong>, then <strong>Pay Bill</strong>.</li>
                  <li>
                    Enter paybill number <strong>{bankDetails.paybill}</strong>.
                  </li>
                  <li>
                    Enter account number <strong>{bankDetails.account}</strong>.
                  </li>
                  <li>Enter your donation amount and confirm with your M-Pesa PIN.</li>
                </ol>
              </div>
            </section>

            <aside className="donate-aside" aria-label="About your donation">
              <section className="donate-scripture">
                <span className="donate-scripture__eyebrow">A WORD TO INSPIRE</span>
                <FaHeart className="donate-scripture__icon" aria-hidden="true" />
                <blockquote>
                  “Each of you should give what you have decided in your heart
                  to give, not reluctantly or under compulsion, for God loves a
                  cheerful giver.”
                </blockquote>
                <cite>2 Corinthians 9:7</cite>
              </section>

              <section className="donate-promise">
                <span className="donate-eyebrow">OUR PROMISE TO YOU</span>
                <h3>Your kindness, put to work.</h3>
                <p>
                  <strong>100% of your donations</strong> go directly to our
                  charitable causes. Your contributions fund education
                  programs, healthcare initiatives, food distribution, and
                  community development projects.
                </p>
              </section>

              <p className="donate-thank-you">
                Thank you for being part of a more caring community.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
