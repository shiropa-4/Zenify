// src/pages/Home.jsx
import React from "react";
import Slider from "./Slider";
import Features from "./Features";
import { motion } from "framer-motion";
import "../styles/Home.css";

const featureData = [
  {
    title: "🎮 Fun Games",
    tagline: "Play. Relax. Refresh.",
    description:
      "Engage in interactive mini-games designed to refresh your mind and bring joy instantly.",
    img: "https://img.freepik.com/premium-vector/puzzle-game-pieces_18591-76537.jpg",
  },
  {
    title: "💬 Smart Chatbot",
    tagline: "Talk your heart out.",
    description:
      "Our AI-powered chatbot is always ready to listen, support, and provide guidance when needed.",
    img: "https://valiancesolutions.com/wp-content/uploads/2024/09/8-things-a-chatbot-needs-to-be-called-intelligent-scaled-1.jpg",
  },
  {
    title: "📊 Mood Tracker",
    tagline: "Track. Reflect. Grow.",
    description:
      "Keep track of your emotional patterns and gain insights to improve your mental well-being.",
    img: "https://i.pinimg.com/1200x/8d/6c/37/8d6c37be3001c083789174804bc0099e.jpg",
  },
  {
    title: "🤝 Peer Mentor",
    tagline: "Connect. Share. Support.",
    description:
      "Join a safe space to connect with mentors and peers who understand and support your journey.",
    img: "https://www.2civility.org/wp-content/uploads/2020/11/virtual-mentoring-2.jpg",
  },
];

function Home() {
  return (
    <div>
      <Slider />
      <Features />

      {/* Horizontal Feature Cards */}
      <div className="features-container">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`feature-card ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            {/* Image */}
            <div className="feature-img">
              <img src={feature.img} alt={feature.title} />
            </div>

            {/* Text Content */}
            <div className="feature-text">
              <h2>{feature.title}</h2>
              <p className="tagline">{feature.tagline}</p>
              <p>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Home;
