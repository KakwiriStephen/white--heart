import React from "react";
import { Link } from "react-router-dom";
import "./WhiteHeartPageBanner.css";

const WhiteHeartPageBanner = ({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  icon,
  statValue,
  statLabel,
  children,
  className = "",
}) => {
  return (
    <section className={`wh-banner ${className}`.trim()}>
      <div className="wh-banner__inner">
        <nav className="wh-banner__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">HOME</Link>
          <span aria-hidden="true">›</span>
          {breadcrumb.map((item, index) => {
            const isLast = index === breadcrumb.length - 1;
            return (
              <React.Fragment key={`${item.label}-${index}`}>
                {item.to && !isLast ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
                {!isLast && <span aria-hidden="true">›</span>}
              </React.Fragment>
            );
          })}
        </nav>

        <div className="wh-banner__copy">
          {eyebrow && <span className="wh-banner__eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children && <div className="wh-banner__actions">{children}</div>}
        </div>

        {(icon || statValue) && (
          <div className="wh-banner__art" aria-hidden="true">
            <span className="wh-banner__halo" />
            {icon && <div className="wh-banner__emblem">{icon}</div>}
            {statValue && (
              <div className="wh-banner__stat">
                <strong>{statValue}</strong>
                {statLabel && <span>{statLabel}</span>}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhiteHeartPageBanner;
