// src/components/PeersMentor.jsx
import React, { useState } from "react";
import "../styles/PeersMentor.css";

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Lee",
    title: "Ph.D. in Psychology",
    experience: "8 years of experience",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Johnson",
    title: "Licensed Counselor",
    experience: "5 years of experience",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Grady",
    title: "Licensed Counselor",
    experience: "5 years of experience",
    image: "C:/Users/HP/Pictures/Screenshots/Screenshot 2025-08-25 035112.png"
  },
];

function PeersMentor() {
  const [search, setSearch] = useState("");

  const filteredMentors = mentors.filter((mentor) =>
    mentor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
    <div className="peers-container">
      <h2 className="title">Peers/Mentor</h2>
      <div className="header-actions">
        <input
          type="text"
          placeholder="🔍 Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
        <button className="filter-btn">Filter</button>
      </div>

      <div className="mentor-list">
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card">
            <img src={mentor.image} alt={mentor.name} className="mentor-img" />
            <div className="mentor-info">
              <h3>{mentor.name}</h3>
              <p>{mentor.title}</p>
              <p>{mentor.experience}</p>
              <button className="profile-btn">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default PeersMentor;
