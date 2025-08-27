import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Games.css"; // You’ll style it here

function Games() {
  const navigate = useNavigate();

  const games = [
    { title: "Breathing Exercises", icon: "🫧", path: "/games/breathing" },
    { title: "Mindful Puzzle", icon: "🧩", path: "/games/puzzle" },
    { title: "Calm Sound Mixer", icon: "🎶", path: "/games/sound-mixer" },
    { title: "Memory Match", icon: "🃏", path: "/games/memory" },
    { title: "Zen Garden", icon: "🪷", path: "/games/zen-garden" },
    { title: "Mood Reflection Journal Game", icon: "📓", path: "/games/journal" },
  ];

  return (
    <div className="games-page">
      <header className="games-header">
        <button className="back-btn" onClick={() => navigate(-1)}>←</button>
        <h2>Games</h2>
        <button className="settings-btn">⚙️</button>
      </header>

      <div className="games-grid">
        {games.map((game, idx) => (
          <div 
            key={idx} 
            className="game-card" 
            onClick={() => navigate(game.path)}
          >
            <span className="game-icon">{game.icon}</span>
            <p>{game.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
