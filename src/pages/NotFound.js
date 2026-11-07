import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__inner">
        <div className="not-found__art" aria-hidden="true">
          <span className="not-found__halo" />
          <span className="not-found__code">404</span>
          <span className="not-found__heart">
            <FaHeart />
          </span>
        </div>

        <span className="wh-eyebrow">LOST, BUT NOT ALONE</span>
        <h1>Page not found</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="not-found__actions">
          <Link to="/" className="wh-btn wh-btn--primary">
            <FaArrowLeft aria-hidden="true" /> Back to home
          </Link>
          <Link to="/causes" className="wh-btn wh-btn--outline">
            Explore our causes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
