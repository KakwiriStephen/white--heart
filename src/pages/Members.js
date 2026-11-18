import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./members.css";

const members = [
  {
    name: "Elina Kadzo Karisa",
    image: "/images/elina.jpeg",
    description:
      "Elina is a  a teacher and a valued member of White Hearts, supporting the group’s community and compassion initiatives.",
  },
  {
    name: "Francis Bobi Katana",
    image: "/images/Bobby.jpeg",
    description:
      "Francis brings his commitment and teamwork to White Hearts’ community outreach and support activities.",
  },
  {
    name: "Kakwiri Stephen Ngota",
    image: "/images/kakwiri5.jpeg",
    description:
      "Stephen is Senior Software Engineer and a dedicated member of White Hearts, contributing to the group’s mission of community support.",
  },

  {
    name: "Halima Ali Menza",
    image: null,
    description:
      "Halima contributes to the White Hearts community with dedication to supporting people and families in need.",
  },
  {
    name: "Esther Kache Koi",
    image: "/images/esther.jpeg",
    description:
      "Esther supports White Hearts through her active participation in the group’s community-focused work.",
  },
  {
    name: "Emily Sidi Koi",
    image: "/images/emily.jpeg",
    description:
      "Emily is committed to the group’s mission of compassion, togetherness, and meaningful local impact.",
  },
  {
    name: "Constance Susan Karisa",
    image: "/images/susan.jpeg",
    description:
      "Constance is a valued member whose contributions help strengthen White Hearts’ community programs.",
  },
  {
    name: "Ngome Simba James",
    image: "/images/simba.jpeg",
    description:
      "Ngome is Junior Software Engineer and an active member of White Hearts, supporting the group’s community initiatives.",
  },
  {
    name: "Faith Mutisya",
    image: "/images/fay.jpeg",
    description:
      "Faith participates in White Hearts’ efforts to promote kindness, connection, and community support.",
  },
  {
    name: "Agnes Karisa Dhuri",
    image: null,
    description:
      "Agnes contributes her commitment and care to the shared work of the White Hearts community.",
  },
  {
    name: "Julius Sifa",
    image: "/images/sifa.jpeg",
    description:
      "Julius is an active member who helps White Hearts turn compassion into practical community action.",
  },
  {
    name: "Marion Bahati Kazungu",
    image: "/images/Marion.jpeg",
    description:
      "Marion supports White Hearts through involvement in the group’s outreach and community activities.",
  },
  {
    name: "Robert Chai",
    image: null,
    description:
      "Robert is committed to working alongside fellow members to support and uplift the community.",
  },
  {
    name: "Collins Kazungu",
    image: "/images/Collins-Tyga.jpeg",
    description:
      "Collins brings his energy and participation to White Hearts’ mission of service and compassion.",
  },
];

const MEMBERS_PER_PAGE = 6;

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
          <span className="member-profile__initials">
            {getInitials(member.name)}
          </span>
          <small>PORTRAIT COMING SOON</small>
        </div>
      )}
      <div className="member-profile__body">
        <span className="member-profile__label">WHITE HEARTS · MEMBER</span>
        <h2>{member.name}</h2>
        <p>{member.description}</p>
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
          <div
            className="members-hero__count"
            aria-label={`${members.length} members`}
          >
            <strong>{String(members.length).padStart(2, "0")}</strong>
            <span>
              MEMBERS
              <br />
              AND COUNTING
            </span>
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
