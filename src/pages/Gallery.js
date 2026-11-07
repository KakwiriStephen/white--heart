import React, { useCallback, useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
  FaTimes,
} from "react-icons/fa";
import WhiteHeartPageBanner from "../components/common/WhiteHeartPageBanner";
import "./Gallery.css";

/* One album per event — each event holds as many photos as it needs. */
const galleryEvents = [
  {
    id: "pad-drive",
    title: "Pad Drive & School Visit",
    location: "Mashamba Primary School, Malindi",
    description:
      "Distributing sanitary pads and school supplies, and talking with pupils about hygiene and staying in school.",
    photos: [
      { src: "/images/e1.jpeg", caption: "Handing out supplies at Mashamba Primary School." },
      { src: "/images/e2.jpeg", caption: "Talking with pupils about hygiene and education." },
    ],
  },
  {
    id: "food-distribution",
    title: "Food Distribution Drive",
    location: "Malindi, Kilifi County",
    description:
      "Providing meals and food parcels to homeless and disaster-affected members of our community.",
    photos: [
      { src: "/images/f1.jpeg", caption: "Packing food parcels for distribution." },
      { src: "/images/f2.jpeg", caption: "Delivering food to families in need." },
    ],
  },
  {
    id: "correctional-visit",
    title: "Malindi Correctional Facility visit",
    location: "Malindi, Kilifi County",
    description:
      "Members visited the Malindi Correctional Facility to learn about the challenges inmates face and discuss ways to support rehabilitation.",
    photos: [
      { src: "/images/Prisonvisit.jpeg", caption: "WhiteHeart members outside the facility." },
    ],
  },
  {
    id: "healthcare-outreach",
    title: "Healthcare Outreach",
    location: "Malindi, Kilifi County",
    description:
      "Working with health workers to bring basic medical services to underserved communities.",
    photos: [
      { src: "/images/h1.jpeg", caption: "Medical services during the outreach." },
    ],
  },
  {
    id: "mentorship-programme",
    title: "Student Mentorship Programme",
    location: "Malindi, Kilifi County",
    description:
      "Mentoring boys and girls on academic progress, confidence and personal development.",
    photos: [
      { src: "/images/m1.jpeg", caption: "A mentorship session with students." },
    ],
  },
];

const totalPhotos = galleryEvents.reduce(
  (sum, event) => sum + event.photos.length,
  0
);

const Gallery = () => {
  const [activeEventId, setActiveEventId] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(null);

  const activeEvent = activeEventId
    ? galleryEvents.find((event) => event.id === activeEventId)
    : null;

  const closeLightbox = useCallback(() => setPhotoIndex(null), []);

  const stepPhoto = useCallback(
    (step) => {
      if (!activeEvent || photoIndex === null) return;
      const count = activeEvent.photos.length;
      setPhotoIndex((photoIndex + step + count) % count);
    },
    [activeEvent, photoIndex]
  );

  const openEvent = (id) => {
    setActiveEventId(id);
    setPhotoIndex(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeEvent = () => {
    setActiveEventId(null);
    setPhotoIndex(null);
  };

  useEffect(() => {
    if (photoIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") stepPhoto(1);
      if (event.key === "ArrowLeft") stepPhoto(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("gallery-lightbox-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("gallery-lightbox-open");
    };
  }, [photoIndex, closeLightbox, stepPhoto]);

  const lightboxPhoto =
    activeEvent && photoIndex !== null ? activeEvent.photos[photoIndex] : null;

  return (
    <div className="gallery-page">
      <WhiteHeartPageBanner
        eyebrow="MOMENTS THAT MATTER"
        title="Our gallery."
        description="Every event lives in its own album. Open a cover to browse all the moments from that day."
        breadcrumb={[{ label: "GALLERY" }]}
        icon={<FaImages />}
        statValue={String(galleryEvents.length).padStart(2, "0")}
        statLabel="Events captured"
      />

      <section className="gallery-content wh-section">
        <div className="wh-container">
          {!activeEvent ? (
            <>
              <div className="wh-section-heading">
                <span className="wh-eyebrow">PHOTO ALBUMS</span>
                <h2>Life in our community</h2>
                <p>
                  {galleryEvents.length} events, {totalPhotos} photographs — the
                  visits, projects and people that keep our hearts full.
                </p>
              </div>

              <div className="gallery-albums">
                {galleryEvents.map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    className="gallery-album"
                    onClick={() => openEvent(event.id)}
                    aria-label={`Open the ${event.title} album, ${event.photos.length} photos`}
                  >
                    <span className="gallery-album__media">
                      <img
                        src={event.photos[0].src}
                        alt={event.title}
                        loading="lazy"
                      />
                      <span className="gallery-album__count">
                        <FaImages aria-hidden="true" />
                        {String(event.photos.length).padStart(2, "0")}
                      </span>
                    </span>
                    <span className="gallery-album__body">
                      <span className="gallery-album__meta">
                        {event.location}
                      </span>
                      <span className="gallery-album__title">
                        {event.title}
                      </span>
                      <span className="gallery-album__desc">
                        {event.description}
                      </span>
                      <span className="gallery-album__cta">
                        View album <FaArrowRight aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                className="gallery-back"
                onClick={closeEvent}
              >
                <FaArrowLeft aria-hidden="true" /> All events
              </button>

              <div className="gallery-event-head">
                <span className="wh-eyebrow">{activeEvent.location}</span>
                <h2>{activeEvent.title}</h2>
                <p>{activeEvent.description}</p>
                <span className="gallery-event-head__count">
                  {String(activeEvent.photos.length).padStart(2, "0")} photos
                </span>
              </div>

              <div className="gallery-grid">
                {activeEvent.photos.map((photo, index) => (
                  <button
                    key={photo.src}
                    type="button"
                    className="gallery-card"
                    onClick={() => setPhotoIndex(index)}
                    aria-label={`View photo ${index + 1} of ${
                      activeEvent.photos.length
                    } larger`}
                  >
                    <img src={photo.src} alt={photo.caption} loading="lazy" />
                    <span className="gallery-card__index">{index + 1}</span>
                    <span className="gallery-card__overlay">
                      <span className="gallery-card__desc">
                        {photo.caption}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {lightboxPhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeEvent.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="gallery-lightbox__bar">
            <span className="gallery-lightbox__counter">
              {photoIndex + 1} / {activeEvent.photos.length}
            </span>
            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close image"
              autoFocus
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>

          {activeEvent.photos.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--prev"
                onClick={() => stepPhoto(-1)}
                aria-label="Previous photo"
              >
                <FaChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="gallery-lightbox__nav gallery-lightbox__nav--next"
                onClick={() => stepPhoto(1)}
                aria-label="Next photo"
              >
                <FaChevronRight aria-hidden="true" />
              </button>
            </>
          )}

          <figure className="gallery-lightbox__figure">
            <img src={lightboxPhoto.src} alt={lightboxPhoto.caption} />
            <figcaption className="gallery-lightbox__caption">
              <strong>{activeEvent.title}</strong>
              <span>{lightboxPhoto.caption}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default Gallery;
