import React, { useState } from "react";
import "../styles/Slider.css";

const sliderData = [
  {
    id: 1,
    type: "video",
    title: "Meditation Basics",
    description: "Learn basic meditation techniques.",
    link: "https://youtu.be/lXZ5Bo5lafA?si=ZMDt9WRUuzfJalPd",
    img: "https://pinedovefarm.com/wp-content/uploads/2017/09/bigstock-Yoga-outdoor-Happy-woman-doin-172357406.jpg", // image link
  },
  {
    id: 2,
    type: "article",
    title: "Stress Management Tips",
    description: "Read simple ways to reduce stress.",
    link: "https://example.com/stress-tips",
    img: "https://source.unsplash.com/1600x900/?stress,wellness",
  },
  {
    id: 3,
    type: "video",
    title: "Mindfulness Exercise",
    description: "A guided mindfulness exercise.",
    link: "https://youtu.be/abc123",
    img: "https://source.unsplash.com/1600x900/?mindfulness,peace",
  },
  {
    id: 4,
    type: "article",
    title: "Healthy Sleep Habits",
    description: "Tips for better sleep quality.",
    link: "https://example.com/sleep-tips",
    img: "https://source.unsplash.com/1600x900/?sleep,night",
  },
  {
    id: 5,
    type: "video",
    title: "Yoga for Relaxation",
    description: "A short yoga session for relaxation.",
    link: "https://youtu.be/xyz789",
    img: "https://source.unsplash.com/1600x900/?yoga,relax",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider-container">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderData.map((item) => (
          <div
            className="slide"
            key={item.id}
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            {/* Dark overlay for readability */}
            <div className="overlay" />

            <div className="slide-details">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.type === "video" ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  🎥 Watch Video
                </a>
              ) : (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  📖 Read Article
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="slider-dots">
        {sliderData.map((_, idx) => (
          <div
            key={idx}
            className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <button
        className="slider-btn prev"
        onClick={() =>
          setCurrentIndex(
            (currentIndex - 1 + sliderData.length) % sliderData.length
          )
        }
      >
        &#10094;
      </button>
      <button
        className="slider-btn next"
        onClick={() => setCurrentIndex((currentIndex + 1) % sliderData.length)}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
