import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./members.css";

const members = [
  { name: "Elina Kadzo Karisa", image: null },
  { name: "Francis Bobi Katana", image: null },
  { name: "Kakwiri Stephen Ngota", image: "/images/kakwir.jpeg" },
  { name: "Halima Ali Menza", image: null },
  { name: "Esther Kache Koi", image: null },
  { name: "Emily Sidi Koi", image: null },
  { name: "Constance Susan Karisa", image: null },
  { name: "Ngome Simba James", image: null },
  { name: "Faith Mutisya", image: "/images/fay.jpeg" },
  { name: "Agnes Karisa Dhuri", image: null },
  { name: "Julius Sifa", image: null },
  { name: "Marion Bahati Kazungu", image: null },
  { name: "Robert Chai", image: null },
  { name: "Collins Kazungu", image: null },
];

const MEMBERS_PER_PAGE = 6;
const memberDescription =
  "Working alongside fellow members to support the community with compassion and care.";

const getInitials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

function MemberProfile({ member, index }) {
  return (
    <article className="member-profile">
      {member.image ? (
        <img
          className="member-profile__image"
          src={member.image}
          alt={member.name}
          loading="lazy"
        />
      ) : (
        <div
          className="member-profile__image member-profile__image--placeholder"
          role="img"
          aria-label={`Photo placeholder for ${member.name}`}
        >
          <span className="member-profile__number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="member-profile__initials">{getInitials(member.name)}</span>
          <small>PORTRAIT COMING SOON</small>
        </div>
      )}
      <div className="member-profile__body">
        <span className="member-profile__label">WHITE HEARTS · MEMBER</span>
        <h2>{member.name}</h2>
        <p>{memberDescription}</p>
      </div>
    </article>
  );
}

const Members = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(members.length / MEMBERS_PER_PAGE);
  const pageMembers = members.slice(
    (currentPage - 1) * MEMBERS_PER_PAGE,
    currentPage * MEMBERS_PER_PAGE,
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="members-page">
      <header className="members-hero">
        <div className="members-hero__inner">
          <nav className="members-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span aria-hidden="true">›</span>
            <Link to="/about">ABOUT US</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">OUR MEMBERS</span>
          </nav>
          <div className="members-hero__copy">
            <span className="members-eyebrow">THE HEART OF OUR COMMUNITY</span>
            <h1>Meet our members</h1>
            <p>
              Get to know the people who make White Hearts Self Help Group a
              caring, committed community.
            </p>
          </div>
          <div className="members-hero__count" aria-label={`${members.length} members`}>
            <strong>{String(members.length).padStart(2, "0")}</strong>
            <span>MEMBERS<br />AND COUNTING</span>
          </div>
        </div>
      </header>

      <section className="members-content" aria-label="White Hearts members">
        <div className="members-content__inner">
          <div className="members-list" aria-live="polite">
            {pageMembers.map((member, index) => (
              <MemberProfile
                key={member.name}
                member={member}
                index={(currentPage - 1) * MEMBERS_PER_PAGE + index}
              />
            ))}
          </div>

          <nav className="members-pagination" aria-label="Members pages">
            <button
              className="members-pagination__arrow"
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Go to previous page"
            >
              <FaArrowLeft aria-hidden="true" />
              <span>Previous</span>
            </button>
            <div className="members-pagination__pages">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`members-pagination__page${currentPage === page ? " is-active" : ""}`}
                    type="button"
                    onClick={() => goToPage(page)}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>
            <button
              className="members-pagination__arrow"
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === pageCount}
              aria-label="Go to next page"
            >
              <span>Next</span>
              <FaArrowRight aria-hidden="true" />
            </button>
          </nav>

          <p className="members-pagination__summary" aria-live="polite">
            Showing {(currentPage - 1) * MEMBERS_PER_PAGE + 1}–
            {Math.min(currentPage * MEMBERS_PER_PAGE, members.length)} of{" "}
            {members.length} members
          </p>
        </div>
      </section>
    </div>
  );
};

export default Members;
